module.exports = {
  darkMode: "class", 
  content: ["./src/**/*.{html,ts}"], 
  theme: {
    extend: {
      colors: {
        main: {
          light: "#ffffff", 
          dark: "#171717", 
        },
        text: {
          light: "#65c8dd", 
          dark: "#ffffff", 
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    function ({ addComponents, theme }) {
      addComponents({
        // Background color for elements with bg-main class
        ".bg-main": {
          backgroundColor: theme("colors.main.light"), // Default background for light mode
          transition: "background-color 0.3s ease-in-out",
        },
        ".dark .bg-main": {
          backgroundColor: theme("colors.main.dark"), // Dark mode background color
        },

        // Text color for elements with text-main class
        ".text-main": {
          color: theme("colors.text.light"), // Default text color for light mode
          transition: "color 0.3s ease-in-out",
        },
        ".dark .text-main": {
          color: theme("colors.text.dark"), // Dark mode text color
        },
      });
    },
  ],
};
