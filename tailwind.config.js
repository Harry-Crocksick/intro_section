/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
      colors: {
        "almost-white": "hsl(0, 0%, 98%)",
        "medium-gray": "hsl(0, 0%, 41%)",
        "almost-black": "hsl(0, 0%, 8%)",
      },
      screens: {
        mobile: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
