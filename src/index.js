import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import OptionsPage from './components/OptionsPage';
import ResultsPage from './components/ResultsPage';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
  typography: {
    fontFamily: 'Noto Sans, Helvetica, Arial, sans-serif',
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
    MuiInputBase: {
      root: {
        fontSize: '0.9rem',
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: '0.9rem',
      },
    },
    MuiTypography: {
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 700,
      },
      h4: {
        fontWeight: 700,
      },
      h5: {
        fontWeight: 700,
      },
      h6: {
        fontWeight: 700,
      },
    }
  },
});

function AppRouter() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route path="/" exact component={OptionsPage} />
        <Route path="/result-list" exact component={ResultsPage} />
      </Router>
    </MuiThemeProvider>
    // create SelectFamilyOptions later, now it is directly linked to SelectSelfOptions
  );
}

ReactDOM.render(<AppRouter />, document.getElementById("root"));