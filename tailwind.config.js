/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
        },
        surface: {
          light: "#ffffff",
          card: "#f0fdfa",
          dark: "#0f1117",
          darkCard: "#1a1f2e",
          darkBorder: "#2a3040",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 40%, #ffffff 100%)",
        "hero-gradient-dark": "linear-gradient(135deg, #0f1117 0%, #0a1a1a 50%, #0f1117 100%)",
      },
      boxShadow: {
        card: "0 4px 24px rgba(45, 212, 191, 0.10)",
        "card-hover": "0 8px 40px rgba(45, 212, 191, 0.22)",
        glow: "0 0 30px rgba(45, 212, 191, 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
