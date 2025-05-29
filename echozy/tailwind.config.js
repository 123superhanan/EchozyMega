/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8A2BE2',       // Electric purple
        secondary: '#1DB954',     // Spotify green-ish
        background: '#0E0B16',    // Deep dark background
        card: '#1A1A2E',          // Card UI color
        accent: '#FF4C60',        // Coral CTA
        textPrimary: '#FFFFFF',
        textSecondary: '#CCCCCC',
      },
      fontFamily: {
        main: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
      require('tailwind-scrollbar-hide'),
  ],
}
