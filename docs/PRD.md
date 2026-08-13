# LEORIX Store — Product Requirements Document (PRD)

## 1. Executive Summary & Brand Purpose
**LEORIX** is a performance-oriented lifestyle footwear brand engineered by KUNJ Business Solutions LLP, Jaipur. LEORIX bridges the gap between styled casual shoes (which lack stability and engineering) and over-built performance shoes (which are burdened with unused athletic tech).

- **Brand Core**: "Engineered from the sole up"
- **Driving Principle**: *"We say what we do, and we do what we say. No loose statements. No claim without proof."*
- **Positioning**: Design-led, engineering-backed, measurable performance. Proof before product.

---

## 2. Operating Principles & Claim-Status Rules
To preserve absolute brand integrity, all copy and data on the website adhere strictly to three content tiers:
1. **What We DO** (*Publishable Now*): Our design targets, engineering methods, and contracted FDDI deliverables.
2. **What We EXPECT** (*Omitted*): Anticipated results before data exists are not published.
3. **What We've MEASURED** (*Proof Layer*): Quantified findings from laboratory and human biomechanical testing. Displayed as verified figures once confirmed, or held in `[NUMBER]` state.

---

## 3. Dual Architecture Mode (Phase A vs. Phase B)
The website features an explicit **Mode Switcher** allowing instantaneous toggle between two operating modes without code rebuild:

### Phase A: Pre-Launch Mode (Waitlist)
- **Primary Goal**: Capturing waitlist signups, building brand authority, establishing FDDI credibility.
- **Commerce Surfaces**: Add to cart, prices, checkout, and discount codes are disabled/hidden.
- **CTAs**: "Join the list →", "Preview the X →", "See the engineering →".
- **Collection View**: Teaser tiles marked "Coming Soon" with no price tags.

### Phase B: Live Commerce Mode (Store Live)
- **Primary Goal**: Direct commerce sales, checkout conversion, early-access membership.
- **Commerce Surfaces**: Active cart slide-out, instant checkout flow, size selector, live inventory.
- **CTAs**: "Shop the drop →", "Shop the X →", "Add to Cart".
- **The Vault**: Converts waitlist members into an exclusive early-access portal for limited drops.

---

## 4. Complete Information Architecture & Sitemap

```
HOME (Proof-Before-Product sequence)
├── SHOP
│   ├── Men Collection (/shop/men) — Distinct catalog & filters
│   ├── Women Collection (/shop/women) — Distinct catalog & filters
│   └── The Vault (/vault) — Early-access & members-only drops
├── TECHNOLOGY (/technology)
│   ├── The Approach (Targets, 3-Pillar method)
│   ├── Validation (FDDI biomechanical & mechanical data)
│   └── Materials (Component transparency & spec sheet)
├── ABOUT (/about)
│   ├── Origin Story & Jaipur LLP details
│   └── Contact & Support
├── PRODUCT DETAIL PAGE (/product/:id)
│   ├── Interactive Gallery & Angle Switcher
│   ├── Buy Box (Size, Color, Add to Cart / Notify Me)
│   └── Spec & Validation Module (FDDI Lab Specs)
├── SIZE & FIT (/size-fit)
│   ├── Interactive Measurement Guide (cm/UK/US/EU)
│   └── Fit Notes & Last Geometry
└── UTILITY & LEGAL
    ├── FAQ
    ├── Shipping & Returns
    ├── Privacy Policy & Terms of Service
    └── Waitlist / Newsletter Signup
```

---

## 5. Homepage Module Requirements (Proof Before Product)
The homepage sequence strictly follows the "Proof Before Product" principle:

1. **Announcement Bar**: Dynamic notification bar ("Pre-launch: First drop coming soon — join the list" or "Live: Free shipping across India").
2. **Hero Section (Module 1)**:
   - Headline: *"Designed to look right. Engineered to prove it."*
   - Subline: *"LEORIX builds lifestyle footwear on engineering principles — stability, controlled cushioning, and all-day comfort — and validates it at FDDI before it reaches you."*
   - Scrub Animation: Interactive 3D tilt & smooth GSAP scroll animation pinning the hero shoe while revealing core architecture layers.
3. **The Problem (Module 2)**:
   - Eyebrow: `THE GAP`
   - Headline: *"Casual shoes are styled. Performance shoes are over-built. Almost nothing is both."*
   - Focus: Highlights the void in daily lifestyle footwear.
4. **The Approach (Module 3)**:
   - Eyebrow: `HOW WE BUILD`
   - Headline: *"Design-led. Engineering-backed. Measured, not assumed."*
   - Interactive 3 Pillars:
     1. Defined Targets
     2. Built to Spec
     3. Independently Validated (FDDI)
5. **Validation / Proof (Module 4)**:
   - Eyebrow: `THE PROOF`
   - Headline: *"Validated at FDDI — by design, not by adjective."*
   - Visual: Mechanical durability breakdown and human biomechanical plantar pressure heatmaps.
6. **Hero Product Feature (Module 5)**:
   - Eyebrow: `THE HERO`
   - Headline: *"LEORIX Article X — Lead Silhouette"*
   - Interactive exploded component viewer (Upper, Midsole, Outsole, Heel Counter).
7. **Collection Preview (Module 6)**:
   - Curated preview grid of Men's & Women's variants built on the single validated platform.
8. **Social Proof / Credibility Strip (Module 7)**:
   - Eyebrow: `THE BACKING`
   - Formal institutional credibility strip highlighting the Footwear Design & Development Institute (FDDI) collaboration.
9. **Conversion Block (Module 8)**:
   - Pre-launch Headline: *"Be first — and see the proof first."*
   - Interactive waitlist form with live counter simulation.
10. **Footer (Module 9)**:
    - Four structured columns (Shop, Technology, About, Help), legal notices, and email signup.

---

## 6. PDP Requirement: Spec & Validation Module
Every Product Detail Page must feature a dedicated **Spec & Validation Module**:
- **Component Breakdown**: Materials, hardness, density, and structural roles.
- **Biomechanical Metrics**: Plantar pressure distribution index, midfoot torsion control index.
- **FDDI Reference**: Traceability to official FDDI lab testing reports.

---

## 7. Verification & Acceptance Criteria
- 100% fidelity to brand guidelines (colors, typography, tone of voice).
- Smooth 60 FPS GSAP ScrollTrigger scrub animations.
- Fully responsive across desktop, tablet, and mobile displays.
- Instant mode toggle between Phase A (Pre-launch) and Phase B (Live Commerce).
