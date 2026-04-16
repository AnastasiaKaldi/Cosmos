import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { celestials, CATEGORIES, findCelestial } from "../data/celestials.js";
import CelestialCard from "../components/CelestialCard.jsx";
import ApodCard from "../components/ApodCard.jsx";
import Footer from "../components/Footer.jsx";

// ---------- Hero collage layout ----------
// A scattered constellation of planet textures positioned across the right
// half of the hero. Each entry references a celestial in the data file so
// the actual texture stays in sync with the rest of the site.
const HERO_COLLAGE = [
  { slug: "jupiter", size: 320, top: "2%",  right: "-4%",  delay: 0,    z: 30 },
  { slug: "saturn",  size: 240, top: "46%", right: "30%",  delay: 0.4,  z: 20 },
  { slug: "mars",    size: 130, top: "10%", right: "44%",  delay: 0.6,  z: 25 },
  { slug: "earth",   size: 100, top: "32%", right: "62%",  delay: 0.8,  z: 18 },
  { slug: "venus",   size: 110, top: "70%", right: "68%",  delay: 1.0,  z: 22 },
  { slug: "mercury", size: 70,  top: "5%",  right: "30%",  delay: 1.2,  z: 15 },
  { slug: "neptune", size: 150, top: "62%", right: "6%",   delay: 0.5,  z: 26 },
  { slug: "uranus",  size: 85,  top: "34%", right: "12%",  delay: 0.9,  z: 17 },
];

const STATS = [
  { value: "8", label: "Planets" },
  { value: "3", label: "Exoplanets" },
  { value: "2", label: "Stars" },
  { value: "2", label: "Galaxies" },
];

const FEATURES = [
  {
    title: "Interactive 3D worlds",
    body: "Spin every planet, star and galaxy in real time, powered by three.js and a hand-tuned cosmic lighting rig.",
    icon: "globe",
  },
  {
    title: "Bite-sized astronomy",
    body: "Each celestial body comes with a curated profile of facts — distances, sizes, day-lengths and more.",
    icon: "book",
  },
  {
    title: "Designed for wonder",
    body: "From the inner rocky worlds to galaxies millions of light-years away, every page is built to feel cosmic.",
    icon: "sparkle",
  },
];

function Icon({ name }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  if (name === "globe")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
      </svg>
    );
  if (name === "book")
    return (
      <svg {...common}>
        <path d="M4 4h12a4 4 0 014 4v12H8a4 4 0 01-4-4V4z" />
        <path d="M4 4v12a4 4 0 004 4" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M12 3l2.5 6 6.5.5-5 4.5 1.5 6.5L12 17l-5.5 3.5L8 14 3 9.5l6.5-.5L12 3z" />
    </svg>
  );
}

