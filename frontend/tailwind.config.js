/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#3498db',
          DEFAULT: '#2173b9',
          dark: '#1e5799',
        },
        // Add more custom colors if needed
      },
    },
  },
  plugins: [],
}

