import React from 'react'
//import components
import { Box } from '@material-ui/core'
import HomePage from './components/HomePage/HomePage'
import SearchPage from './components/SearchPage/SearchPage'
import ResultsPage from './components/SearchPage/ResultsPage/ResultsPage'

const App = props => {
  return (
    <Box>
      <HomePage />
      <SearchPage />
      <ResultsPage />
    </Box>
  )
}

export default App
