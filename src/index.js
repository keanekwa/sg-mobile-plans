import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App.js";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  spacing: factor => `${0.25 * factor}rem`,
  light: {
    background: 'white',
    color: '#333',
  },
  dark: {
    background: '#333',
    color: 'white',
  },
  clearfix: {
    overflow: 'auto',
  },
});

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById("root"));