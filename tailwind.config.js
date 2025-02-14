/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'metropolis-bold': ['Metropolis Bold', 'sans-serif'],
        'metropolis-light': ['Metropolis Light', 'sans-serif'],
        'metropolis-regular': ['Metropolis Regular', 'sans-serif'],
        'arianaprobold': ['arianaprobold', 'sans-serif'],
        'fontspring': ['fontspring', 'sans-serif'],
        'fontspring-regular': ['fontspring-regular', 'sans-serif'],
        'ruhma': ['ruhma', 'sans-serif'],
        'nexa-light': ['nexa-light', 'sans-serif'],
        'nexa-bold': ['nexa-bold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
