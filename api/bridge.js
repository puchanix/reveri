// Bridge: serves any URL that has not been rebuilt yet from the legacy Squarespace site,
// at the same reveri.com URL, so nothing 404s during the migration.
// Vercel checks the static files in dist/ first; only paths with no static match reach this function.
// Requires (at DNS cutover): in Squarespace → Domains, make the built-in domain primary, so it stops
// redirecting to www.reveri.com. Remove this function when the last legacy page has been migrated.
const LEGACY = process.env.LEGACY_ORIGIN || 'https://clementine-fife-tsbc.squarespace.com';
const PUBLIC = 'https://www.reveri.com';

export default async function handler(req, res) {
  const path = '/' + (req.query.path || '');
  const qs = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')).replace(/([?&])path=[^&]*&?/, '$1').replace(/[?&]$/, '') : '';
  const target = LEGACY + path + qs;
  let upstream;
  try {
    upstream = await fetch(target, { redirect: 'manual', headers: { 'user-agent': req.headers['user-agent'] || 'reveri-bridge', 'accept': req.headers['accept'] || '*/*', 'accept-language': req.headers['accept-language'] || 'en' } });
  } catch (e) {
    res.status(502).send('Legacy site unreachable'); return;
  }
  // Squarespace redirects its built-in domain to the primary domain until the built-in domain is made primary.
  const loc = upstream.headers.get('location');
  if (upstream.status >= 300 && upstream.status < 400 && loc) {
    const u = new URL(loc, LEGACY);
    if (u.hostname === new URL(PUBLIC).hostname || u.hostname === new URL(LEGACY).hostname) {
      // Internal redirect: follow it on the legacy host once, then serve.
      upstream = await fetch(LEGACY + u.pathname + u.search, { redirect: 'manual', headers: { 'user-agent': req.headers['user-agent'] || 'reveri-bridge' } });
      const loc2 = upstream.headers.get('location');
      if (upstream.status >= 300 && upstream.status < 400 && loc2) { res.status(502).send('Bridge loop: make the Squarespace built-in domain primary.'); return; }
    } else { res.redirect(upstream.status, loc); return; }
  }
  const type = upstream.headers.get('content-type') || 'application/octet-stream';
  res.status(upstream.status);
  res.setHeader('content-type', type);
  res.setHeader('cache-control', upstream.status === 200 ? 'public, s-maxage=600, stale-while-revalidate=86400' : 'no-store');
  res.setHeader('x-reveri-bridge', 'legacy');
  if (/^(text\/|application\/(json|javascript|xml|rss))/.test(type)) {
    let body = await upstream.text();
    body = body.split(new URL(LEGACY).hostname).join(new URL(PUBLIC).hostname);
    res.send(body);
  } else {
    res.send(Buffer.from(await upstream.arrayBuffer()));
  }
}
