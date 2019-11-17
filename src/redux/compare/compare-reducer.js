const INITIAL_STATE = {
  isShowCompare: false,
  planOne: {
    planType: null,
    telco: null,
    planName: null
  }
}

const compareReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_IS_SHOW_COMPARE':
      return {
        ...state,
        isShowCompare: action.payload
      }
    default:
      return state
  }
}

export default compareReducer
