/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': "#D9D9D9",
        'secondary': "#B79F8E",
        'span': "#475045",
        'zhero': "#EAEFF4",
        'paragraph': "#505056"
      },
      fontFamily: {
        'outfit': ["Outfit"],
        'roboto': ["Roboto"],
      },

    },
  },
  plugins: [],
}

