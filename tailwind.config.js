module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_600: "#757575",
        blue_gray_200: "#b5bbc5",
        blue_gray_100_4c: "#cccccc4c",
        blue_800: "#1061d6",
        teal_900: "#00204e",
        blue_gray_900: "#323232",
        blue_800_33: "#1061d633",
        white_A700: "#ffffff",
        blue_gray_100_19: "#d3d3d319",
        gray_100: "#f5f5f5",
        blue_800_0c: "#1061d60c",
      },
      fontFamily: { nunitosans: "Nunito Sans", publicsans: "Public Sans" },
      boxShadow: { bs: "0px 4px  53px 0px #cccccc4c" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
