const INITIAL_STATE = {
  isShowResults: false,
  resultSelected: null,
}

const resultsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_IS_SHOW_RESULTS':
        console.log('yreeeee');
      return {
        ...state,
        isShowResults: action.payload
      };
    case 'SET_RESULT_SELECTED':
      console.log('dsfsd');
      return {
        ...state,
        resultSelected: action.payload
      };
    default:
      return state;
  }
}

export default resultsReducer;