# LEORIX Store — Design & Animation Specification Document

## 1. Aesthetic Direction & Brand Palette Ratio

LEORIX embodies an aesthetic of **understated premium engineering** — clean, grounded, tactile, and precise. Avoid noisy gradients or superficial sparkles; every visual element serves structural clarity.

```
+-----------------------------------------------------------------------+
|  FOREST GREEN (#2E3E31) - 60%  |  CREAM (#F4EFE6) - 30%  | TAN (10%) |
+-----------------------------------------------------------------------+
```

### Color Token Roles
- **Forest Green (`#2E3E31`)**: Ground, hero banners, dark sections, foundational blocks.
- **Cream (`#F4EFE6`)**: Light content surfaces, paper canvas background, high-readability text cards.
- **Warm Tan (`#CEB08A`)**: Signature accent, active states, key specs, wordmark highlight, interactive toggles.
- **Ink (`#1A211C`)**: High contrast typography on cream background, borders, footer background.
- **Stone (`#9C9080`)**: Eyebrows, grid rules, secondary specs, structural grid lines.

---

## 2. Typography Rules & Type Scale

| Role | Font Family | Weight & Style | Tracking & Case | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Wordmark** | Archivo | 900 (Black) | Tight (-0.02em), UPPER | Primary Brand Mark |
| **Display H1/H2** | Fraunces | 300 Light / 400 Reg / Italic | Normal (-0.015em), Sentence | Hero headlines, emotional hooks |
| **Eyebrow / Label** | Archivo | 800 ExtraBold | Wide (0.22em - 0.28em), UPPER | Section numbers, topic tags |
| **Body Paragraph** | Archivo | 400 Regular | Line-height 1.62, Sentence | Explanatory copy, storytelling |
| **Data / Spec Grid**| Archivo | 600 SemiBold / 700 Bold | Tabular numbers, UPPER | Measurements, FDDI report ref |

---

## 3. Immersive Animation Engine (GSAP & ScrollTrigger)

### 3.1 Hero Pin & Layer Explode Scrub Sequence
- **Container**: Fullscreen `#hero-pin-wrapper` pinned for 200vh scroll distance.
- **Scroll Step 0% -> 25%**:
  - Main headline *"Designed to look right. Engineered to prove it."* fades up with Fraunces serif italic accent.
  - Hero silhouette shoe slides smoothly onto center ground stage.
- **Scroll Step 25% -> 60%**:
  - The shoe decouples into 4 key floating engineering layers:
    1. **Breathable Engineered Upper** (top lift + text callout)
    2. **High-Rebound Cushioning Core** (center floating layer)
    3. **Torsional Control Stability Shank** (rigid mid-layer)
    4. **High-Abrasion Rubber Tread Outsole** (bottom contact layer)
  - Interactive leader lines with spec popups appear on scroll pin pause.
- **Scroll Step 60% -> 100%**:
  - Layers seamlessly recombine into the assembled shoe and dock into the next section as the viewport releases pin.

### 3.2 "The Gap" Comparison Scrub
- Interactive side-by-side comparison slider:
  - Left: *Styled Casual Shoes* (Lack structure)
  - Right: *Over-Built Performance Shoes* (Excessive clutter)
  - Center: **LEORIX** (Pure balance of everyday form + FDDI validated function).

### 3.3 Interactive Biomechanical Heatmap Canvas
- Dynamic simulation showing plantar pressure points during a 10,000-step daily wear cycle.
- Toggle between:
  - *Standard Flat Insoles* (High heel/forefoot spike red zones)
  - *LEORIX Tuned Footwear* (Evenly distributed green/cream load gradient).

---

## 4. UI Components Design Specs

### 4.1 Header & Navigation
- Fixed glassmorphism bar (`bg-[#2E3E31]/90 backdrop-blur-md`).
- Left: Wordmark in Archivo Black Warm Tan (`LEORIX`).
- Center: Nav links (`Shop (Men / Women / The Vault)` · `Technology` · `About`).
- Right: Mode Switcher Badge (Phase A Waitlist vs Phase B Commerce) + Cart Drawer Icon.

### 4.2 Hero Product Feature (Article X)
- Interactive 360 view / 5-colorway side profile selector:
  - Black (`#1A211C`)
  - Forest Green (`#2E3E31`)
  - Green-White dual tone
  - White-Green dual tone
  - Clean Cream White (`#F4EFE6`)

### 4.3 PDP Spec & Validation Module
- Grid layout with Stone dividing borders.
- Live data tables detailing component density, hardness (Shore A), abrasion loss (mm³), and FDDI test certificate references.

---

## 5. Micro-Interactions & Cursor FX
- **Magnetic Buttons**: CTAs subtly pull toward cursor position on hover.
- **Smooth Inertial Scroll**: Smooth scroll wrapper for fluid GSAP scrub response.
- **Tactile Sound FX (Optional toggle)**: Subtle mechanical click sound on mode switcher or layer selection.
