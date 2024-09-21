/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      cream: '#EFEAEB'
    },
    extend: {
      fontFamily: {
        heading: "var(--font-bebas-neue)",
      },
      dropShadow: {
        sharp: '4px 4px 0px #C3D7D8',
        top: '0 -25px 25px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
}
