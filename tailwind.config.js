/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3e6ff4',
        secondary:'#0d1730'
      }
    },
  },
  plugins: [function ({ addVariant }) {
    addVariant('child', '& > *');
    addVariant('child-hover', '& > *:hover');
  }],
}