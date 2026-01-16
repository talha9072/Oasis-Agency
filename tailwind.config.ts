import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.{css}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      borderRadius: {
        "2xl": "1.25rem"
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,.55)"
      }
    }
  },
  plugins: []
};

export default config;
