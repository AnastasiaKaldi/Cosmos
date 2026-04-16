import { motion } from "framer-motion";
import { useApod } from "../hooks/useApod.js";

function ApodCard() {
  const { data, loading, error } = useApod();

  if (error) return null; // fail silently — the section just disappears
  if (loading) return <ApodSkeleton />;
  if (!data) return null;

  const isVideo = data.media_type === "video";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="glass-strong rounded-3xl overflow-hidden"
    >
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-0">
        {/* Media */}
        <div className="relative min-h-[280px] md:min-h-[380px]">
          {isVideo ? (
            <iframe
              src={data.url}
              title={data.title}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <img
              src={data.url}
              alt={data.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-phthalo/80 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-phthalo/80 to-transparent md:hidden" />
        </div>

        {/* Copy */}
        <div className="p-6 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="glass rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-display font-semibold text-nebula flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-nebula animate-twinkle" />
              NASA — Picture of the Day
            </span>
            <span className="text-[11px] text-stardust/50 font-body">
              {data.date}
            </span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold text-gradient leading-snug">
            {data.title}
          </h3>

          <p className="mt-4 text-sm md:text-base text-stardust/75 leading-relaxed line-clamp-5">
            {data.explanation}
          </p>

          {data.hdurl && (
            <a
              href={data.hdurl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm mt-6 self-start"
            >
              View full resolution
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          )}

          <p className="mt-6 text-[10px] text-stardust/40 uppercase tracking-widest">
            Powered by the NASA Open API
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ApodSkeleton() {
  return (
    <div className="glass-strong rounded-3xl overflow-hidden animate-pulse">
      <div className="grid md:grid-cols-[1fr_1.2fr]">
        <div className="min-h-[280px] md:min-h-[380px] bg-bluebell/30" />
        <div className="p-6 md:p-10 space-y-4">
          <div className="h-4 w-48 rounded-full bg-bluebell/30" />
          <div className="h-8 w-3/4 rounded-xl bg-bluebell/30" />
          <div className="h-4 w-full rounded-full bg-bluebell/20" />
          <div className="h-4 w-full rounded-full bg-bluebell/20" />
          <div className="h-4 w-2/3 rounded-full bg-bluebell/20" />
        </div>
      </div>
    </div>
  );
}

export default ApodCard;
