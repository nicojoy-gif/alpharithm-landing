import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#001F3F", // Dark shade
        lightBlue: "#007BFF", // Light blue bottom gradient
        primaryBlue: "#007BFF", // Custom color
        lightblue:'#7191FF',
        lightgray:'#667085',
        "dark-100":'#101828',
        lightergray:'#828282',
        "lightgray-300":"#A1A1A1",
        "dark-200":"#05152C",
        "dark-300":'#03061D',
        "dark-400":'#22263F',
        lightgrey:'#E4E4E7',
        lightergrey:'#A7A7A7'

      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(90deg, #007BFF 0%, #0056b3 100%)", // Gradient background
      },
      
    },
  },
  plugins: [],
}
