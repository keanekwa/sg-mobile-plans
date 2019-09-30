import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import App from './App'
import SelectSelfOptions from './components/SelectSelfOptions';
import SelectFamilyOptions from './components/SelectFamilyOptions';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors/';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: blueGrey[50],
    },
    background: {
      default: blueGrey[900],
    },
  },
  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '0',
        marginBottom: '1rem',
      },
      sizeLarge: {
        padding: '14px 24px',
      },
    },
  },
  table: {
    root: {
      padding: '0 0.75rem',
      borderRight: '3px solid #d5d5d5',
      borderLeft: '3px solid #d5d5d5',
      width: '65px',
      verticalAlign: 'middle',
    },
  },
});

function AppRouter() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
          <Route path="/" exact component={SelectSelfOptions} />
          <Route path="/self/" exact component={SelectSelfOptions} />
          <Route path="/family/" exact component={SelectFamilyOptions} />
      </Router>
    </MuiThemeProvider>
    // create SelectFamilyOptions later, now it is directly linked to SelectSelfOptions
  );
}

ReactDOM.render(<AppRouter />, document.getElementById("root"));