import { createMuiTheme } from "@material-ui/core/styles";
import { LIGHT_GREY } from "./utils/constants";

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 16,
    fontFamily: "Verdana",
    body1: {
      lineHeight:"2.5rem;",
      fontSize: "1.5rem"
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "bold"
    },
  },
  palette: {
    primary:{
      main:  "#233768"
    },
    secondary:{
      main:  "#5b5b5b"
    },
    background: {
      default: LIGHT_GREY
    }
  }
});

theme.typography.h3 = {
  fontSize: "1rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
  },
};
theme.typography.body1 = {
  fontSize: "1rem",
  lineHeight:"1.8rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
    lineHeight:"2.5rem"
  },
};
export default theme;
