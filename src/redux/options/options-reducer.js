const INITIAL_STATE = {
  options: {
    minData: 0,
    minTalktime: 0,
    minSMS: 0,
    price: 0,
    planTypes: [
      {
        planType: 'No contract',
        isChecked: true,
      },
      {
        planType: '12 month contract',
        isChecked: true,
      },
      {
        planType: '24 month contract',
        isChecked: true,
      },
    ],
    telcos: [
      {
        telco: 'Singtel',
        isChecked: true,
      },
      {
        telco: 'Starhub',
        isChecked: true,
      },
      {
        telco: 'M1',
        isChecked: true,
      },
      {
        telco: 'Circles.Life',
        isChecked: true,
      },
      {
        telco: 'Gomo',
        isChecked: true,
      },
      {
        telco: 'Giga!',
        isChecked: true,
      },
      {
        telco: 'MyRepublic',
        isChecked: true,
      },
      {
        telco: 'TPG',
        isChecked: true,
      },
    ],
    //todo: add preferredTelcos
  }
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