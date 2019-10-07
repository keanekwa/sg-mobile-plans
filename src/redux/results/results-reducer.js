const INITIAL_STATE = {
  isShowResults: false,
}

const resultsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_IS_SHOW_RESULTS':
      return {
        ...state,
        isShowResults: action.payload
      }
    default:
      return state;
  }
}

export default resultsReducer;