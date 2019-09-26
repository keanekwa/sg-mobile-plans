import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {blueGrey} from '@material-ui/core/colors/';
import './index.scss';
import App from './App.js'
import { BrowserRouter as Router , Route } from 'react-router-dom';
import SelectOptionsForSelf from './components/SelectOptionsForSelf/SelectOptionsForSelf';
import SelectOptionsForFamily from './components/SelectOptionsForFamily/SelectOptionsForFamily';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[50],
    },
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  overrides: {
    MuiButton: {
      root: {
        marginBottom: '1rem',
        borderRadius: 'false',
      },
      sizeLarge: {
        padding: '14px 24px',
      }
    },
  },
});

function AppRouter() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
          <Route path="/" exact component={App} />
          <Route path="/self/" component={SelectOptionsForSelf} />
          <Route path="/family/" component={SelectOptionsForFamily} />
      </Router>
    </MuiThemeProvider>
    // need to fix the routing and mode functions to ensure the app still works if /self or /family is directly accessed
  );
}

ReactDOM.render(<AppRouter />, document.getElementById("root"));