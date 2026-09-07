# Homepage copy notes — v2

Every decision on the page, traced to the messaging framework
(`reveri-context` → `references/marketing/messaging-framework.md`), the packaging
brief, and the Customer & Targeting review (4 Sep 2026). Written so the GTM hire
can inherit this without re-deriving it.

Framework version in force: **v1.1**. Where this file and the framework disagree,
the framework wins — except for three items flagged below as pending amendments.

---

## What changed from v1, and why

| Change | Driver |
|---|---|
| **Pain → stress as the lead condition** | Pain-led creative on cold audiences is one of only two ⛔ genuinely-disproven items in four years. The homepage is a cold surface. Pain is also 4.4% of stated goals and 3.7% of sessions. |
| **Sleep is second, not first, despite being the biggest franchise** | Sleep captures **no intensity scores at all**. Leading with it would mean leading with the one condition we cannot evidence, on a page whose argument is "checkable, not adjectival." |
| **Proof strip added directly below the hero** | The npj paper was buried. Credibility now lands before the product explanation. |
| **77% / 84% / 90% removed entirely** | They were unsourced and carried visible TODOs. The npj figures are peer-reviewed, published, and stronger. Problem solved by replacement rather than by sourcing. |
| **"He remembers" / "builds on your last" removed** | Two problems: it implied David personally knows the member, and our own npj paper found **no longitudinal improvement across sessions**. Memory makes each session more personal, not more effective. |
| **"Not another library of recordings" moved into screen two** | The clearest category contrast we have, and now backed by a published finding rather than an assertion. |
| **CTA is experiential, not commercial** | "Try your first session free" rather than "Start your free 7-day trial". Trial terms moved to the line beneath. |
| **Store badges demoted to a text line** | Web checkout converts trials at 45.7% vs 36.4% and is worth roughly double per user. Nothing should compete with it visually. |
| **Hypnotizability test kept prominent** | "Are you hypnotizable?" is the lowest-CPA creative angle on record, and test-taker→signup has never once been measured. |
| **Hypno CTA now names David** | "Take Dr. Spiegel's test" beat "Personalize your plan" by **40%** in the quiz onboarding test. |
| **Type and contrast raised throughout** | 56.6% of paying members are 45+ and conversion rises monotonically with age through 65+. Base 18px, secondary never below 15.5px, all body copy AAA. |
| **"No drugs. No side effects." → "Natural — nothing to take, no side effects."** | Testing found "natural remedies" outperforms "no side effects", "no medication" and "drug-free". |
| **Price removed from JSON-LD** | Several price arms run simultaneously by design; a stale figure surfaces in search results. |
| **New section: the floating place** | Internally the stickiest moment in the session and the clearest differentiator, and almost entirely unused in marketing. |
| **New section: Live with David** | A real doctor, live, monthly — structurally unavailable to a competitor built on synthetic personalities. |

---

## The hero

> **A personal session with Dr. Spiegel — anytime.**
> Interactive sessions for stress, sleeplessness and pain that respond to what you
> say and start where your last one ended. About ten minutes, whenever you need one.
> *When nothing else has worked.*

- **Headline is the Primary Frame (§5)**, post-cutover, now literally true.
- **The subhead now states how the product behaves**, not what category it is in.
  That was the main gap against The Path: it answers *what is this* and *why is it
  different* in one sentence rather than making the reader scroll for the second.
- **Mode C, outcome-led** — §4 puts profile-level lead copy at Mode C by default,
  so the mechanism word stays out of the hero. "Hypnosis" first appears in the
  category-contrast headline in screen two, where the proof strip has already
  bought the credibility to carry it.
- **"sleeplessness", not "sleep"** — §7's word rule; this construction isn't the
  three-item list, so it takes the long form.
- **"When nothing else has worked" retained** — it is the current App Store
  subtitle, and cutting it here would create exactly the cross-surface
  inconsistency §4 exists to prevent. **Still open:** it reads last-resort, which
  suits pain better than stress. The recognition passage that made this worse has
  been cut entirely; the line alone is defensible, but it's the next thing to test.
- **Single primary CTA**, with the test as a text link beneath rather than a second
  button. Two equal buttons create indecision.

## The proof strip

Four figures, all publicly citable — the npj paper is open literature and the
rating is on the store listing. **No internal-only numbers appear here**, which
matters because the targeting review is marked not-for-distribution.

## Category contrast

Framework's approved Mode B reframing ("a state of highly focused concentration")
does the mechanism work later on the page. Here the contrast is behavioural: a
recording plays the same way for everyone; a session asks. The published finding
that **interactive sessions produced significantly greater relief** turns this from
positioning into evidence — it is the strongest single sentence on the page.

Tatyana's App Store review ("the interactive mode is almost like the doctor is in
the room with you") is placed here rather than in the testimonial block because it
proves the differentiation claim in a member's own words.

## Product section

