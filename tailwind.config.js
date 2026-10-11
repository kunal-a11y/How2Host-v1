/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          white: "#FFFFFF",
          black: "#111111",
          soft: "#F7F7F5",
          border: "#E6E6E6",
          muted: "#666666",
          silver: "#D1D5DB",
          dark: "#111111",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "sans-serif"],
        display: ["Inter", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "sans-serif"],
      },
      maxWidth: {
        site: "1280px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.06)",
        cardHover: "0 20px 40px -15px rgba(0, 0, 0, 0.1)",
        darkCard: "0 12px 36px -10px rgba(0, 0, 0, 0.4)",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "pulse-subtle": "pulseSubtle 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
