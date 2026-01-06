import { createTheme } from "@mui/material/styles";

const darkBlue = "#091E3E";
const lightBlue = "#06A3DA";
const paragraphColor = "#6B6A75";
const white = "#FFFFFF";

const theme = createTheme({
  palette: {
    primary: {
      main: darkBlue,
    },
    text: {
      primary: lightBlue,
      secondary: darkBlue,
    },
    custom: {
      white,
      paragraph: paragraphColor,
    },
  },
  typography: {
    // fontFamily: "Nunito, sans-serif",
    // fontFamily: "Space Grotesk, sans-serif",
    fontFamily: "Outfit, sans-serif",
    // fontFamily: "Chivo, sans-serif",
    // fontFamilySecondary: "Rubik, sans-serif", 
    fontFamilySecondary: "Inter, sans-serif",
  },
});

export default theme;
