const INITIAL_STATE = {
  options: {
    minData: 0,
    minTalktime: 0,
    minSMS: 0,
    price: 0,
    planTypes: [
      {
        value: 'No contract',
        isChecked: true
      },
      {
        value: '12 month contract',
        isChecked: true
      },
      {
        value: '24 month contract',
        isChecked: true
      }
    ],
    telcos: [
      {
        value: 'Singtel',
        isChecked: true
      },
      {
        value: 'Starhub',
        isChecked: true
      },
      {
        value: 'M1',
        isChecked: true
      },
      {
        value: 'Circles.Life',
        isChecked: true
      },
      {
        value: 'Gomo',
        isChecked: true
      },
      {
        value: 'Giga!',
        isChecked: true
      },
      {
        value: 'MyRepublic',
        isChecked: true
      },
      {
        value: 'TPG',
        isChecked: true
      }
    ]
  },
  isShowSearch: false
}

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_OPTIONS':
      return {
        ...state,
        options: action.payload
      }
    case 'SET_IS_SHOW_SEARCH':
      return {
        ...state,
        isShowSearch: action.payload
      }
    default:
      return state
  }
}

export default searchReducer
