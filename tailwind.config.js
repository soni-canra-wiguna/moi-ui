/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
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
        wprimary: "hsl(var(--wumbo-primary))",
        wdark: "hsl(var(--wumbo-dark))",
        wmuted: "hsl(var(--wumbo-muted))",
        wprimarylight: "hsl(var(--wumbo-primary-light))",
        wmutedlight: "hsl(var(--wumbo-muted-light))",
        //tokopedia
        tpprimary: "hsl(var(--tp-primary))",
        tpsecondary: "hsl(var(--tp-secondary))",
        tpbackground: "hsl(var(--tp-background))",
        tpforeground: "hsl(var(--tp-foreground))",
        tptext: "hsl(var(--tp-text))",
        tpparagraph: "hsl(var(--tp-paragraph))",
      },
      lineHeight: {
        30: "30px",
        32: "32px",
        36: "36px",
        44: "44px",
        40: "40px",
        74: "74px",
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
        // open sauce font
        openSauceLight: "openSauceLight",
        openSauceRegular: "openSauceRegular",
        openSauceMedium: "openSauceMedium",
        openSauceSemibold: "openSauceSemibold",
        openSauceBold: "openSauceBold",
        openSauceExtraBold: "openSauceExtraBold",
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
