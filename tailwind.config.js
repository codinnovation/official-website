/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'metropolis-bold': ['Metropolis Bold', 'sans-serif'],
        'metropolis-light': ['Metropolis Light', 'sans-serif'],
        'metropolis-regular': ['Metropolis Regular', 'sans-serif'],
        'arianaprobold': ['arianaprobold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
