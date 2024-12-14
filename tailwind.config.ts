import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '16px',
      },
      borderWidth: {
        'custom': '4px',   // Example custom width
      },
      colors: {
        background: "#15202B",
        card: "#1A2734",
        hover: "#23303C",
        secondary: "#8897A5",
        primary: "#FDFDFD",
        accent: "#1EA1F1",
        turquoise: "#74A49C",
      },
      fontSize: {
        "caption-s": ["44px", { lineHeight: "120%", fontWeight: "700"}],
        "h1-bold": ["40px", { lineHeight: "120%", fontWeight: "700"}],
        "h1": ["40px", { lineHeight: "120%", fontWeight: "500"}],
        "h2-bold": ["32px", { lineHeight: "130%",fontWeight: "700"}],
        "h2": ["32px", { lineHeight: "130%", fontWeight: "300"}],
        "h3-bold": ["24px", { lineHeight: "140%", fontWeight: "600"}],
        "h3": ["24px", { lineHeight: "140%", fontWeight: "300"}],
        "p-bold": ["16px", { lineHeight: "150%", fontWeight: "700"}],
        "p": ["16px", { lineHeight: "150%", fontWeight: "300"}],
        "s-bold": ["12px", { lineHeight: "170%", fontWeight: "600"}],
        "s": ["12px", { lineHeight: "170%", fontWeight: "300"}],
      },
      utilities: {
        '.overflow-fix': {
          '-webkit-mask-image': '-webkit-radial-gradient(white, black)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
} satisfies Config;
