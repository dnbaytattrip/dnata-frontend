module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NunitoSans: ["Nunito Sans, sans-serif"],
        Merienda: ["Merienda, cursive"],
      },
      colors: {
        "custom-blue": "#E9F6FC",
        "custom-blue2": "#0094D5",
        "custom-blue3": "#0C5598",
        "custom-blue4": "#B4D0E5",
        "custom-blue5": "#0E0C28",
        "custom-blue6": "#242849",
        "custom-blue7": "#7A80B4",
      },
      container: {
        center: true,
        padding: 12,
        screens: {
          lg: "1400px",
          xl: "1400px",
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
};
