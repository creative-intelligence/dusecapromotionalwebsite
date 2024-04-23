/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          150: "#D9D9D9"
        }
      },
      fontFamily: {
        'outfit': ["Outfit"],
        'roboto': ["Roboto"],
      },

    },
  },
  plugins: [],
}

