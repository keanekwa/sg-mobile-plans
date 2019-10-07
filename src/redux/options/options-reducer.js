const INITIAL_STATE = {
  options: 'null',
}

const optionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_OPTIONS':
      return {
        ...state,
        options: action.payload
      }
    default:
      return state;
  }
}

export default optionsReducer;