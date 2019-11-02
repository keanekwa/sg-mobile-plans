import React from 'react'
//import components
import { Box } from '@material-ui/core'
import SearchPage from './components/SearchPage/SearchPage'
import ResultsPage from './components/SearchPage/ResultsPage/ResultsPage'

const App = props => {
  return (
    <Box>
      <SearchPage />
      <ResultsPage />
    </Box>
  )
}

export default App
