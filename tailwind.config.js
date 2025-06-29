/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        unbounded: ["var(--font-unbounded)"],
      },
    },
  },
  plugins: [],
};
