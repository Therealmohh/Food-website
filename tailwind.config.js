/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#49557e",
        "secondary-color": "#49557e",
        "tertiary-color": "#fff4f2",
        "button-color": "#747474",
        "text-color": "#262626",
        "text-color2": "#808080",
      },

      screens: {
        sm: "100px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xl2: "1536px",
      },
    },
  },
  plugins: [],
};
