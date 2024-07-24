/** @type {import('tailwindcss').Config} */
import scrollbarPlugin from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    scrollbarPlugin(),
    // eslint-disable-next-line no-undef
    require("tailwind-scrollbar-hide"), // Ensure you include the scrollbar-hide plugin if you want to hide the scrollbar
  ],
};
