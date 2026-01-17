/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-void': '#050505',
        'cyber-cyan': '#00F0FF',
        'cyber-violet': '#7000FF',
        'cyber-green': '#00FF94',
        'cyber-white': '#EAEAEA',
        'cyber-gray': '#1A1A1A',
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(to right, #00F0FF, #7000FF)',
      }
    },
  },
  plugins: [],
}
