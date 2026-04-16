import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useNasaData } from "../hooks/useNasaData.js";

// Human-readable labels for the parsed data keys
const LABELS = {
  mass: "Mass",
  meanRadius: "Mean Radius",
  equatorialRadius: "Equat. Radius",
  density: "Density",
  gravity: "Surface Gravity",
  escapeVelocity: "Escape Velocity",
  rotationPeriod: "Rotation Period",
  orbitalPeriod: "Orbital Period",
  orbitalPeriodDays: "Orbital Period",
  orbitalSpeed: "Orbital Speed",
  surfaceTemp: "Surface Temp",
  atmosTemp: "Atmos. Temp (1 bar)",
  albedo: "Geometric Albedo",
  obliquity: "Axial Tilt",
  solarConstant: "Solar Constant",
  flattening: "Flattening",
  // Exoplanet fields
  radius: "Radius",
  semiMajorAxis: "Semi-major Axis",
  discoveryYear: "Discovered",
  discoveryMethod: "Discovery Method",
  distance: "Distance",
  eqTemp: "Equilibrium Temp",
  hostStarTemp: "Host Star Temp",
  hostStarType: "Host Star Type",
  insolation: "Insolation Flux",
};

function NasaDataPanel({ slug, category, accent }) {
  const { data, loading, error } = useNasaData(slug, category);

  // Stars (non-Sun) and galaxies have no NASA API — don't render anything
  if (!loading && !data) return null;
  if (error) return null;

  if (loading) {
    return (
      <div className="glass-strong rounded-3xl p-6 md:p-8 animate-pulse">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-4 w-40 rounded-full bg-bluebell/30" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl p-3 bg-bluebell/15 h-16" />
          ))}
        </div>
      </div>
    );
  }

  const entries = Object.entries(data);
  if (entries.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="glass-strong rounded-3xl p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-5">
        <NasaLogo />
        <div>
          <p className="font-display text-[10px] uppercase tracking-[0.3em] text-nebula">
            Live from NASA
          </p>
          <p className="text-[10px] text-stardust/50 mt-0.5">
            {category === "Exoplanet"
              ? "NASA Exoplanet Archive"
              : "JPL Horizons System"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {entries.map(([key, value]) => (
          <div
            key={key}
            className="rounded-2xl p-3"
            style={{
              background: `linear-gradient(135deg, ${accent}15, transparent)`,
              border: `1px solid ${accent}25`,
            }}
          >
            <p className="text-[9px] uppercase tracking-widest text-stardust/55 truncate">
              {LABELS[key] || key}
            </p>
            <p className="font-display text-sm font-semibold text-white mt-1 truncate" title={value}>
              {value}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function NasaLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-nebula shrink-0"
    >
      <circle cx="12" cy="12" r="10" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

NasaDataPanel.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  accent: PropTypes.string.isRequired,
};

export default NasaDataPanel;
