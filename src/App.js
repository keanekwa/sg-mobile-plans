import React from 'react'
//import components
import { Box } from '@material-ui/core'
import HomePage from './components/HomePage/HomePage'
import SearchPage from './components/SearchPage/SearchPage'
import ResultsPage from './components/SearchPage/ResultsPage/ResultsPage'
import ComparePage from './components/ComparePage/ComparePage'

const App = props => {
  return (
    <Box>
      <HomePage />
      <SearchPage />
      <ResultsPage />
      <ComparePage />
    </Box>
  )
}

export default App
