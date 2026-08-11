/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B0F19",
        violet: "#12103E",
        cyanBlue: "#00A3FF",
        limeYellow: "#E4FA00",
        charcoal: "#111827",
        ice: "#E5E7EB",
        mutedGray: "#6B7280",
        bg: {
          primary: "#0B0F19",
          secondary: "#FFFFFF",
          accent: "#12103E",
          card: "#12103E",
        },
        border: {
          subtle: "rgba(255,255,255,0.1)",
          light: "#E5E7EB",
        },
        accent: {
          blue: "#00A3FF",
          lime: "#E4FA00",
          light: "#38BDF8",
        },
        text: {
          primary: "#FFFFFF",
          darkPrimary: "#111827",
          secondary: "#9CA3AF",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #00A3FF 0%, #0066FF 100%)",
        "gradient-electric": "linear-gradient(135deg, #00A3FF 0%, #E4FA00 100%)",
        "gradient-radial-hero":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 163, 255, 0.25), transparent)",
      },
      boxShadow: {
        glow: "0 0 35px rgba(0, 163, 255, 0.4)",
        "glow-lime": "0 0 35px rgba(228, 250, 0, 0.35)",
      },
    },
  },
  plugins: [],
};