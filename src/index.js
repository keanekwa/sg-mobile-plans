import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {blueGrey} from '@material-ui/core/colors/';
import './index.scss';
import App from './App.js'
import { BrowserRouter as Router , Route } from 'react-router-dom';
import SelectSelfOptions from './components/SelectSelfOptions';
import SelectFamilyOptions from './components/SelectFamilyOptions';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[50],
    },
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