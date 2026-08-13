# LEORIX Store — Technical Requirements Document (TRD)

## 1. Technology Stack Selection & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | Vite + React 18/19 | Ultra-fast bundling, HMR, modular component structure |
| **Styling** | Tailwind CSS v3 / Custom CSS | Modern utility classes paired with exact brand tokens |
| **Animation Engine**| GSAP 3 + ScrollTrigger | Frame-perfect scroll scrubbing, pinning, text splits, parallax |
| **Typography** | Google Fonts (Fraunces & Archivo) | Editorial serif elegance + structural sans-serif precision |
| **Icons** | Lucide React | Clean, lightweight UI icons |
| **Interactive Canvas**| Canvas 2D / WebGL 3D Engine | Exploded shoe component inspection & plantar pressure heatmaps |
| **Routing** | React Router v6 | Seamless multi-page navigation with scroll position restoration |
| **State Management**| React Context API + LocalStorage | Global store for Cart, Phase Mode (A/B), Waitlist, Wishlist |

---

## 2. Brand Tokens & Utility Architecture

### 2.1 CSS Custom Variables (`src/index.css`)
```css
:root {
  --color-green: #2E3E31;      /* Forest Green — Primary Ground (60%) */
  --color-tan: #CEB08A;        /* Warm Tan — Secondary Signature (10%) */
  --color-cream: #F4EFE6;      /* Cream — Paper Surface (30%) */
  --color-ink: #1A211C;        /* Ink — High Contrast Text */
  --color-stone: #9C9080;      /* Stone — Muted Captions & Rules */
  
  --font-fraunces: 'Fraunces', Georgia, serif;
  --font-archivo: 'Archivo', system-ui, sans-serif;
}
```

### 2.2 Tailwind Configuration Token Mapping
- `bg-brand-green` -> `#2E3E31`
- `bg-brand-tan` -> `#CEB08A`
- `bg-brand-cream` -> `#F4EFE6`
- `text-brand-ink` -> `#1A211C`
- `text-brand-stone` -> `#9C9080`
- `font-display` -> `'Fraunces', serif`
- `font-sans` -> `'Archivo', sans-serif`

---

## 3. Key Animation & Interactive Architecture (GSAP & ScrollTrigger)

### 3.1 Hero Pinning & Scrub Timeline
- **Trigger**: `#hero-section`
- **Pinning**: Pins the main viewport container while scrolling through 3 key stages:
  1. **Stage 1 (0-30%)**: Hero stance showcasing the side silhouette with title fade-in.
  2. **Stage 2 (30-70%)**: Interactive rotation & explosive layer separation (Upper, Cushioning Core, Stability Shank, Outsole Tread).
  3. **Stage 3 (70-100%)**: Transition smoothly into "The Problem / The Gap" section.

### 3.2 Plantar Load & Biomechanical Canvas Heatmap
- Custom HTML5 Canvas rendering interactive pressure distribution vectors.
- Dynamic intensity controls simulating heel strike, midfoot roll, and toe-off load balancing verified by FDDI protocols.

### 3.3 Product Exploded View & Colorway Switcher
- Canvas/SVG rendered layered breakdown.
- Instant color variant swap (`Black`, `Green`, `Green-White`, `White-Green`, `White`) utilizing existing assets in `img/`.

---

## 4. State Management Architecture

```typescript
interface AppState {
  mode: 'phaseA' | 'phaseB'; // Pre-launch waitlist vs Live commerce
  setMode: (mode: 'phaseA' | 'phaseB') => void;
  
  cart: CartItem[];
  addToCart: (item: Product, size: string) => void;
  removeFromCart: (id: string) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;

  waitlist: string[];
  joinWaitlist: (email: string) => boolean;

  selectedGender: 'men' | 'women' | 'all';
  setSelectedGender: (gender: 'men' | 'women' | 'all') => void;
}
```

---

## 5. Directory Structure Plan
```
d:/Leorix-React/
├── public/
│   ├── favicon.ico
│   └── assets/
├── src/
│   ├── assets/
│   │   └── img/ (Images copied from root img/)
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── AnnouncementBar.jsx
│   │   │   ├── ModeToggle.jsx
│   │   │   ├── CartDrawer.jsx
│   │   │   └── Button.jsx
│   │   ├── home/
│   │   │   ├── HeroScrubSection.jsx
│   │   │   ├── TheProblemSection.jsx
│   │   │   ├── TheApproachSection.jsx
│   │   │   ├── ValidationProofSection.jsx
│   │   │   ├── HeroProductFeature.jsx
│   │   │   ├── CollectionPreview.jsx
│   │   │   ├── SocialProofStrip.jsx
│   │   │   └── ConversionBlock.jsx
│   │   ├── pdp/
│   │   │   ├── ProductGallery.jsx
│   │   │   ├── BuyBox.jsx
│   │   │   ├── SpecValidationModule.jsx
│   │   │   └── RelatedProducts.jsx
│   │   └── tech/
│   │       ├── EngineeringApproach.jsx
│   │       ├── FddiEngagement.jsx
│   │       └── MaterialsTable.jsx
│   ├── context/
│   │   └── StoreContext.jsx
│   ├── data/
│   │   ├── products.js
│   │   └── fddiSpecs.js
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ShopPage.jsx
│   │   ├── TechnologyPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── SizeFitPage.jsx
│   │   ├── VaultPage.jsx
│   │   └── UtilityPages.jsx
│   ├── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 6. Performance & Quality Standards
- **Lighthouse Performance Score**: > 90
- **Frame Rate**: Continuous 60 FPS during ScrollTrigger animations.
- **Accessibility**: ARIA labels on all interactive controls, key navigation support, screen-reader friendly fallbacks for canvas elements.
- **SEO Optimization**: Meta titles, descriptions, open graph tags, semantic HTML tags (`<header>`, `<main>`, `<section>`, `<footer>`).
