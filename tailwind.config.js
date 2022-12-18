/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "nc-",
  important: true,
  content: ["./popup.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        1000: "1000",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
