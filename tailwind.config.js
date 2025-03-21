/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#0f172a",
          secondary: "#4f46e5",
          accent: "#f97316"
        },
      },
    },
    plugins: [],
  }
  