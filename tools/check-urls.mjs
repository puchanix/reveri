// Acceptance test: every legacy URL must answer 200, or redirect (301/308) to a URL that answers 200.
// Usage: node tools/check-urls.mjs https://<vercel-preview>.vercel.app
import { readFileSync } from 'node:fs';
const base = process.argv[2] || 'https://www.reveri.com';
const urls = readFileSync(new URL('./legacy-urls.txt', import.meta.url), 'utf8').split('\n').map(s => s.trim()).filter(Boolean);
let bad = 0;
for (const u of urls) {
  const r = await fetch(base + u, { redirect: 'manual', headers: { 'user-agent': 'reveri-url-check' } });
  let status = r.status, note = r.headers.get('x-reveri-bridge') ? ' (bridge)' : '';
  if (status >= 300 && status < 400) {
    const loc = new URL(r.headers.get('location'), base);
    const r2 = await fetch(loc, { headers: { 'user-agent': 'reveri-url-check' } });
    note = ` → ${loc.pathname} ${r2.status}`; if (r2.status !== 200) bad++;
  } else if (status !== 200) bad++;
  console.log(`${status}  ${u}${note}`);
}
console.log(bad ? `\n${bad} URL(s) failed` : `\nAll ${urls.length} legacy URLs OK`);
process.exit(bad ? 1 : 0);
