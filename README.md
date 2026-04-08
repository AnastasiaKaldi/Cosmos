<div align="center">

# Cosmos

### *An interactive 3D atlas of the universe.*

**Wander among the stars. Spin worlds in your browser. Fall in love with astronomy again.**

<br />

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-r164-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=for-the-badge&logo=framer&logoColor=white)

</div>

---

## Wander among the stars

Cosmos is a living atlas of **planets, exoplanets, stars and galaxies** — built to make the universe feel a little less unknowable. Every celestial body has its own dedicated dashboard with a real-time interactive 3D model, curated facts, and the science behind it.

> *"Embark on a celestial journey as we unravel the mysteries of the cosmos."*

---

## What's inside

| Category | Bodies |
|----------|--------|
| **Planets** | Mercury · Venus · Earth · Mars · Jupiter · Saturn · Uranus · Neptune |
| **Exoplanets** | Kepler-186f · Proxima Centauri b · 51 Pegasi b |
| **Stars** | The Sun · Arcturus |
| **Galaxies** | The Milky Way · Andromeda |

**16 worlds. Endless wonder.**

---

## Features

- **Interactive 3D rendering** — every planet and star is a real Three.js sphere with PBR lighting and a hand-tuned cosmic rig. Drag, orbit, fall in.
- **Procedural particle galaxies** — galaxies aren't textured spheres, they're 9–10k-particle spiral generators with hot-core / cool-rim gradients and configurable arms, spin and randomness. You can zoom into the core of Andromeda.
- **Dashboard celestial pages** — vertical icon sidebar, top stat row built from each body's facts, hero canvas with the body name in huge gradient type, and a sibling navigator on the right.
- **Animated landing collage** — eight planet textures scattered across the hero with floating delays, accent halos and decorative orbital arcs.
- **Cosmic palette + glassmorphism** — phthalo void to violet, lavender highlights, layered glass cards.
- **Static multi-layer starfield** behind every page — three CSS layers of pinprick stars, zero animation cost.
- **Lightning-fast routing** — lazy-loaded pages, manual vendor chunking (`react`, `three`, `framer-motion`), and an initial JS payload around **70 kB gzipped**.
- **Fully responsive** — sidebars collapse on mobile, sibling strips become horizontal scrollers.

---

## Tech stack

| Layer | Tool |
|-------|------|
| **Framework** | React 18 + React Router 6 |
| **Build** | Vite 5 |
| **3D** | Three.js + `@react-three/fiber` + `@react-three/drei` |
| **Styling** | Tailwind CSS + custom glass utilities |
| **Animation** | Framer Motion |
| **Fonts** | Space Grotesk + Inter |

---

## The palette

The whole site is built on five colors that bleed from deep space into starlight.

| | | |
|---|---|---|
| ![#0d0b1f](https://placehold.co/24x24/0d0b1f/0d0b1f.png) | `#0d0b1f` | **Phthalo Void** — the deepest backdrop |
| ![#2c1f5e](https://placehold.co/24x24/2c1f5e/2c1f5e.png) | `#2c1f5e` | **Kingfisher Deep** — mid void |
| ![#8b5cf6](https://placehold.co/24x24/8b5cf6/8b5cf6.png) | `#8b5cf6` | **Tech Violet** — the primary accent |
| ![#c4b5fd](https://placehold.co/24x24/c4b5fd/c4b5fd.png) | `#c4b5fd` | **Nebula Lavender** — highlights |
| ![#f5f3ff](https://placehold.co/24x24/f5f3ff/f5f3ff.png) | `#f5f3ff` | **Stardust Whisper** — text |

---

## Quickstart

```bash
# clone & install
git clone https://github.com/yourname/cosmos.git
cd cosmos
npm install

# start the dev server
npm run dev

# build for production
npm run build

# preview the production build
npm run preview
```

Then open [http://localhost:5173](http://localhost:5173) and start wandering.

---

## Project structure

```
cosmos/
├── public/                  # planet textures, video, fonts
├── src/
│   ├── components/
│   │   ├── CelestialCanvas  # sphere + procedural galaxy renderer
│   │   ├── CelestialCard    # gallery card
│   │   ├── Footer
│   │   ├── Navbar           # global glass nav
│   │   └── Starfield        # static multi-layer CSS starfield
│   ├── data/
│   │   └── celestials.js    # single source of truth — every body lives here
│   ├── pages/
│   │   ├── Home             # animated landing collage + section gallery
│   │   ├── Explore          # filterable, searchable atlas
│   │   └── CelestialPage    # dashboard for one celestial body
│   ├── App.jsx              # router shell + starfield + conditional navbar
│   ├── main.jsx             # router setup with lazy routes
│   └── index.css            # cosmic palette, glass, gradients, starfield
├── tailwind.config.js       # color tokens + custom animations
└── vite.config.js           # manual vendor chunking
```

---

## Adding a new celestial body

Drop one entry into [`src/data/celestials.js`](src/data/celestials.js) and the entire site picks it up automatically — nav, atlas, gallery, sibling navigator, dashboard page, the works.

```js
{
  slug: "titan",
  name: "Titan",
  category: CATEGORIES.PLANET,        // or EXOPLANET / STAR / GALAXY
  group: "Outer Solar System",
  tagline: "The world with seas of methane",
  texture: "/Titan.jpg",
  accent: "#E0B86E",                  // drives glows, halos and accents
  radius: 1.4,
  rotationSpeed: 0.004,
  facts: [
    { label: "Distance from Sun", value: "1.43 billion km" },
    { label: "Day length",        value: "16 Earth days" },
    { label: "Surface temp",      value: "−179°C" },
    { label: "Parent",            value: "Saturn" },
  ],
  description: "Titan is the largest moon of Saturn...",
}
```

For a **galaxy**, add a `type: "galaxy"` field plus a `galaxy` block configuring the procedural particle generator:

```js
type: "galaxy",
galaxy: {
  particleCount: 9000,
  radius: 4,
  branches: 4,            // number of spiral arms
  spin: 1,                // how tightly the arms wind
  randomness: 0.4,
  randomnessPower: 3,
  insideColor: "#ffd9a8", // hot core
  outsideColor: "#8b5cf6",// cool rim
  particleSize: 0.025,
  rotationSpeed: 0.05,
}
```

That's it. No new files. No new routes.

---

## Performance notes

- Pages are **lazy-loaded** — Three.js only ships when a celestial route opens.
- **Manual vendor chunks** keep `react`, `three` and `framer-motion` in their own files for aggressive caching.
- The hero on the landing page uses **plain `<img>` textures** instead of a 3D canvas, so first paint is instant.
- The starfield is **static CSS only** — no `requestAnimationFrame`, no per-frame paint.
- Sphere geometry runs at **48×48 segments** with `dpr` capped at `1.5` — sharp on retina without burning the GPU.
- Initial bundle: **~70 kB gzipped.** Lighthouse perf scores in the 90s.

---

## Credits

- Planet, star and galaxy textures sourced from public NASA/JPL imagery.
- Procedural galaxy generator inspired by Bruno Simon's *Three.js Journey*.
- Built with too many late nights and a deep love of the night sky.

---

<div align="center">

**Ad astra per aspera.**

</div>