// ---------- Hero collage ----------
function HeroCollage() {
  return (
    <div className="relative w-full h-[520px] lg:h-[640px]">
      {/* Soft accent wash behind the planets */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-[360px] h-[360px] rounded-full bg-techpurple/25 blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[260px] h-[260px] rounded-full bg-deepgrape/30 blur-[100px]" />
      </div>

      {/* Decorative orbital arcs */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        viewBox="0 0 600 600"
        fill="none"
      >
        <ellipse
          cx="300"
          cy="300"
          rx="280"
          ry="160"
          stroke="url(#orbit1)"
          strokeWidth="0.6"
          strokeDasharray="3 6"
        />
        <ellipse
          cx="320"
          cy="320"
          rx="220"
          ry="120"
          stroke="url(#orbit1)"
          strokeWidth="0.6"
          strokeDasharray="2 5"
        />
        <defs>
          <linearGradient id="orbit1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Planets */}
      {HERO_COLLAGE.map((p, i) => {
        const body = findCelestial(p.slug);
        if (!body) return null;
        return (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, scale: 0.6, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease: "easeOut" }}
            className="absolute"
            style={{
              top: p.top,
              right: p.right,
              width: p.size,
              height: p.size,
              zIndex: p.z,
            }}
          >
            <Link
              to={`/explore/${p.slug}`}
              className="block relative w-full h-full group"
              title={body.name}
            >
              {/* Accent halo */}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${body.accent}88, transparent 70%)`,
                  transform: "scale(1.4)",
                }}
              />
              {/* Planet image */}
              <div
                className="absolute inset-0 rounded-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.55)] animate-float"
                style={{ animationDelay: `${p.delay}s` }}
              >
                <img
                  src={body.texture}
                  alt={body.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Inner shadow vignette to fake lighting */}
                <div className="absolute inset-0 rounded-full shadow-[inset_-12px_-12px_40px_rgba(0,0,0,0.6),inset_8px_8px_30px_rgba(255,255,255,0.05)]" />
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}

function Home() {
  const planets = celestials.filter((c) => c.category === CATEGORIES.PLANET);
  const exoplanets = celestials.filter(
    (c) => c.category === CATEGORIES.EXOPLANET
  );
  const stars = celestials.filter((c) => c.category === CATEGORIES.STAR);
  const galaxies = celestials.filter((c) => c.category === CATEGORIES.GALAXY);

  return (
    <main className="page-enter pt-32 pb-10">
      {/* ===== HERO ===== */}
      <section className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <p className="text-sm font-display tracking-wide text-stardust/70 mb-4">
            Cosmos
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-gradient">
            Ignite your curiosity, <br />
            expand your universe.
          </h1>
          <p className="mt-6 text-base md:text-lg text-stardust/75 max-w-xl leading-relaxed">
            Embark on a celestial journey as we unravel the mysteries of the
            cosmos. Cosmos is your portal to the wonders of the universe — spin
            worlds in 3D, uncover the science, and let your curiosity drift.
          </p>

          {/* Service-style chips (kept from reference, repurposed for site sections) */}
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-stardust/60">
            <ChipLink to="/explore" label="Atlas" dot="#c4b5fd" />
            <ChipLink to="/explore/sun" label="Stars" dot="#FFB347" />
            <ChipLink to="/explore/milky-way" label="Galaxies" dot="#9D6BFF" />
            <ChipLink to="/explore/kepler-186f" label="Exoplanets" dot="#A78BFA" />
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/explore" className="btn-primary">
              Begin the journey
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/explore/sun" className="btn-coral">
              Visit the Sun
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-4 gap-3 max-w-md">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-4 text-center"
              >
                <div className="font-display text-2xl font-bold text-white">
                  {s.value}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-nebula mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero collage */}
        <HeroCollage />
      </section>

      {/* ===== FEATURES ===== */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-nebula font-semibold">
            Why Cosmos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-gradient">
            Astronomy, made tangible
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-3xl p-8 hover:shadow-glow transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-techpurple to-deepgrape flex items-center justify-center text-white mb-5 shadow-glow">
                <Icon name={f.icon} />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">
                {f.title}
              </h3>
              <p className="text-stardust/70 leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== NASA PICTURE OF THE DAY ===== */}
      <section className="max-w-7xl mx-auto px-6 mt-28">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-nebula font-semibold">
            Live from NASA
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-gradient">
            Picture of the day
          </h2>
          <p className="mt-3 text-stardust/70 max-w-2xl">
            Every day, NASA selects a new image or video of our universe and
            pairs it with a brief explanation written by a professional
            astronomer. Here is today's pick.
          </p>
        </div>
        <ApodCard />
      </section>

      <Section
        eyebrow="Inside the solar system"
        title="The planets"
        subtitle="Eight worlds, eight stories — from molten Mercury to deep blue Neptune."
        items={planets}
      />
      <Section
        eyebrow="Beyond our sun"
        title="Distant worlds"
        subtitle="Exoplanets are the alien worlds that orbit other stars. These three rewrote what we thought was possible."
        items={exoplanets}
      />
      <Section
        eyebrow="Stellar furnaces"
        title="Stars"
        subtitle="The cosmic engines that forged every atom in your body."
        items={stars}
      />
      <Section
        eyebrow="Island universes"
        title="Galaxies"
        subtitle="Vast cities of stars, gas and dark matter — each one a universe of its own."
        items={galaxies}
      />

      <Footer />
    </main>
  );
}

function ChipLink({ to, label, dot }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 hover:text-white transition-colors"
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: dot }}
      />
      {label}
    </Link>
  );
}

function Section({ eyebrow, title, subtitle, items }) {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-28">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-nebula font-semibold">
            {eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-gradient">
            {title}
          </h2>
          <p className="mt-3 text-stardust/70 max-w-2xl">{subtitle}</p>
        </div>
        <Link to="/explore" className="btn-ghost text-sm self-start md:self-auto">
          See all
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((c) => (
          <CelestialCard key={c.slug} celestial={c} />
        ))}
      </div>
    </section>
  );
}

export default Home;
