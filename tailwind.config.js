/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#1597F2",
        brandNavy: "#071A44",
        brandYellow: "#FFC928",
        brandOrange: "#FF7A1A",
        brandGreen: "#4CAF50",
        page: "#F7FBFF",
      },
      boxShadow: {
        nav: "0 12px 34px rgba(19, 88, 166, 0.12)",
        hero: "0 18px 40px rgba(19, 88, 166, 0.08)",
        card: "0 16px 34px rgba(19, 88, 166, 0.12)",
        soft: "0 10px 22px rgba(19, 88, 166, 0.08)",
      },
      fontFamily: {
        sans: ["Fredoka", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fredoka", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-sheen":
          "linear-gradient(90deg, rgba(255,255,255,0.96) 0%, rgba(247,251,255,0.88) 32%, rgba(247,251,255,0.32) 58%, rgba(255,255,255,0) 100%)",
      },
    },
  },
  plugins: [],
};
