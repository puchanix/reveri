# Assets — what's missing before launch

| File | Status | Who / what |
|---|---|---|
| `logo.svg` | **Missing — required** | The **existing** Reveri logo. Not a rebuild — export the current wordmark and drop it here. It needs to be the **light / reversed** version: the site ground is dark purple, so a dark-on-white export will be invisible. Header renders it at 26px tall, footer at 30px. Until it's here, the header shows the alt text "Reveri" so the gap is obvious. |
| `favicon.svg` | **Placeholder — replace** | Currently a generic orb mark, not Reveri's. Replace with the current site's real favicon. |
| `session-clip.mp3` | **Silent placeholder (20s)** | Replace with the approved 20–30s session clip. Needs David's approval — longest-lead asset. |
| `david-spiegel.jpg` | **Missing** | Pull the existing portrait from the current Squarespace site (rights are ours), or use a still from the intro-video shoot. Square crop, ≥400×400. The homepage degrades gracefully without it. |
| `og-home.jpg` | **Missing** | 1200×630 social share card. |
| `logo.png` | **Missing** | Raster version, referenced by the Organization JSON-LD. |
| `apple-touch-icon.png` | **Missing** | 180×180. |

## Note on the phone mockups

The small `reveri` wordmark inside the phone mockups on the homepage is set in
type, not the logo file — it reproduces the app header exactly as the Plan
artifact's design spec draws it. If you'd rather it used the real logo asset too,
say so and it's a one-line change in `index.html` (`.plogo`).
