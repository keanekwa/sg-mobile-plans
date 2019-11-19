const INITIAL_STATE = {
  isShowCompare: false,
  comparePlans: {
    planOne: {
      planType: '',
      telco: '',
      planName: ''
    },
    planTwo: {
      planType: '',
      telco: '',
      planName: ''
    }
  },
  planOptions: {
    planOne: [],
    planTwo: []
  }
}

const compareReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_IS_SHOW_COMPARE':
      return {
        ...state,
        isShowCompare: action.payload
      }
    case 'SET_COMPARE_PLANS': {
      return {
        ...state,
        comparePlans: action.payload
      }
    }
    case 'SET_PLAN_OPTIONS': {
      return {
        ...state,
        planOptions: action.payload
      }
    }
    default:
      return state
  }
}

export default compareReducer
