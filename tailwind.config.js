/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#164A41',
        'medium-green': '#4D774E',
        'light-green': '#9DC88D',
        'natural-yellow': '#F1B24A',
        'white': '#FFFFFF',
      },
    }
  },
  plugins: [],
}

