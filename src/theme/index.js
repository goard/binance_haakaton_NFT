import { createMuiTheme, colors } from "@material-ui/core";
import shadows from "./shadows";
import typography from "./typography";

const theme = createMuiTheme({
  palette: {
    background: {
      dark: "#F4F6F8",
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: colors.indigo[500],
    },
    secondary: {
      main: colors.indigo[500],
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
      price: colors.yellow[900],
    },
    blue: {
      main: colors.blue[900],
    },
    indigo: {
      main: colors.indigo[900],
    },
  },
  shadows,
  typography,
});

export default theme;
