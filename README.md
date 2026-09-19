# reveri.com

Static site for Reveri, built from plain HTML with one tiny zero-dependency build step, hosted on Vercel. Every legacy URL from the Squarespace site keeps working from day one: rebuilt pages are served from this repo, everything else is bridged to the old site at the same URL until it is migrated.

## Layout

```
build.mjs            assembles src/pages + src/partials → dist/ (Vercel runs this)
package.json         `npm run build`, `npm run test:urls`
vercel.json          clean URLs, headers, redirects, and the bridge rewrites
api/bridge.js        serves not-yet-migrated URLs from the legacy Squarespace site
api/price.js         local pricing for /pricing (country → price table; USD by default)
src/partials/        layout.html, header.html, footer.html, analytics.html, scripts.html, condition-css.html
src/pages/           one file per page; front matter sets path, title, description, priority
src/css/site.css     shared styles — tokens mirror the app (Design Baseline v0.2)
public/              copied as-is: assets (fonts, images, video), favicon, robots.txt
tools/legacy-urls.txt  every URL from the old sitemap that is not a blog post
tools/check-urls.mjs   acceptance test: all legacy URLs must return 200 (or redirect to a 200)
```

## Editing a page

Open `src/pages/<name>.html`. The block between the `---` lines is the page's metadata (`path`, `title`, `description`, `priority`; add `noindex: true` to keep a page out of the sitemap). Everything below it is the page body; the header, footer, analytics and scripts come from the partials. Page-specific CSS goes in a `<style>` block at the top of the body. Run `node build.mjs` to build locally; Vercel builds on every push.

Adding a page: create the file with a `path:`, build, and it appears in `sitemap.xml` automatically. If it replaces a bridged legacy URL, delete that URL's rewrite from `vercel.json`.

## Design

Everything follows the Reveri Design Baseline v0.2 (the artifact of that name): PP Neue Montreal for everything including numbers; Bradford LL italic only for one emphasis word in a headline (`<em>` inside `h1`/`h2`) and for words attributed to David (`.david`); Lavender 80 `#43266F` for the one solid button per page; Lavender 70 `#5A2390` for links and eyebrows; cream page `#F3EEE9`, card `#FBF9F7`, white bands. Fonts are self-hosted in `public/assets/fonts` (from the app's own font files; Montreal is licensed from Pangram Pangram, Bradford from Lineto — confirm the web licence covers self-hosting).

## Deploying on Vercel

1. Push to a Git repository and import it in Vercel. Framework preset **Other**. Build command and output directory are read from `vercel.json` (`node build.mjs`, `dist`). Node 18+.
2. Every push to the default branch deploys production; branches and PRs get preview URLs.
3. Run the acceptance test against the preview: `node tools/check-urls.mjs https://<preview>.vercel.app`. It must print "All … legacy URLs OK" before cutover.

### Cutover checklist

1. **Squarespace → Domains: make the built-in domain (`clementine-fife-tsbc.squarespace.com`) primary.** This stops Squarespace redirecting it to www.reveri.com, which the bridge depends on. Do this right before switching DNS, not earlier.
2. In Vercel: Settings → Domains → add `www.reveri.com` and `reveri.com` (apex redirects to www). Set the DNS records Vercel shows at the registrar.
3. Re-run `tools/check-urls.mjs https://www.reveri.com` once DNS has propagated.
4. Google Search Console: the property is the same (`https://www.reveri.com/`), so no change of address. Submit `https://www.reveri.com/sitemap.xml`. Watch Coverage and the `page_404` event in GA4 for a week.
5. Keep Squarespace paid until the last bridged URL has been migrated (blog, success stories, legal, the science sub-pages, the podcast and campaign landers).

## The bridge (api/bridge.js)

Vercel serves static files from `dist/` first. Paths listed in `vercel.json` `rewrites` — the legacy URLs not yet rebuilt, plus `/knowledge/*`, `/success-stories/*`, `/s/*` (PDFs) and `/personalized-plan-*` — are handled by `api/bridge.js`, which fetches the same path from the Squarespace built-in domain, rewrites the domain inside the HTML so canonicals and internal links keep pointing at reveri.com, and returns it with a short CDN cache. Visitors and Google see the same URL with the same content. Remove each rewrite as its page is migrated, and delete the function when the list is empty.

## Still to migrate (bridged today)

Blog (`/knowledge`, 127 posts) and success stories (23) — export from Squarespace (Settings → Advanced → Import/Export, WordPress format) and convert; images need downloading from the Squarespace CDN. Legal (`/terms-of-service`, `/privacy-policy`) — bridged verbatim; Ariel has flagged both for a rewrite, which should land here as `src/pages/terms-of-service.html` and `privacy-policy.html`. Science sub-pages (`/safety-of-hypnosis`, `/brain-activity-during-hypnosis`, `/hypnotizability`, `/hypnotizability-test`, `/hypnosis-vs-placebo`, `/genes`). Podcast landers (`/huberman-lab-dr-david-spiegel`, `/tim-ferriss-…`, etc.), the thirteen `/personalized-plan-*` ad landers, `/forgood`, `/reveri-for-women`, partner protocols and the remaining condition pages (confidence, procrastination, golf, growth mindset, intrusive thoughts, be present, natural pain, focus, endometriosis, migraine).

## Before launch

- **Pricing.** `/pricing` shows the default offering (yearly $99.99 = $8.33/mo; monthly $24.99) in USD. Regional prices go in `api/price.js` `TABLE` once confirmed from RevenueCat/Stripe; the page swaps them in by country automatically. If the live experiment changes the default offering, change the two numbers in `src/pages/pricing.html` and the JSON-LD block at the bottom of it.
- **Copy to confirm with Dr. Spiegel.** The quote on `/what-it-helps-with` ("I treat the person"), the four pain techniques on `/hypnosis-pain-management`, and the dark-band quote on the homepage are written in his register from the plan and the board call, not verbatim from him.
- **Careers** points at `careers@reveri.com`; confirm the inbox exists.
- **Press links.** In the "Featured in" logo rows, Huberman Lab and Vogue link out; NYT, Women's Health, Men's Health and The Times have no article URL yet.
- **Analytics** is GA4 `G-4W0534HQSY` in `src/partials/analytics.html`. Pages fire `site_click` for every `data-track` element, `scroll_depth` at 25/50/75/100, `video_play`/`video_complete` on the homepage, and `page_404`.
