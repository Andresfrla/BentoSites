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
  },
  daisyui: {
    themes: [
      {
        mytheme: {
      "primary": "#6699CC",   
      "secondary": "#95B8D1",  
      "accent": "#E8DDB5",  
      "neutral": "#EDAFB8",
      "base-100": "#333333",
      "info": "#BFCBC3",
      "success": "#33CA7F",        
      "warning": "#FFF275",        
      "error": "#FF3C38",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
export default config;
