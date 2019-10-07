import { combineReducers } from 'redux';

import optionsReducer from './options/options-reducer'
import resultsReducer from './results/results-reducer';

export default combineReducers({
  options: optionsReducer,
  results: resultsReducer,
})