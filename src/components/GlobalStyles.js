import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
      html: {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        height: "100%",
        width: "100%",
      },
      body: {
        backgroundColor: "#f4f6f8",
        height: "100%",
        width: "100%",
      },
      a: {
        textDecoration: "none",
      },
      code: {
        fontFamily:
          "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace",
      },
      "#root": {
        height: "100%",
        width: "100%",
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
