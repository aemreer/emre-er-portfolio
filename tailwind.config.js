/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#070807",
        panel: "#121413",
        mist: "#A7A29A",
        sky: "#D7B56D",
        violet: "#B8754A",
      },
      boxShadow: {
        glow: "0 0 46px rgba(215, 181, 109, 0.16)",
        card: "0 24px 80px rgba(0, 0, 0, 0.28)",
      },
      backgroundImage: {
        "soft-radial":
          "radial-gradient(circle at 18% 16%, rgba(215,181,109,0.12), transparent 30%), radial-gradient(circle at 82% 4%, rgba(184,117,74,0.11), transparent 34%)",
      },
    },
  },
  plugins: [],
};
