/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        taskPrimary: "#6366f1",
        taskWhite: "#ffffff",
      },
    },
  },
  plugins: [],
};
