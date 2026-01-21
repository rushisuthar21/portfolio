import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "serif"],
        sarala: ["Sarala", "serif"],
        caveat: ["Caveat", "serif"],
        fuzzy: ["Fuzzy Bubbles", "serif"],
        delius: ["Delius", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
