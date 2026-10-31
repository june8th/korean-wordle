import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        correct: "#538d4e", // Green
        present: "#b59f3b", // Yellow
        absent: "#3a3a3c",  // Dark Gray (dark mode)
        "absent-light": "#787c7e", // Gray (light mode)
      },
      keyframes: {
        pop: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "40%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)" },
        },
        flip: {
          "0%": { transform: "rotateX(0deg)" },
          "50%": { transform: "rotateX(90deg)" },
          "100%": { transform: "rotateX(0deg)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%, 60%": { transform: "translateX(-6px)" },
          "40%, 80%": { transform: "translateX(6px)" },
        },
        bounce: {
          "0%, 20%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-14px)" },
          "50%": { transform: "translateY(0)" },
          "60%": { transform: "translateY(-7px)" },
          "80%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        pop: "pop 0.15s ease-in-out",
        flip: "flip 0.6s ease-in-out forwards",
        shake: "shake 0.5s ease-in-out",
        bounce: "bounce 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
