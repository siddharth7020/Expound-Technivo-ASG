/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        'custom-blue': '#11334E',
      },
    },
   
  },
  plugins: [],
}