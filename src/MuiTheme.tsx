import { createMuiTheme } from "@material-ui/core/styles";
import { LIGHT_GREY } from "./utils/constants";
// import purple from "@material-ui/core/colors/purple";
// import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 16,
    fontFamily: "Verdana",
    h3: {
      fontSize: "1.5rem",
      fontWeight: "bold"
    },
  },
  palette: {
    // Example to set primary and secondary theme color once decided
    primary:{
      main:  "#233768"
    },
    // secondary: green,
    background: {
      default: LIGHT_GREY
    }
  }
});

export default theme;
