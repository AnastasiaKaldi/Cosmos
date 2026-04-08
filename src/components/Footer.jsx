function Footer() {
  return (
    <footer className="relative mt-32 pb-10 px-6">
      <div className="max-w-6xl mx-auto glass-strong rounded-3xl p-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-nebula to-techpurple animate-twinkle" />
          <p className="font-display text-lg text-gradient">Cosmos</p>
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-techpurple to-nebula animate-twinkle" />
        </div>
        <p className="text-sm text-stardust/70 max-w-xl mx-auto">
          A learning journey through the worlds, stars and galaxies that make
          up our universe. Built with curiosity, three.js and a deep love of
          the night sky.
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-nebula/60">
          Ad astra per aspera
        </p>
      </div>
    </footer>
  );
}

export default Footer;
