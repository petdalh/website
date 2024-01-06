/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path according to your project structure
    // Include any other paths that may contain Tailwind CSS classes
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#A9A9A9',
      },
    },
  },
  plugins: [],
}
