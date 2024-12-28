import type { Config } from "tailwindcss";
import tailwindForms from "@tailwindcss/forms";
import tailwindTypography from "@tailwindcss/typography";
import tailwindAnimate from "tailwindcss-animate";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6d28d9",
          light: "#8b5cf6",
          dark: "#5b21b6",
        },
        secondary: {
          DEFAULT: "#f9f9f9",
          dark: "#e5e5e5",
        },
        destructive: "#dc2626",
        muted: "#6b7280",
        text: {
          light: "#111827",
          dark: "#f3f4f6",
        },
        background: {
          DEFAULT: "#f3f4f6",
          dark: "#1a202c",
        },
        foreground: {
          DEFAULT: "#111827",
          dark: "#f3f4f6",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "1rem",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0, 0, 0, 0.05)",
        strong: "0 4px 20px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeOut: "fadeOut 0.3s ease-in-out",
      },
    },
  },
  plugins: [tailwindForms, tailwindTypography, tailwindAnimate],
} satisfies Config;
