---
version: alpha
name: 5ms.dev
description: "Cuidamos de todo o lado técnico, do desenvolvimento à infraestrutura, enquanto você cuida do seu negócio."
sourceUrl: "https://5ms.dev/"

colors:
  primary: "#c98a1e"
  on-primary: "#ffffff"
  background: "#ffffff"
  surface: "#e7e7e5"
  border: "#e7e7e5"
  text: "#0e0e0e"
  text-muted: "#6b6b6b"
  success: "#3a6b4d"
  danger: "#a34a3f"

typography:
  display:
    fontFamily: "Space Grotesk, Space Grotesk Fallback, Space Grotesk, sans-serif"
    fontSize: 76px
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: -1.52px
  heading:
    fontFamily: "Space Grotesk, Space Grotesk Fallback, Space Grotesk, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.5
  body:
    fontFamily: "Inter, Inter Fallback, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  mono:
    fontFamily: "IBM Plex Mono, IBM Plex Mono Fallback, IBM Plex Mono, monospace"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5

spacing:
  base: 4px
  scale: [4, 8, 12, 16, 20, 24, 28, 32, 40, 44]

radius:
  sm: 4px
  md: 5px
  lg: 6px
  xl: 10px

shadows:
  card: "rgb(107, 107, 107) 3px 3px 0px 0px"
  elevated: "rgb(107, 107, 107) 3px 3px 0px 0px"

motion:
  duration-fast: 120ms
  duration-base: 150ms
  duration-slow: 200ms
  easing: "ease"

breakpoints: [801px]
---

## Rationale

