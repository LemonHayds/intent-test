const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
        avenirHeavy: ["avenirHeavy"],
        avenirMedium: ["avenirMedium"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      textShadow: {
        DEFAULT: "0 3px 4px var(--tw-shadow-color)",
      },
      colors: {
        wealthBgOrange: "#EFC298",
        wealthBgYellow: "#E8CA2C",
        wealthBgRed: "#FE7F57",
        wealthTxtOrange: "#EBA639",
        wealthTxtBlack: "#333131",
        wealthTitleBlack: "#161616",
        wealthButtonOrange: "#FBBD5A",
        wealthRadialOrange1: "#F3C650",
        wealthRadialOrange2: "#EEBB6B",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
