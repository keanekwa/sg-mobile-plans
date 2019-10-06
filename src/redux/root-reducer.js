import { combineReducers } from 'redux';

import optionsReducer from './options.reducer'

export default combineReducers({
  optionsSelected: optionsReducer,
})