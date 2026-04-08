import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CATEGORIES, groupedCelestials } from "../data/celestials.js";

const NAV_GROUPS = [
  { label: "Planets", category: CATEGORIES.PLANET },
  { label: "Exoplanets", category: CATEGORIES.EXOPLANET },
  { label: "Stars", category: CATEGORIES.STAR },
  { label: "Galaxies", category: CATEGORIES.GALAXY },
];

function Navbar() {
  const [openCategory, setOpenCategory] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass-strong mx-4 md:mx-8 mt-4 rounded-2xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-techpurple via-deepgrape to-bluebell shadow-glow group-hover:shadow-glowStrong transition-shadow" />
            <div className="absolute inset-1 rounded-full bg-phthalo" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-nebula to-techpurple animate-float" />
          </div>
          <span className="font-display text-2xl font-bold text-gradient">
            Cosmos
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-2">
          {NAV_GROUPS.map((group) => (
            <li
              key={group.category}
              className="relative"
              onMouseEnter={() => setOpenCategory(group.category)}
              onMouseLeave={() => setOpenCategory(null)}
            >
              <button className="px-4 py-2 rounded-full font-display text-sm font-medium text-stardust hover:text-white hover:bg-white/5 transition-colors">
                {group.label}
              </button>

              <AnimatePresence>
                {openCategory === group.category && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-64"
                  >
                    <div className="glass-strong rounded-2xl p-3 shadow-glow">
                      {(groupedCelestials[group.category] || []).map((c) => (
                        <NavLink
                          key={c.slug}
                          to={`/explore/${c.slug}`}
                          className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10 transition-colors"
                        >
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ background: c.accent }}
                          />
                          <span className="font-body text-sm text-stardust">
                            {c.name}
                          </span>
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
          <li>
            <Link to="/explore" className="ml-2 btn-ghost text-sm py-2 px-4">
              Explore all
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-stardust"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-3 glass-strong rounded-2xl p-4 max-h-[70vh] overflow-y-auto"
          >
            {NAV_GROUPS.map((group) => (
              <div key={group.category} className="mb-4">
                <p className="font-display text-xs uppercase tracking-widest text-nebula mb-2">
                  {group.label}
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {(groupedCelestials[group.category] || []).map((c) => (
                    <Link
                      key={c.slug}
                      to={`/explore/${c.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/10"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: c.accent }}
                      />
                      <span className="text-sm text-stardust">{c.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              to="/explore"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full justify-center mt-2"
            >
              Explore all
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
