/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        "light": "#ffffff",
        "dark": "#111111",
        "main": "#0F2C59",
        "main2": "#2E4374",
      },
      backgroundImage: (theme) => ({
        "gradient1":
          "radial-gradient(ellipse at 9% 0%, #8099C1 0%, #0F2C59 15%, #8099C1 70%, #B7B5B5 75%, #0F2C59 90%);",

        "gradient2":
          "linear-gradient(328deg, #4B527E 15%, #2E4374 45%, #4B527E 70%, #0F2C59 90%);",
        "gradient3":
          "radial-gradient(ellipse at 9% 0%, #EBD197 0%, #B48811 10%, #EBD197 81%, #BB9B49 90%);",
        "bg": "url('./assets/bg.jpg')",
        "bg2": "url('./assets/bg2.webp')",
        "bg3": "url('./assets/bg3.jpg')",
      }),
      fontFamily: {
        playfair: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        pattern: "url('./assets/pattern.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
