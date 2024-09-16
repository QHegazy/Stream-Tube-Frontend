/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1200px" },

      lg: { max: "992px" },

      md: { max: "768px" },

      sm: { max: "576px" },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          ".video-time": {
            "background-color": "#b9b9b9b2",
          },
          ".card-link": {
            color: "black",
          },
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          ".video-time": {
            "background-color": "#1d232ab2",
          },
          ".card-link": {
            color: "white",
          },
        },
      },
    ],
  },
};
