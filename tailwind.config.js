module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "0 15px",
      screens: {
        mobile: "600px",
        tablet: "900px",
        desktop: "1240px",
      },
    },
    extend: {},
  },
  plugins: [],
};
