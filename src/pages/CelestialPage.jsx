import { lazy, Suspense } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  celestials,
  findCelestial,
  CATEGORIES,
} from "../data/celestials.js";

const CelestialCanvas = lazy(() =>
  import("../components/CelestialCanvas.jsx")
);

// ---------- Inline icon set (kept tiny so the dashboard ships fast) ----------
const Icon = ({ name, size = 22 }) => {
  const c = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "planet":
      return (
        <svg {...c}>
          <circle cx="12" cy="12" r="4" />
          <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(-20 12 12)" />
        </svg>
      );
    case "exoplanet":
      return (
        <svg {...c}>
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="9" strokeDasharray="2 3" />
        </svg>
      );
    case "star":
      return (
        <svg {...c}>
          <path d="M12 2l2.6 6.6L21 9.7l-5 4.6L17.4 21 12 17.6 6.6 21 8 14.3l-5-4.6 6.4-1.1L12 2z" />
        </svg>
      );
    case "galaxy":
      return (
        <svg {...c}>
          <circle cx="12" cy="12" r="2" />
          <path d="M12 4c5 0 8 3 8 8M12 20c-5 0-8-3-8-8" />
          <path d="M4 12c0-2 4-4 8-4M20 12c0 2-4 4-8 4" />
        </svg>
      );
    case "back":
      return (
        <svg {...c}>
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
      );
    case "grid":
      return (
        <svg {...c}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
    default:
      return null;
  }
};

const CATEGORY_ICONS = {
  [CATEGORIES.PLANET]: "planet",
  [CATEGORIES.EXOPLANET]: "exoplanet",
  [CATEGORIES.STAR]: "star",
  [CATEGORIES.GALAXY]: "galaxy",
};

