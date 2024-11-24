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
        background: "#15202B",
        card: "#1A2734",
        hover: "#23303C",
        secondary: "#8897A5",
        primary: "#FDFDFD",
        accent: "#1EA1F1"
      },
      fontSize: {
        "h1-bold": ["40px", { lineHeight: "120%", fontWeight: "700"}],
        "h1": ["40px", { lineHeight: "120%", fontWeight: "500"}],
        "h2-bold": ["32px", { lineHeight: "130%",fontWeight: "700"}],
        "h2": ["32px", { lineHeight: "130%", fontWeight: "400"}],
        "h3-bold": ["24px", { lineHeight: "140%", fontWeight: "700"}],
        "h3": ["24px", { lineHeight: "140%", fontWeight: "500"}],
        "p-bold": ["16px", { lineHeight: "150%", fontWeight: "700"}],
        "p": ["16px", { lineHeight: "150%", fontWeight: "300"}],
        "s": ["12px", { lineHeight: "170%", fontWeight: "300"}],
      }
    },
  },
  plugins: [],
} satisfies Config;
