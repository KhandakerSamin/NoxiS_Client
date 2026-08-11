/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0a0a12",
          secondary: "#0e0e18",
          card: "#14141f",
        },
        border: {
          subtle: "rgba(255,255,255,0.08)",
        },
        accent: {
          blue: "#6366f1",
          purple: "#a855f7",
          light: "#818cf8",
        },
        text: {
          primary: "#ffffff",
          secondary: "#9ca3af",
          muted: "#6b7280",
        },
      },
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
        "gradient-radial-hero":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.25), transparent)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(139, 92, 246, 0.25)",
      },
    },
  },
  plugins: [],
};