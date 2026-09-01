# Homepage copy notes

Every decision on the page, traced back to the messaging framework
(`reveri-context` → `references/marketing/messaging-framework.md`) and the
packaging brief. Written so the GTM hire can inherit this without re-deriving it.

Framework version in force: **v1.1**. Where this file and the framework disagree,
the framework wins.

---

## The hero

> **A personal session with Dr. Spiegel — anytime.**
> Your mind can change how your body feels. Whether that's chronic pain, sleepless
> nights, or stress that won't let go — Stanford's Dr. David Spiegel guides you
> through it, in about ten minutes, on your phone.
> *When nothing else has worked.*

- **Headline is the Primary Frame (§5)** — post-cutover, it is now literally true:
  every session is a session with David.
- **Mode C, outcome-led.** §4 puts profile-level lead copy at Mode C by default, so
  the mechanism word doesn't appear above the fold. "Hypnosis" first appears far
  down the page, in the study citations and the Huberman quote, where the
  credibility to carry it already exists.
- **Sub-headline is the §7 hybrid pattern** — universal mechanism hook, then the
  condition-specific follow, so an undifferentiated audience self-identifies
  instead of being guessed at.
- **"sleepless nights", not "sleep."** §7's word rule: the short form only survives
  inside the three-item list construction. This sentence breaks that pattern, so it
  takes the long form.
- **Recognition is the closer, not the opener.** §1 permits this in *structured*
  short-form as long as recognition is genuinely doing work somewhere in the
  hierarchy. "When nothing else has worked" is the current App Store subtitle, and
  it earns its place as the line the eye lands on last.
- **"Stanford's Dr. David Spiegel"**, never "psychiatrist" — §5, consumer surface.
- Trial and rating sit in the trust line, below the CTAs. §5's regulatory note is
  explicit that the free trial is a closer, not a headline claim.

### The Stanford rule

Stanford is **never used on its own** — only attached to David's credential, in one
of two forms: **"Stanford's Dr. David Spiegel"** or **"David Spiegel, Stanford
University"**. No "Developed at Stanford", no "Stanford-backed", no "Stanford
research" as a standalone phrase.

All seven uses on the page are compliant as of this pass. Worth re-checking on every
copy edit — it's an easy one to reintroduce, because the standalone form is shorter
and reads punchier. It's also the form that borrows the institution's authority
without the person, which is the reason for the rule.

## The recognition passage

Full §1 long-form order: recognition → mechanism/authority → promise, aimed at
Entry Point 01 (the Exhausted Seeker). It opens on the specific texture of failed
alternatives — the second opinion, the prescription, the meditation app opened four
times — before it makes a single claim, then turns on Dr. Spiegel and only then
reaches the promise ("most people feel a meaningful shift in their first one" —
approved Fast-pillar phrasing family).

"None of it was unreasonable. It just didn't hold." is doing the §2 Skeptic work:
it declines to disparage what they already tried, which is what earns the next
paragraph a hearing.

## Product section

Brief: *show the product, don't describe it.* Three live HTML/CSS phone mockups —
Today with the memory line, the session close with David's note, and the relief
path — rendered from the Plan artifact's design language and copy deck verbatim.
No abstract three-step diagram anywhere on the page.

Post-cutover claims are live here: "one session, chosen for you", "he remembers",
"every session builds on your last". These were the gated items; per your call they
ship now rather than waiting on the ~Sep 15 flip.

## How a session works

The Effortless pillar, written to §4's accuracy constraint: sessions are
*interactive*, so the copy never says "just relax" or "nothing to do but listen."
Step 2 uses "a state of highly focused concentration" — the approved Mode B
reframing — which lets the mechanism be explained without spending the word
"hypnosis" before the evidence section has earned it.

## Evidence

- Three headline percentages are a **KPI row of stat tiles**, not a bar chart:
  three unrelated numbers have no shared scale to compare on.
- **Each one visibly displays its own TODO on the page.** Not a code comment — the
  page currently tells a reader the number is unattributed. That is intentional
  pressure to fill them in or cut them before launch.
- **The pre→post chart is deliberately absent**, with a placeholder comment in the
  HTML explaining what to generate (BigQuery, via `querying-reveri`: average pre/post
  reported intensity, share of change in the first five minutes, n and method
  labelled on the figure). Mocking up a fake chart in the evidence section is the
  one thing this section cannot survive.
- **Two real, checkable, linked studies**, both with Spiegel as an author — the
  2017 *Cerebral Cortex* imaging paper and the 2000 *Lancet* randomised trial. This
  is the "legible artifacts, not adjectives" counter to The Path's manufactured
  proof tokens: ours link out to PubMed and can be checked.
- Hypnotic variability is stated plainly rather than hidden, which sets up the free
  test as the honest next step instead of a gimmick.

## Testimonials

Three App Store reviews carried verbatim from the current site, chosen because each
one **supplies its own before state in the member's own words** — severe chronic
pain; pain at an 8; had tried the other apps. The `.before` label above each quote
only ever restates what the quote itself says.

No before-state was invented for any card. When the deduplicated before→after
library exists, swap these out — §1 is right that the before state is the engine,
and these three are the best available approximation, not the real thing.

## Validators

Huberman, Ferriss, Rich Roll and Mayim Bialik are kept but placed **below** the
product story and the evidence, per the brief. They are corroboration, not the
argument.

## Boundaries

Three plain declarations rather than buried legal: complement not replacement,
responsiveness genuinely varies, and what happens when a session meets real
distress. §8's "corporate hedges we reject" rules out "may help with" and a
standalone "results may vary" — the variability statement here is specific and
owned instead.

---

## §8 compliance check

| Bright line | Status |
|---|---|
| "treats / cures / diagnoses / eliminates" | Not present. "Relief from", "helps", "change how your body feels" throughout. |
| Suggesting replacement of medication or medical care | Not present. Explicitly contradicted in the Boundaries section and the footer. |
| "Guaranteed" / results for everyone | Not present. "Most people" throughout; variability stated outright. |
| Wellness clichés — journey, holistic, transform your life, self-care, mindfulness | None used. ("transform" appears once, inside a verbatim Rich Roll quote — leave it; it's his sentence, in quotation marks.) |
| Corporate hedges — "may help with", "we believe", stacked qualifiers | None used. |
| "Psychiatrist" on a consumer surface | Not used. Reserved for `/science/`, which §5 classes as a depth surface. |

## Open verifications

| Item | Where | Needed from |
|---|---|---|
| 77% / 84% / 90% — source, n, method | Evidence tiles (visible TODO on page) | Marcel / research file |
| "Roughly two thirds of adults" | Hypnotizability section (flagged in HTML) | Citable source, or soften |
| David's quote in "How a session works" | Constructed from approved credential language | David's sign-off |
| Session audio clip | `assets/session-clip.mp3` — silent placeholder | David's approval |
| Analytics snippet | `<head>` of `index.html` | Live site or Marcel |
| 4.5★ / 4,400+ ratings | Hero trust line | Verified 1 Sep 2026 against the App Store listing (4.5, 4.4K). Re-check at launch. |
