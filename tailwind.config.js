import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "vite-dark": {
          extend: "dark",
          colors: {
            background: {
              DEFAULT: "#202127",
              primary: "#202127",
              secondary: "#1B1B1F",
            },
            text: {
              DEFAULT: "#FFFFFF",
              primary: "#FFFFFF",
              secondary: "rgba(255, 255, 255, 0.5)",
            },
            foreground: {
              50: "rgba(255, 255, 255, 0.5)",
              DEFAULT: "#FFFFFF",
            },
            primary: {
              DEFAULT: "#646CFF",
            },
          },
        },
      },
    }),
  ],
};
