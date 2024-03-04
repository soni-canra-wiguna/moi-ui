/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "601px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1366px",
      },
      colors: {
        ebprimary: "hsl(var(--e-book))",
        ebdark: "hsl(var(--e-book-dark))",
      },
      lineHeight: {
        32: "32px",
        44: "44px",
        40: "40px",
      },
      letterSpacing: {
        10: "10%",
      },
      fontSize: {
        "32px": "32px",
      },
      fontFamily: {
        grostekMd: "grostekMedium",
        grostekRegular: "grostekRegular",
        grostekNormal: "grostekNormal",
        grostekBold: "grostekBold",
        // dm sans
        dmsans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
      },
      gap: {
        "30px": "30px",
      },
      boxShadow: {
        "eb-btm": "rgba(0, 0, 0, 0.35) 0px 25px 20px -20px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
