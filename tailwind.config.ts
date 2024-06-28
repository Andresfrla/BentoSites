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
      colors: {
        black: "#000000", // Texto en negro
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#7B61FF",  // Púrpura vibrante
          "secondary": "#FF7E6B",  // Coral suave
          "accent": "#6BCB77",  // Verde esmeralda
          "neutral": "#282C34",  // Gris carbón
          "base-100": "#F9FAFB",  // Blanco ahumado
          "info": "#3ABFF8",  // Azul cielo
          "success": "#3FB56B",  // Verde bosque
          "warning": "#FFA41B",  // Naranja dorado
          "error": "#FF4A4A",  // Rojo sandía
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
export default config;

