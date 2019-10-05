import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import App from './App'
import SelectSelfOptions from './components/SelectSelfOptions';
import SelectFamilyOptions from './components/SelectFamilyOptions';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
  typography: {
    fontFamily: 'Noto Sans, Helvetica, Arial, sans-serif',
    fontSize: '1rem',
  },
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        borderWidth: '2px',
        '&:hover, &:focus': {
          borderWidth: '2px',
        }
      },
      sizeLarge: {
        padding: '14px 24px',
      },
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