5ms.dev presents itself as a technical operations partner—handling infrastructure and development so clients can focus on business. The measured design tokens reflect a *confident, professional aesthetic* grounded in warmth rather than corporate coldness. The primary color is a burnt orange (#c98a1e), which humanizes the brand without sacrificing authority. This is paired with a near-white background (#ffffff) and soft gray surfaces (#e7e7e5), creating a clean, approachable interface that avoids sterile minimalism.

The typography system leans heavily on geometric sans-serifs: Space Grotesk dominates display and heading levels with aggressive negative letter-spacing (–1.52px on the 76px display size), giving headlines a tightly-woven, modern punch. Body copy switches to Inter—a more neutral, highly legible choice—signaling a shift from brand expression to information clarity. This deliberate typeface pairing reinforces a "we speak both design and engineering" positioning.

Spacing and radius decisions are micro-calibrated. The 4px base unit allows fine-tuned density without feeling cramped; rounded corners stay subtle (4–10px range) rather than playful, maintaining professional composure. The shadow system is distinctly unusual—a hard offset shadow (3px 3px, no blur) in muted gray—evoking printed materials or retro constructivism rather than iOS depth. This choice signals *intentionality and craft*, not trend-following.

The single breakpoint at 801px suggests a deliberate two-tier responsive strategy: one design for compact experiences, one for expansive. No pricing or authentication flows means this is a brand/capability site, not a SaaS product interface. Motion is restrained (150ms base duration, standard easing), keeping interactions snappy without distraction.

## 1. Visual Theme & Atmosphere

The site communicates *trustworthy competence with personality*. The warm primary orange against cool grays and whites creates visual tension that feels intentional, not accidental. The hard-edged shadows and tight typography suggest a studio or agency that thinks carefully about every detail—not a cookie-cutter template. The light color mode with near-white backgrounds promotes clarity and approachability; there's nothing hidden or obscured.

This is a brand designed for C-suite and technical decision-makers who expect rigor, but who also appreciate craft. The aesthetic sits between Silicon Valley minimalism and European design studio sensibility.

## 2. Color System

| Role | Token | Value | Usage |
|------|-------|-------|-------|
| **Primary** | `#c98a1e` | Burnt orange | CTAs, accents, emphasis |
| **On Primary** | `#ffffff` | White | Text/icons on primary backgrounds |
| **Background** | `#ffffff` | White | Page/container base |
| **Surface** | `#e7e7e5` | Warm gray | Cards, panels, secondary containers |
| **Border** | `#e7e7e5` | Warm gray | Dividers, outlined components |
| **Text** | `#0e0e0e` | Near-black | Primary body text |
| **Text Muted** | `#6b6b6b` | Medium gray | Secondary, de-emphasized content |
| **Success** | `#3a6b4d` | Desaturated green | Success action button (checkmark) only |
| **Danger** | `#a34a3f` | Muted red | Failure action button (cross) only |

The palette is deliberately restrained: three tones of gray, one warm accent, and two desaturated state colors reserved exclusively for success/failure actions. This enforces discipline and prevents visual noise. The warm gray (#e7e7e5) is slightly warmer than a pure neutral, echoing the primary's heat and creating tonal cohesion. The near-black text (#0e0e0e) avoids harsh pure black, reducing eye strain while maintaining authority.

## 3. Typography

**Display (76px, Space Grotesk, weight 700)**
- Line height 0.98 (nearly solid, minimal leading)
- Letter spacing –1.52px (aggressive compression)
- Used for hero headlines and primary messaging
- The negative spacing creates a headline-as-brand-statement effect; each word becomes a typographic object

**Heading (48px, Space Grotesk, weight 700)**
- Line height 1.5 (generous, readable)
- Moderate letter spacing (inherits from font)
- Used for section headings and subsections
- More spacious than display, signals content hierarchy

**Body (14px, Inter, weight 400)**
- Line height 1.5
- Default font weight (regular)
- All paragraph content, UI labels, long-form text
- Inter's geometric construction ensures legibility at small sizes and on screens

**Mono (12px, IBM Plex Mono, weight 400)**
- Line height 1.5
- Code samples, technical references, data display
- Session counter and other short numeric readouts (e.g. `7 / 12 left`)
- Slightly smaller baseline to accommodate monospace density

The typeface shift from Space Grotesk → Inter → IBM Plex Mono follows a clarity gradient: brand expression → information → technical precision. This mirrors the site's value proposition (we handle the technical side).

## 4. Components & Patterns

**Buttons & CTAs**
- Primary: #c98a1e background, #ffffff text, 3px 3px offset shadow
- Shadow creates a *pressed* or *embossed* feel, encouraging interaction
- Likely 16–20px padding (2–5 spacing units)

**State action buttons (success / danger)**
- Filled icon buttons for study actions: success #3a6b4d, danger #a34a3f, white glyph
- Same treatment as the primary CTA: 3px 3px hard offset shadow, subtle radius (4–6px), 16–20px padding
- Reserved exclusively for the checkmark (success) and cross (failure) actions; never used as general accents or decorative fills

**Answer reveal**
- Hidden answer sits under `filter: blur(10px)`; the text remains in the document
- "Show answer" removes the filter over duration-base (150ms, ease)
- The three action buttons render only after the answer is revealed

**Cards & Containers**
- #e7e7e5 surface background
- 3px 3px offset shadow (consistent with buttons)
- Subtle radius (4–6px), keeping geometry taut
- Creates visual separation without appearing "floating"

**Headings & Hierarchy**
- Display-scale headings for hero sections (76px)
- Heading scale for section introductions (48px)
- Body text for descriptions and long-form (14px)
- Muted text for meta information, timestamps, secondary labels

**Lists & Data**
- Likely minimal bullet styling; relies on whitespace and typography for rhythm
- Mono typeface for code or technical references

## 5. Spacing & Layout

The spacing scale is 4px-based: [4, 8, 12, 16, 20, 24, 28, 32, 40, 44px]. This allows granular, intentional layouts:
- **4px, 8px, 12px**: micro-spacing (between icon and label, tightened margins)
- **16px, 20px, 24px**: standard section padding and gaps
- **28px, 32px**: medium container padding
- **40px, 44px**: large section dividers and layout breathing room

The single responsive breakpoint at **801px** suggests:
- **Mobile/compact** (≤800px): single-column, stacked layouts, generous vertical spacing for touch
- **Desktop** (≥801px): multi-column grids, inline arrangements, optimized for reading distance

This two-tier approach is simpler than modern 3–4-breakpoint systems, implying a conscious decision to avoid over-complexity. Sections on this site likely adapt cleanly rather than requiring micro-adjustments.

## 6. Motion & Interaction

| Timing | Duration | Purpose |
|--------|----------|---------|
| Fast | 120ms | Micro-interactions (button press, icon flip, tooltip) |
| Base | 150ms | Standard transitions (page sections, modal entrance) |
| Slow | 200ms | Complex animations, multi-step sequences |

**Easing**: Standard `ease` (cubic-bezier(0.25, 0.1, 0.25, 1)) across all motion. This is not overly playful; it feels professional and intentional. No custom easing curves suggest restraint—motion serves usability, not delight.

**Expected behaviors**:
- Hover states on buttons/links: color shift or shadow intensification over 150ms
- Section reveals: staggered fade-in or slide over 200ms
- Form interactions: border color change on focus, error states over 120ms

---

## Accessibility

### Contrast Ratios

**Primary text on white background** (#0e0e0e on #ffffff)
- Luminance ratio: ~14:1
- **Exceeds WCAG AAA** (7:1 threshold)
- Excellent readability even for users with mild vision impairment

**Muted text on white background** (#6b6b6b on #ffffff)
- Luminance ratio: ~7.5:1
- **Meets WCAG AAA; comfortable for secondary content**
- Suitable for metadata, timestamps, de-emphasized labels

**Primary color on white** (#c98a1e on #ffffff)
- Luminance ratio: ~3.8:1
- **Fails WCAG AA for text** (requires 4.5:1)
- **Acceptable for UI icons/graphical elements** (requires only 3:1)
- **Recommendation**: Use burnt orange for CTAs with white text overlay, not standalone text

**White text on primary** (#ffffff on #c98a1e)
- Luminance ratio: ~10:1
- **Exceeds WCAG AAA**
- Safe for buttons, badges, accents

**White icon on success** (#ffffff on #3a6b4d)
- Luminance ratio: ~6.2:1
- **Meets WCAG AA** (4.5:1 threshold) — safe for icons and small text

**White icon on danger** (#ffffff on #a34a3f)
- Luminance ratio: ~5.8:1
- **Meets WCAG AA** (4.5:1 threshold) — safe for icons and small text

### Minimum Requirements

- **Touch targets**: Ensure all interactive elements (buttons, links) meet 44×44px minimum. The spacing scale includes 44px, suggesting this is built-in by design.
- **Focus indicators**: Implement 2px outline (likely using primary color #c98a1e or near-black #0e0e0e) with 2px offset for keyboard navigation. The hard shadow style may mask focus; consider a distinct focus ring.
- **Color alone**: Do not rely solely on the primary color to communicate state (error, success, etc.). Pair with icons or text labels. For the success and danger buttons, the checkmark/cross glyph — not the hue — must carry the meaning.
- **Spacing scale**: Use the 16px minimum between interactive elements to prevent accidental mis-taps.

