/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBackground: {
          light: '#d0e1f9',  // Light blue/gray tone for a clean look
          dark: '#1c3d5a',   // Darker blue/gray for depth
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #d0e1f9, #1c3d5a)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};