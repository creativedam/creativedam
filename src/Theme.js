import { createMuiTheme } from "@material-ui/core/styles";
import { amber } from "@material-ui/core/colors";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      lg: 1205,
    },
  },
  palette: {
    primary: {
      light: "#a4d0d6",
      main: "#2b9aae",
      dark: "#015f70",
      contrastText: "#fff",
    },
    secondary: {
      light: amber[300],
      main: amber[500],
      dark: amber[700],
      contrastText: "#191b5d",
    },
    info: {
      light: "#4a428b",
      main: "#191b5d",
      dark: "#000033",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Lato, sans-serif"],
    h1: {
      color: "#ffffff",
      fontSize: "64px",
      lineHeight: "1.6",
    },
    h2: {
      fontWeight: 600,
      fontFamily: ["Quicksand, san-sariff"],
      fontSize: "1.75rem",
      lineHeight: "1.75rem",
      marginBottom: "3.125rem",
      marginLeft: "0.9375rem",
    },
    h3: {
      fontWeight: 600,
      fontFamily: ["Quicksand, san-sariff"],
      fontSize: "1.375rem",
      lineHeight: "1.375rem",
      marginBottom: "1.25rem",
      paddingTop:"20px",
      color: "#191b5d",
    },
    h7: {
      fontWeight: 600,
      fontFamily: ["Quicksand, san-sariff"],
      fontSize: "1.575rem",
      lineHeight: "1.375rem",
      marginBottom: "1.25rem",
      paddingTop:"20px",
      color: "#191b5d",
    },
    subtitle1: {
      textAlign: "center",
      color: "#ffcc00",
      fontSize: "1.575rem",
      marginBottom: "30px",
    },
    body1: {
      fontSize: "1.255rem",
      color: "#000000",
    },
    body2: {
      fontSize: "1.255rem",
      color: "#ffffff",
    },
    textPrimary: {
      color: "#191b5d",
    },
    textSecondary: {
      color: "#ffffff",
    },
  },
});

export default theme;
