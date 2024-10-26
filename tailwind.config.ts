import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightBeige: "#f5f5dc",
        navy: "#001f3f",
        opaqueBlue: "rgba(0, 31, 63, 0.7)",
      },
    },
  },
  plugins: [],
};
export default config;
