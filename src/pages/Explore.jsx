import { useState } from "react";
import { motion } from "framer-motion";
import { celestials, CATEGORIES } from "../data/celestials.js";
import CelestialCard from "../components/CelestialCard.jsx";
import Footer from "../components/Footer.jsx";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Planets", value: CATEGORIES.PLANET },
  { label: "Exoplanets", value: CATEGORIES.EXOPLANET },
  { label: "Stars", value: CATEGORIES.STAR },
  { label: "Galaxies", value: CATEGORIES.GALAXY },
];

function Explore() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = celestials.filter((c) => {
    const matchFilter = filter === "all" || c.category === filter;
    const matchQuery =
      !query.trim() ||
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.tagline.toLowerCase().includes(query.toLowerCase());
    return matchFilter && matchQuery;
  });

  return (
    <main className="page-enter pt-32 pb-10">
      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-nebula font-semibold">
            The atlas
          </p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold text-gradient">
            Explore the cosmos
          </h1>
          <p className="mt-5 text-lg text-stardust/80">
            Pick a world, a star or a galaxy to dive in. Every entry comes with
            a 3D view and a curated set of facts.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mt-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-5 py-2 rounded-full font-display text-sm font-medium transition-all ${
                  filter === f.value
                    ? "bg-gradient-to-r from-techpurple to-deepgrape text-white shadow-glow"
                    : "glass text-stardust hover:bg-white/10"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search worlds…"
              className="w-full glass rounded-full py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-stardust/50 outline-none focus:border-nebula/60"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-nebula"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((c) => (
            <CelestialCard key={c.slug} celestial={c} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-stardust/60">
            No worlds matched that search. Try another query.
          </p>
        )}
      </section>

      <Footer />
    </main>
  );
}

export default Explore;
