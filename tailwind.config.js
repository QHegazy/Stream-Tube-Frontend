module.exports = {
  flyonui: {
    themes: [
      {
        light: {
          ...require("flyonui/src/theming/themes")["light"],
          primary: "#007BFF",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
        dark: {
          ...require("flyonui/src/theming/themes")["dark"],
          primary: "#007BFF",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#171717",
        },
      },
    ],
  },
  darkMode: "class",
  content: ["./src/**/*.{html,ts}", "./node_modules/flyonui/dist/js/*.js"],
  plugins: [
    require("flyonui"),
    require("flyonui/plugin"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
