/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  darkMode:"class",
  theme: {
    extend: {
      screens:{
        "smm":"300px"
      },
    },
    screens:{
      "sm":"640px",
      "md":"768px",
      "lg":"1024px",
      "xl":"1280px",
      "2xl":"1536px"
    },
    fontFamily:{
      "arial":"Josefin Sans', sans-serif;"
    }
  },
  plugins: [],
}

