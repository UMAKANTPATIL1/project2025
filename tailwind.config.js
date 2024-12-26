/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Specify the files Tailwind should scan
  ],
  theme: {
    extend: {
      fontFamily: {
        'detective': ['"Special Elite"', 'Courier', 'monospace'], // Add your desired fonts here
      },
    },
  },
  plugins: [],
};
