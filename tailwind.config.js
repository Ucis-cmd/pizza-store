/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      animation: {
        glow: "glow 1.5s infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px #ff00ff" },
          "50%": { boxShadow: "0 0 20px #ff0000" },
        },
      },
    },
    plugins: [],
  },
};
