import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
        title: ["var(--font-alegreya)", "serif"],
        subtitle: ["var(--font-poppins)", "sans-serif"],
        heading: ["var(--font-jost)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          DEFAULT: "#6096BD",
          light: "#A8C5DB",
          dark: "#133F7A",
        },
        accent: {
          DEFAULT: "#F0513E",
          dark: "#C04132",
        },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
