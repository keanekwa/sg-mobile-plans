const INITIAL_STATE = {
  isShowCompare: false,
  comparePlans: {
    planOne: {
      planType: '',
      telco: '',
      mobilePlan: {
        planName: ''
      },
      addons: []
    },
    planTwo: {
      planType: '',
      telco: '',
      mobilePlan: {
        planName: ''
      },
      addons: []
    }
  },
  planOptions: {
    planOne: [],
    planTwo: []
  },
  addonOptions: {
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
    case 'SET_ADDON_OPTIONS': {
      return {
        ...state,
        addonOptions: action.payload
      }
    }
    default:
      return state
  }
}

export default compareReducer
