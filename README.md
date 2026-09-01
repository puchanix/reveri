# reveri.com

The rebuilt Reveri website. Pure static — one `.html` file per page, all CSS inline
per page, no framework and no build step. Vercel deploys it exactly as it sits.

**Pass 1 status:** the homepage is finished. `/pricing/`, `/science/` and `/app/`
exist as `noindex` placeholders so the homepage's links don't 404 during review;
they get built in pass 2.

---

## Deploying it

1. Create a new repo and push these files to it (the repo root is this folder —
   `index.html` must be at the top level).
2. In Vercel: **Add New → Project → Import** your repo.
3. Framework preset: **Other**. Build command: **none**. Output directory: **leave
   blank** (root). Vercel serves the files as-is.
4. Deploy. You get a `*.vercel.app` preview URL immediately — that's the one to
   share for review.
5. **Don't point reveri.com at it yet.** Squarespace stays live until you're ready
   to cut over. When you are, add the domain in Vercel → Settings → Domains and
   move the DNS records. Rollback is just pointing DNS back at Squarespace.

Editing later: open the `.html` file, change the markup, commit. Vercel redeploys
on push. There is nothing to build and nothing to install.

---

## Before you deploy to the real domain

Ordered by how badly it hurts to miss.

- [ ] **Analytics snippet.** `index.html` has an empty, clearly marked block in
      `<head>`. Paste the existing Segment/GA snippet from the live Squarespace
      site — or get it from Marcel. Without it the web checkout funnel loses
      attribution the moment DNS moves.
- [ ] **The three outcome stats (77% / 84% / 90%).** Each tile on the homepage
      currently shows `TODO — source, sample size, and how it was measured`
      *on the page, visibly*. That's deliberate: shipping them bare is the exact
      failure this page is built to avoid. Fill in method and n, or cut them.
- [ ] **Decide the `/knowledge/` question.** See below — this is the big one.
- [ ] **David's portrait** at `assets/david-spiegel.jpg`, and the approved session
      clip at `assets/session-clip.mp3` (currently 20 seconds of silence).
      See `assets/README.md`.
- [ ] **David's sign-off on the quote** in the "How a session works" section. It is
      assembled from approved credential language, not a sourced verbatim quote —
      it's flagged in the HTML.
- [ ] **Verify "roughly two thirds of adults"** in the hypnotizability section
      against a citable source, or soften it to "most adults". Also flagged inline.
- [ ] **Confirm the 301 map** in `vercel.json` against the live sitemap once more
      at cutover, in case anything moved.

---

## The SEO decision — please read this one

The live Squarespace sitemap has **~130 articles under `/knowledge/`** (migraine,
fibromyalgia, endometriosis, arthritis, neuropathy, back pain — a large,
condition-targeted organic content library) and **~15 member stories under
`/success-stories/`**.

The brief didn't cover them, and this repo does not include them. If DNS moves
to a site that doesn't serve those paths, every one of them 404s at once. That is
almost certainly the single largest organic-traffic risk in the whole project.

Three options, roughly in order of effort:

1. **Migrate them.** Scrape and convert to static pages under the same paths.
   Preserves the URLs and the rankings. Most work, best outcome.
2. **Keep Squarespace serving them.** Point `reveri.com` at Vercel and proxy or
   subdomain `/knowledge/*` back to Squarespace. Keeps the traffic, keeps the
   Squarespace bill.
3. **Retire them with 301s to the closest relevant page.** Cheapest, and you lose
   most of the equity — the rankings are for the article, not the destination.

Whatever you pick, decide it *before* DNS moves, not after.

Related, and smaller: six condition pages (`/hypnosis-stress-anxiety`,
`/hypnosis-good-sleep-insomnia`, `/hypnosis-quit-smoking`, `/quit-vaping`,
`/hypnosis-focus-performance`, `/hypnosis-intuitive-eating`) currently **302** to
the homepage. They're temporary redirects on purpose — the messaging framework §7 is
explicit that sending condition-specific traffic to a generic landing page is where
conversions get lost. They want real condition pages, which is a pass-3 job. Until
then a 302 keeps the door open; don't switch them to 301.

---

## What's in here

```
index.html          the homepage — finished
pricing/            placeholder (noindex)
science/            placeholder (noindex)
app/                placeholder (noindex)
support/ terms/ privacy/   placeholders (noindex) — migrate real content in pass 2
assets/             favicon, silent audio placeholder, asset checklist
vercel.json         301/302 map from retired Squarespace paths + security headers
sitemap.xml         homepage only for now
robots.txt
COPY-NOTES.md       every copy decision, traced to the messaging framework
```

## Conventions, if someone else picks this up

- One page = one file. CSS lives in a `<style>` block at the top of that file.
  Design tokens are defined once in `:root` — change a brand colour there and the
  whole page follows.
- No external JS libraries and no webfonts: the page is one request plus assets.
  Keep it that way; it's most of why it's fast.
- The phone mockups are live HTML/CSS, not screenshots. They use the *app's* light
  palette (`--app-*` tokens) inside the dark site so the product screens read as
  real. When the app's UI changes, edit the markup — no re-export.
- Every unverified claim carries a visible `TODO` on the page, not a silent one in
  a comment. If you'd be embarrassed for a member to see it, that's the point:
  it should be uncomfortable to ship.
