import { combineReducers } from 'redux'

import searchReducer from './search/search-reducer'
import resultsReducer from './results/results-reducer'
import compareReducer from './compare/compare-reducer'

export default combineReducers({
  search: searchReducer,
  results: resultsReducer,
  compare: compareReducer
})
