const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:["Nunito Sans", ...defaultTheme.fontFamily.sans]
      },
      colors:{
        obsidian:"#19191B",
        metal:"#1C1B1D",
        primary:"#5454D4",
        secondary:"#E7E7E7"
      }
    }
  },
  variants: {},
  plugins: [],
};
