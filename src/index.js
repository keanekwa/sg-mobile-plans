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
    App: {
      root: {
        backgroundColor: '#000',
      },
    },
    MuiButton: {
      root: {
        marginBottom: '1rem',
        borderRadius: 'false',
      },
      sizeLarge: {
        padding: '14px 24px',
      },
    },
    MuiInput: {
      root: {
        color: blueGrey[50],
        margin: '0 1rem 0 1rem',
      },
      underline: {
        borderBottom: '1px solid ' + blueGrey[500],
      },
    },
    MuiCollapse: {
      container:{
        border: '1px solid ' + blueGrey[50],
        margin: '1.25rem 0 0 0',
      },
      wrapper: {
        padding: '1.5rem 1.75rem',
        textAlign: 'left',
        color: blueGrey[50],
        backgroundColor: 'none',
      }
    },
  },
});

function AppRouter() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
          <Route path="/" exact component={App} />
          <Route path="/self/" exact component={SelectSelfOptions} />
          <Route path="/family/" exact component={SelectFamilyOptions} />
      </Router>
    </MuiThemeProvider>
    // need to fix the routing and mode functions to ensure the app still works if /self or /family is directly accessed
  );
}

ReactDOM.render(<AppRouter />, document.getElementById("root"));