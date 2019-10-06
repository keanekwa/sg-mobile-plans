const INITIAL_STATE = {
  optionsSelected: null,
}

const optionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_OPTIONS_SELECTED':
      return {
        ...state,
        optionsSelected: action.payload
      }

    default:
      return state;
  }
}

export default optionsReducer;