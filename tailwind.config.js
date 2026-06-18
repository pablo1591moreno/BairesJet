/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futuristic: ['Michroma', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        exo: ['"Exo 2"', 'sans-serif'],
        syncopate: ['Syncopate', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

