/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile-sm':'321px',
      'mobile-lg':'375px',
     
    },
  },
  plugins: [],
}

