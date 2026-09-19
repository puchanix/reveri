// Reveri static site builder — zero dependencies, runs on Node 18+.
// src/pages/*.html  →  dist/<path>/index.html   (front matter sets path/title/description)
// src/partials/*.html are included with {{> name}}; {{var}} substitutes front-matter values.
// public/ is copied to dist/ as-is.  sitemap.xml is generated from the pages.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, cpSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';

const SITE = 'https://www.reveri.com';
const SRC = 'src', OUT = 'dist';
const partials = Object.fromEntries(readdirSync(join(SRC, 'partials')).map(f => [f.replace(/\.html$/, ''), readFileSync(join(SRC, 'partials', f), 'utf8')]));

function parse(file) {
  const raw = readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error(`No front matter in ${file}`);
  const meta = {};
  for (const line of m[1].split('\n')) { const i = line.indexOf(':'); if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim(); }
  return { meta, body: m[2] };
}
function render(tpl, vars) {
  let out = tpl.replace(/\{\{>\s*([\w-]+)\s*\}\}/g, (_, n) => { if (!(n in partials)) throw new Error(`Missing partial ${n}`); return render(partials[n], vars); });
  out = out.replace(/\{\{\s*([\w-]+)\s*\}\}/g, (_, k) => vars[k] ?? '');
  return out;
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync('public', OUT, { recursive: true });
cpSync(join(SRC, 'css'), join(OUT, 'assets'), { recursive: true });

const pages = [];
for (const f of readdirSync(join(SRC, 'pages'))) {
  if (!f.endsWith('.html') || f.startsWith('_')) continue;
  const { meta, body } = parse(join(SRC, 'pages', f));
  const path = meta.path ?? ('/' + f.replace(/\.html$/, ''));
  const vars = {
    site: SITE, path, canonical: SITE + (path === '/' ? '/' : path),
    og_image: meta.og_image ?? '/assets/david-og.jpg', body_class: meta.body_class ?? '',
    extra_head: '', ...meta,
  };
  const html = render(partials.layout, { ...vars, content: render(body, vars) });
  const outFile = path === '/' ? join(OUT, 'index.html') : path === '/404' ? join(OUT, '404.html') : join(OUT, path.replace(/^\//, ''), 'index.html');
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, html);
  if (meta.noindex !== 'true') pages.push({ path, priority: meta.priority ?? (path === '/' ? '1.0' : '0.7') });
}
writeFileSync(join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  pages.map(p => `  <url><loc>${SITE}${p.path === '/' ? '/' : p.path}</loc><priority>${p.priority}</priority></url>`).join('\n') + `\n</urlset>\n`);
console.log(`Built ${pages.length} pages → ${OUT}/`);
