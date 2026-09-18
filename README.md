# reveri.com

Static site for Reveri. No build step, no framework: plain HTML with inline CSS and a few lines of JS per page, hosted on Vercel.

## Layout

```
index.html          homepage
favicon.svg
robots.txt
sitemap.xml         add a <url> entry for every page you migrate
vercel.json         headers, clean URLs, temporary redirects to the old site
assets/
  david-intro.mp4    hero video (vertical crop, 2 MB, h264 + aac)
  david-intro.mp3    audio-only version (unused for now)
  david-hero.webp    hero photo (4:5), shown until the video is played
  david-hero.jpg     jpeg fallback for the hero photo
  david-portrait.jpg square crop used in the "The doctor" band
  david-og.jpg       1200x630 social-share image
```

The wordmark is `assets/reveri-wordmark.svg`, traced from the current site's PNG (the PNG on the Squarespace CDN is soft; the SVG is crisp at any size). If design has the original vector, drop it in under the same name. The press logos (`assets/logo-*.png`) and the three headshots (`huberman.png`, `ferriss.png`, `richroll.png`) were cut from the current site's own artwork at 2x display size.

Each future page lives at `<path>/index.html` (for example `pricing/index.html`) and is served at `/pricing` because `cleanUrls` is on. Internal links use no trailing slash.

## Deploying on Vercel

1. Push this folder to a Git repository (GitHub, GitLab or Bitbucket).
2. In Vercel: Add New → Project → import the repository. Framework preset: **Other**. Leave build command and output directory empty. Deploy.
3. Every push to the default branch deploys production; every other branch or PR gets a preview URL.
4. When ready to cut over: Project → Settings → Domains → add `www.reveri.com` and `reveri.com` (redirect apex to www). Vercel shows the CNAME / A records to set at the registrar. Keep the old host live until DNS has propagated.

## Before launch

- **Analytics.** Paste the existing Segment or GA snippet where the `<!-- ANALYTICS -->` comment sits at the bottom of `index.html`. The page already fires `track(name, props)` for every element with a `data-track` attribute (header CTA, hero CTA, condition cards, video play, store links) and scroll-depth events at 25/50/75/100 %. It calls `window.analytics.track` if present, otherwise `window.gtag`.
- **Redirects.** `vercel.json` currently sends `/pricing`, `/science`, `/app`, `/about`, `/press`, `/media`, `/careers`, `/faq`, `/terms`, `/privacy` and `/knowledge/*` to the same path on the current `www.reveri.com`, so the preview is fully navigable. Remove each redirect as its page is migrated into this repo. Once `www.reveri.com` points at Vercel these redirects would loop, so they must all be gone (or the pages present) before DNS cutover.
- **Onboarding links.** All "Start" buttons go to `https://app.reveri.com/survey/onboarding` with `utm_source=website` and a `utm_medium` / `utm_content` per placement. Adjust if the web onboarding URL changes.
- **Store links.** The App Store and Google Play links in the final CTA and footer point at the current listings; check they match the live store URLs.
- **Press links.** In the "Featured in" row, Huberman Lab and Vogue link to the episode and the article; The New York Times, Women's Health, Men's Health and The Times have no URL yet — add an `<a>` around each `<img>` when the piece is located. The endorsement cards link to the Huberman Lab, Tim Ferriss (#731) and Rich Roll (#711) episode pages.
- **Copy to confirm.** Response-profile wording in the phone mockups ("steady responder") and the David quote in the dark band are written to the plan and still need Dr. Spiegel's sign-off.

## Editing

Everything for a page is in its one HTML file. Shared design tokens are the `:root` variables at the top of the `<style>` block (page cream `#FBF9F4`, purple `#3E2A75`, accent `#6E3BE0`, deep `#221B3A`; Fraunces italic for display, Source Sans 3 for text). Copy the `<head>`, header and footer from `index.html` when starting a new page so navigation stays consistent.
