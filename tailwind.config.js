/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
        screens:{
        "mobile":"340px",
        "desktop" : "1000px",
      }
    },
  },
  plugins: [],
}

