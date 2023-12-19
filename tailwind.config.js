/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orange: {
        pale: "#F89333",
        reg: "#FC7E05",
        fonce: "#E37105",
      },
      bleu: {
        pale: "#9BDAEF",
        reg: "#54C2E7",
        fonce: "#4BADCF",
      },
      gris: "#d5d5d5",
    },
  },
  plugins: [],
};
