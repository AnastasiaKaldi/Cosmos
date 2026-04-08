import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CelestialCard({ celestial }) {
  return (
    <Link
      to={`/explore/${celestial.slug}`}
      className="celestial-card glass group block"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={celestial.texture}
          alt={celestial.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-phthalo via-phthalo/40 to-transparent" />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-60"
          style={{
            background: `radial-gradient(circle at 50% 40%, ${celestial.accent}66, transparent 70%)`,
          }}
        />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-display font-semibold glass-strong text-stardust">
          {celestial.category}
        </span>
      </div>
      <div className="p-5 relative">
        <h3 className="font-display text-xl font-semibold text-white">
          {celestial.name}
        </h3>
        <p className="text-sm text-stardust/70 mt-1 line-clamp-2">
          {celestial.tagline}
        </p>
        <div className="flex items-center gap-2 mt-4 text-xs text-nebula font-medium">
          <span>Explore</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-1 transition-transform"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

CelestialCard.propTypes = {
  celestial: PropTypes.object.isRequired,
};

export default CelestialCard;
