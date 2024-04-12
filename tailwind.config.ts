import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      black: "#000",
      "dark-gray": "#1B1B1E",
      "light-gray": "#EBEBEB",
      white: "#FBFFFE",
      red: "#D81F26",
      "dark-red": "#96031A",
      "spotify-green": "#1ed760",
    },
  },
  plugins: [],
};
export default config;
