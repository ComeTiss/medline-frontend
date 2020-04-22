import { createMuiTheme } from "@material-ui/core/styles";
import { LIGHT_GREY } from "./utils/constants";
import "typeface-roboto";
// import purple from "@material-ui/core/colors/purple";
// import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    // Example to set primary and secondary theme color once decided
    // primary: purple,
    // secondary: green,
    background: {
      default: LIGHT_GREY
    }
  }
});

export default theme;
