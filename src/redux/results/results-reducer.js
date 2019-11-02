const INITIAL_STATE = {
  isShowResults: false,
  resultSelected: null,
  isShowMobileResultDetails: false
}

const resultsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_IS_SHOW_RESULTS':
      return {
        ...state,
        isShowResults: action.payload,
        resultSelected: null
      }
    case 'SET_RESULT_SELECTED':
      return {
        ...state,
        resultSelected: action.payload
      }
    case 'SET_IS_SHOW_MOBILE_RESULT_DETAILS':
      return {
        ...state,
        isShowMobileResultDetails: action.payload
      }
    default:
      return state
  }
}

export default resultsReducer
