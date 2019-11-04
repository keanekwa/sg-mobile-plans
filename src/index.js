import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
//import components
import App from './App'
//import styles
import { CssBaseline } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blueGrey } from '@material-ui/core/colors'
//import redux
import { Provider } from 'react-redux'
import store from './redux/store'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    secondary: {
      light: blueGrey[100],
      main: blueGrey[500],
      dark: blueGrey[700]
    }
  },
  typography: {
    fontFamily: 'Noto Sans, Helvetica, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontFamily: 'Noto Serif'
    },
    h2: {
      fontWeight: 700,
      fontFamily: 'Noto Serif'
    },
    h3: {
      fontWeight: 700
    },
    h4: {
      fontWeight: 700
    },
    h5: {
      fontWeight: 700
    },
    h6: {
      fontWeight: 700
    }
  },
  overrides: {
    MuiInputBase: {
      root: {
        fontSize: '0.9rem'
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: '0.9rem'
      }
    }
  }
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