Three live HTML/CSS mockups, copy taken from the Plan artifact's copy deck. Now
stress-led: the Today card is "Taking the edge off today", relief leads with
Stress. The three ideas are *it responds to you* / *it's there when you need it* /
*your own evidence*.

Memory is now worded as **"it starts where the last one ended"** — personalisation,
not escalation. Do not reintroduce compounding language.

## How a session works

Headline is **"Dr. Spiegel asks. You answer. Your mind does the rest."** This is
better than the framework's approved "Get comfortable. Dr. Spiegel does the rest."
— it preserves member agency, and it is more accurate now that sessions open with a
brief survey and every session has an interactive element. Flagged below as a
proposed framework amendment.

## The floating place

Concrete, ownable, and nothing a synthetic-therapist competitor can imitate.
**Verify the 7,500 figure before launch** — it comes from internal product data and
should be refreshed at launch.

## Evidence

- Rebuilt entirely around the npj paper. Three findings as stat tiles (three
  unrelated measures have no shared scale, so no chart).
- **The limitations are stated on the page**: observational, no control group, and
  relief consistent rather than compounding. That paragraph is the whole
  differentiation strategy in miniature — it is the thing a manufactured proof
  token can never do, and it pre-empts the exact criticism a skeptic would reach
  for. Do not let anyone edit it out for being off-message.
- **The pre→post chart remains deliberately absent.** The npj figures do the job;
  a BigQuery-derived chart can be added later with n and method on the figure.

## Members and validators

**Open item.** The current site's review set is pain-weighted and this page now
leads with stress. Two of the three member cards should be replaced with a stress
story and a sleep story before launch, keeping the before→after structure. Do not
write a before-line the member's own words don't support — that constraint is why
the third card is currently a generic six-month review rather than a fabricated
stress story.

## Boundaries

Rewritten. The v1 claim that sessions "recognise when someone is in crisis and
respond with real resources" is gone; the section now says plainly that Reveri is
**not** crisis support and points elsewhere. Ariel confirmed the protocol question
in the targeting review is out of date, but understating here costs nothing and
overstating on this topic is the worst available error.

---

## §8 compliance check

| Bright line | Status |
|---|---|
| "treats / cures / diagnoses / eliminates" | Not present as claims. The three scanner hits are all the footer disclaimer *negating* them. |
| Suggesting replacement of medication or medical care | Not present; explicitly contradicted in Boundaries and the footer. |
| "Guaranteed" / results for everyone | Not present. Variability stated outright, twice. |
| Wellness clichés | None. ("transform" appears once inside a verbatim Rich Roll quote — leave it.) |
| Corporate hedges | None. |
| "Psychiatrist" on a consumer surface | Not used. Reserved for `/science/`. |
| **Stanford rule** | All uses attached to David — "Stanford's Dr. David Spiegel" or "David Spiegel, Stanford University". Never standalone. Re-check on every edit; the standalone form is shorter and reads punchier, which is why it keeps creeping back. |

## Three pending framework amendments — need CEO sign-off

The framework versions changes and requires sign-off, so these are flagged rather
than quietly applied.

1. **Retire "The science of hypnosis is settled"** (approved Proven-pillar
   phrasing, §3). Replaced on the page with "Studied for decades. Now validated at
   digital scale." We no longer need to assert consensus — we can cite scale.
2. **Add "Dr. Spiegel asks. You answer. Your mind does the rest."** to the
   Effortless pillar, alongside or in place of "Get comfortable. Dr. Spiegel does
   the rest."
3. **Reconsider the §7 pain-first acquisition logic.** The four arguments for
   pain-led acquisition are now contradicted by the record: pain-led cold creative
   is disproven, pain is 3.7% of sessions, and stress produces materially more
   measured relief. This page assumes stress-led; the framework still says
   pain-led.

## Open verifications before launch

| Item | Where | Needed from |
|---|---|---|
| Analytics snippet | `<head>` of `index.html` | Live site or Marcel |
| 7,500 floating places / 62% water | The floating place section | Confirm safe to publish; refresh number |
| Stress + sleep testimonials | Member cards | Support / review mining |
| David's quote | The doctor section | David's sign-off — batch with portrait and clip asks, he is the only spokesperson and that is a recorded constraint |
| Session audio clip | `assets/session-clip.mp3` — silent placeholder | David's approval |
| Live-with-David cadence | "Once a month" | Confirm it is committed before publishing it |
| 4.5★ / 4,400+ ratings | Hero + proof strip | Verified 1 Sep 2026 against the App Store listing. Re-check at launch. |

## No A/B infrastructure yet

Several open questions on this page want a test — the hypnosis word in the hero,
"When nothing else has worked", experiential vs commercial CTA. A static site on
Vercel has no experimentation layer. Decide the mechanism (Edge Middleware split, a
client-side flag, or sequential tests read off analytics) before writing variants.
Given traffic volumes, sequential is probably the honest answer.
