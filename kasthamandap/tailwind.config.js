/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['CursiveFont', 'cursive'],
        dancing: ['Dancing Script', 'cursive'],
        satisfy:['Satisfy', 'cursive']
      },
    },
  },
  plugins: [],
};
