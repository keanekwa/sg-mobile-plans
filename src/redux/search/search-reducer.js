const INITIAL_STATE = {
  options: {
    minData: '',
    minTalktime: '',
    minSMS: '',
    price: '',
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
    ],
    specialOptions: [
      {
        value: 'Students & NSFs',
        isChecked: false
      },
      {
        value: '60 years and above',
        isChecked: false
      },
      {
        value: 'Existing MyRepublic broadband customers',
        isChecked: false
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
