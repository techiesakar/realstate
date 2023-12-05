/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: "#153048",
        secondary: "#ffa72a",
        hover: "#ff7800",
        light: "#F8F8F8",
        facebook:"#4267B2",
        youtube:"#FF0000",
        instagram:"#E1306C",
        github:"#333333",
        linkedin:"#0077B5",
        twitter:"#1DA1F2"
      },
      width: {
        '1150': "1150px"
      },
      backgroundSize: {
        '50%': '50%',
        '16': '4rem',
      }


    },
  },
  plugins: [require("tailwindcss-animate")],
}