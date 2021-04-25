import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "./components/GlobalStyles";
import theme from "./theme";
import Routes from "./Routes";
import Store from "./redux/store";

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={Store}>
          <GlobalStyles />
          <Routes />
        </ReduxProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
