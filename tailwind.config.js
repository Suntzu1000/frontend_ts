/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#fefce8",
        "gray-50": "#ffedd5",
        "gray-100": "#fed7aa",
        "gray-500": "#eab308",
        "primary-100": "#fcd34d",
        "primary-300": "##ca8a04",
        "primary-500": "#ff6b66",
        "secondary-400": "#ffcd58",
        "secondary-500": "#ffc132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #ff616a 0%, #ffc837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractsWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"

    }
  },
  plugins: [],
}