// ---------- Page ----------
function CelestialPage() {
  const { slug } = useParams();
  const body = findCelestial(slug);

  if (!body) return <Navigate to="/explore" replace />;

  const siblings = celestials.filter((c) => c.category === body.category);

  return (
    <div className="min-h-screen w-full text-stardust">
      {/* ============ LEFT SIDEBAR ============ */}
      <aside className="hidden md:flex fixed left-4 top-4 bottom-4 w-20 flex-col items-center justify-between glass-strong rounded-3xl py-6 z-30">
        {/* Logo */}
        <Link to="/" className="group">
          <div className="relative w-11 h-11">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-techpurple via-deepgrape to-bluebell shadow-glow group-hover:shadow-glowStrong transition-shadow" />
            <div className="absolute inset-1 rounded-full bg-phthalo" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-nebula to-techpurple animate-float" />
          </div>
        </Link>

        {/* Category nav */}
        <nav className="flex flex-col gap-3">
          <Link
            to="/explore"
            className="w-12 h-12 flex items-center justify-center rounded-2xl text-stardust/70 hover:text-white hover:bg-white/5 transition-colors"
            title="All worlds"
          >
            <Icon name="grid" />
          </Link>
          {Object.values(CATEGORIES).map((cat) => {
            const isActive = cat === body.category;
            return (
              <Link
                key={cat}
                to="/explore"
                title={cat}
                className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all ${
                  isActive
                    ? "bg-gradient-to-br from-techpurple to-deepgrape text-white shadow-glow"
                    : "text-stardust/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon name={CATEGORY_ICONS[cat]} />
              </Link>
            );
          })}
        </nav>

        {/* Back */}
        <Link
          to="/explore"
          className="w-12 h-12 flex items-center justify-center rounded-2xl text-stardust/70 hover:text-white hover:bg-white/5 transition-colors"
          title="Back to atlas"
        >
          <Icon name="back" />
        </Link>
      </aside>

      {/* ============ RIGHT SIDEBAR — siblings ============ */}
      <aside className="hidden lg:flex fixed right-4 top-4 bottom-4 w-20 flex-col items-center justify-center gap-3 glass-strong rounded-3xl py-6 z-30 overflow-y-auto">
        <p className="font-display text-[9px] uppercase tracking-widest text-nebula mb-2">
          {body.category}s
        </p>
        {siblings.map((s) => {
          const isActive = s.slug === body.slug;
          return (
            <Link
              key={s.slug}
              to={`/explore/${s.slug}`}
              title={s.name}
              className={`relative w-12 h-12 rounded-full overflow-hidden transition-all ${
                isActive
                  ? "ring-2 ring-nebula shadow-glow scale-110"
                  : "opacity-60 hover:opacity-100 hover:scale-105"
              }`}
            >
              <img
                src={s.texture}
                alt={s.name}
                className="w-full h-full object-cover"
              />
              {isActive && (
                <div
                  className="absolute inset-0 mix-blend-overlay"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${s.accent}88, transparent 70%)`,
                  }}
                />
              )}
            </Link>
          );
        })}
      </aside>

      {/* ============ MAIN ============ */}
      <main
        key={body.slug}
        className="page-enter md:ml-28 lg:mr-28 px-4 md:px-6 pt-6 pb-10"
      >
        {/* ----- Top fact cards ----- */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {body.facts.map((f) => (
            <div
              key={f.label}
              className="glass-strong rounded-2xl px-4 py-3 flex items-center gap-3"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${body.accent}40, ${body.accent}10)`,
                  border: `1px solid ${body.accent}40`,
                  color: body.accent,
                }}
              >
                <Icon name={CATEGORY_ICONS[body.category]} size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] uppercase tracking-widest text-stardust/60 truncate">
                  {f.label}
                </p>
                <p className="font-display text-base md:text-lg font-bold text-white truncate">
                  {f.value}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ----- Hero panel ----- */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mt-4 rounded-3xl overflow-hidden glass-strong"
          style={{ minHeight: "min(70vh, 640px)" }}
        >
          {/* 3D canvas */}
          <div className="absolute inset-0">
            <Suspense
              fallback={
                <img
                  src={body.texture}
                  alt={body.name}
                  className="w-full h-full object-cover opacity-70"
                />
              }
            >
              <CelestialCanvas
                texture={body.texture}
                radius={body.radius}
                rotationSpeed={body.rotationSpeed}
                accent={body.accent}
                type={body.type}
                galaxy={body.galaxy}
              />
            </Suspense>
          </div>

          {/* Accent glow */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-overlay"
            style={{
              background: `radial-gradient(circle at 65% 50%, ${body.accent}33, transparent 60%)`,
            }}
          />

          {/* Top-left tagline pill */}
          <div className="absolute top-5 left-5 right-5 flex items-start justify-between gap-3 pointer-events-none">
            <span className="glass-strong rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold flex items-center gap-2"
              style={{ color: body.accent }}>
              <span
                className="w-1.5 h-1.5 rounded-full animate-twinkle"
                style={{ background: body.accent }}
              />
              {body.category} · {body.group}
            </span>
            <span className="glass rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-stardust/70 hidden md:inline">
              {body.tagline}
            </span>
          </div>

          {/* Bottom-left big name */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 pointer-events-none">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-none text-gradient drop-shadow-[0_8px_30px_rgba(139,92,246,0.45)]"
            >
              {body.name}
            </motion.h1>
            <p className="mt-3 text-sm md:text-base text-stardust/80 italic max-w-xl">
              {body.tagline}
            </p>
          </div>

          {/* Bottom-right mini indicators */}
          <div className="absolute bottom-6 right-6 hidden md:flex gap-3 pointer-events-none">
            {body.facts.slice(0, 2).map((f) => (
              <div
                key={f.label}
                className="glass rounded-2xl px-3 py-2 text-right"
              >
                <p
                  className="font-display text-base font-bold"
                  style={{ color: body.accent }}
                >
                  {f.value.split(" ")[0]}
                </p>
                <p className="text-[8px] uppercase tracking-widest text-stardust/60">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ----- Description panel ----- */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 grid md:grid-cols-[2fr_1fr] gap-4"
        >
          <div className="glass-strong rounded-3xl p-6 md:p-8">
            <p className="font-display text-[10px] uppercase tracking-[0.3em] text-nebula mb-3">
              About {body.name}
            </p>
            <p className="text-base md:text-lg text-stardust/85 leading-relaxed">
              {body.description}
            </p>
          </div>

          <div className="glass-strong rounded-3xl p-6 flex flex-col">
            <p className="font-display text-[10px] uppercase tracking-[0.3em] text-nebula mb-3">
              Quick stats
            </p>
            <div className="grid grid-cols-2 gap-3 flex-1">
              {body.facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-2xl p-3"
                  style={{
                    background: `linear-gradient(135deg, ${body.accent}1f, transparent)`,
                    border: `1px solid ${body.accent}33`,
                  }}
                >
                  <p className="text-[9px] uppercase tracking-widest text-stardust/60">
                    {f.label}
                  </p>
                  <p className="font-display text-sm font-bold text-white mt-1">
                    {f.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ----- Mobile sibling strip ----- */}
        <div className="lg:hidden mt-4 glass-strong rounded-3xl p-4">
          <p className="font-display text-[10px] uppercase tracking-widest text-nebula mb-3">
            More {body.category.toLowerCase()}s
          </p>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {siblings.map((s) => {
              const isActive = s.slug === body.slug;
              return (
                <Link
                  key={s.slug}
                  to={`/explore/${s.slug}`}
                  className={`shrink-0 w-14 h-14 rounded-full overflow-hidden ${
                    isActive
                      ? "ring-2 ring-nebula shadow-glow"
                      : "opacity-60"
                  }`}
                >
                  <img
                    src={s.texture}
                    alt={s.name}
                    className="w-full h-full object-cover"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default CelestialPage;
