/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      white: "var(--white)",
      border_color: "var(--border_color)",
    },
    container: {
      center: true,
    },
    fontFamily: {
      teko: ['Teko', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
