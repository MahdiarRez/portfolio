import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm2: "500px",
      },
      colors: {
        Pink: "#CEB7FF",
        Purple: "#B377FF",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
} satisfies Config;
