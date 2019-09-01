import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App.js";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  background: 'white',
  padding: '30px',
  margin: '10px',
  color: '#333',
});

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById("root"));