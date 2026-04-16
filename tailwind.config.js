/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Cosmic palette
        phthalo: "#0d0b1f",     // deepest void
        bluebell: "#1a1538",    // mid void
        kingfisher: "#2c1f5e",  // deep purple
        deepgrape: "#5b3fa3",   // bridge tone
        techpurple: "#8b5cf6",  // vibrant violet (primary accent)
        nebula: "#c4b5fd",      // light lavender (highlight)
        stardust: "#f5f3ff",    // near-white lavender (text)
      },
      fontFamily: {
        display: ['"Comfortaa"', "system-ui", "sans-serif"],
        body: ['"Quicksand"', "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "cosmic-gradient":
          "linear-gradient(135deg, #0d0b1f 0%, #2c1f5e 35%, #5b3fa3 65%, #8b5cf6 100%)",
        "cosmic-radial":
          "radial-gradient(ellipse at top, #8b5cf6 0%, #2c1f5e 40%, #0d0b1f 80%, #07061a 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(139, 92, 246, 0.45)",
        glowStrong: "0 0 80px rgba(196, 181, 253, 0.55)",
      },
      animation: {
        twinkle: "twinkle 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        drift: "drift 60s linear infinite",
        "fade-up": "fadeUp 0.8s ease-out both",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: 0.2 },
          "50%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        drift: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-1000px,0,0)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
