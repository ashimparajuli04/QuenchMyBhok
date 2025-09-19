import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkish: "#FE7272",
        darkPurple: "#412234",
        yellowish:"#EAFFD0",
      },
      fontFamily: {
        jolly: ['JollyLodger', 'sans-serif'],
        bagel: ['BagelFatOne','sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
