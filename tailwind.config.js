/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f4f4f8",
          100: "#e6e6ee",
          200: "#c9c9d6",
          300: "#a2a2b4",
          400: "#74748a",
          500: "#525268",
          600: "#3b3b4d",
          700: "#2b2b3a",
          800: "#1d1d28",
          850: "#15151f",
          900: "#0e0e15",
          950: "#050507",
        },
        mist: {
          200: "#c9cdd6",
          300: "#9aa1ad",
          400: "#6e7683",
        },
        accent: {
          200: "#a7e8d8",
          300: "#7adcc4",
          400: "#45c8aa",
          500: "#2ba88e",
          600: "#1f8771",
          700: "#196a5b",
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', "ui-sans-serif", "sans-serif"],
      },
      screens: {
        "3xl": "1720px",
      },
      maxWidth: {
        site: "1280px",
      },
      boxShadow: {
        float: "0 24px 60px -24px rgba(0,0,0,0.75), 0 8px 20px -12px rgba(0,0,0,0.6)",
        "float-lg":
          "0 40px 90px -30px rgba(0,0,0,0.85), 0 18px 40px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03)",
        glass: "inset 0 1px 0 0 rgba(255,255,255,0.08), 0 20px 50px -20px rgba(0,0,0,0.7)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(0.4deg)" },
        },
        "floaty-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-7px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(69,200,170,0.45)" },
          "50%": { opacity: "0.75", boxShadow: "0 0 0 5px rgba(69,200,170,0)" },
        },
        led: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "1" },
        },
        "dash-flow": {
          to: { strokeDashoffset: "-56" },
        },
        "gauge-sweep": {
          "0%, 100%": { transform: "rotate(-38deg)" },
          "50%": { transform: "rotate(38deg)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        "floaty-slow": "floaty-slow 7s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.6s ease-in-out infinite",
        led: "led 1.8s ease-in-out infinite",
        "dash-flow": "dash-flow 2.6s linear infinite",
        "gauge-sweep": "gauge-sweep 4.2s ease-in-out infinite",
        "spin-slow": "spin-slow 14s linear infinite",
      },
    },
  },
  plugins: [],
};
