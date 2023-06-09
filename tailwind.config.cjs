/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : 'var(--primary-color)',
        'background' : 'var(--background-color)',
        'backgroundOffset' : 'var(--backgroundOffset-color)',
        'backgroundOffset2' : 'var(--backgroundOffset2-color)',
        'success' : 'var(--success-color)',
        'rating' : 'var(--rating-color)',
      },
      minHeight: {
        '20vh': '20vh',
        '40vh': '40vh',
      }
    },
  },
  plugins: [],
}

