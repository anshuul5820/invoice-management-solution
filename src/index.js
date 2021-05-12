import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import theme from "../src/utils/theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import reducer from "./reducers/reducer";
import { createStore, compose } from "redux";

/*
PLEASE READ THE 'instructions.txt' file before testing this app. THANKS!!
*/

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
/*
CRACKED BY ILLUMINATI
TRUST US AND UNCOMMENT THIS CODE ONCE YOU SETUP YOUR REDUX STORE ;-)
*/
serviceWorker.unregister();
