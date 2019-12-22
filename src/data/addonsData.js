const FREE_INCOMING_CALLS = 'Free incoming calls'
const UNLIMITED_DATA_50 = 'Data addon is marketed as unlimited, but usage in excess of the extra 50 GB/mth may be at controlled speeds'
const UNLIMITED_DATA_80 = 'Data addon is marketed as unlimited, but usage in excess of the extra 80 GB/mth may be at controlled speeds'
const UNLIMITED_TALKTIME = 'Talktime addon is marketed as unlimited, but is capped at 10,000 min'

const SINGTEL_SIGNUP_FEE = 'One-time sign up fee of $10.70'

const CIRCLES_UNLIMITED_TALKTIME = 'Talktime addon is marketed as unlimited, but is capped by the Circles.life Fair Usage Policy. While the policy does not state the exact cap, most other telcos set the cap at 10,000 min of talktime'

const addonsData = [
  {
    appliesToTelco: 'Giga!',
    appliesToPlans: 'All',
    addonName: '1 GB',
    data: 1,
    talktime: 0,
    sms: 0,
    price: 2,
    keepAdding: true
  },
  {
    appliesToTelco: 'Circles.Life',
    appliesToPlans: ['Base Plan (New number)', 'Base Plan (Transfer number)'],
    addonName: 'Unlimited Data',
    data: 80,
    talktime: 0,
    sms: 0,
    price: 20,
    notes: [UNLIMITED_DATA_80]
  },
  {
    appliesToTelco: 'Circles.Life',
    appliesToPlans: ['Base Plan (New number)', 'Base Plan (Transfer number)'],
    addonName: 'Unlimited Incoming Calls',
    data: 0,
    talktime: 0,
    sms: 0,
    price: 2,
    pros: [FREE_INCOMING_CALLS]
  },
  {
    appliesToTelco: 'Circles.Life',
    appliesToPlans: ['Base Plan (New number)', 'Base Plan (Transfer number)'],
    addonName: 'Unlimited Outgoing Calls',
    data: 0,
    talktime: 10000,
    sms: 0,
    price: 8,
    notes: [CIRCLES_UNLIMITED_TALKTIME]
  },
  {
    appliesToTelco: 'Circles.Life',
    appliesToPlans: ['Base Plan (New number)', 'Base Plan (Transfer number)'],
    addonName: '$6 for 1 GB',
    data: 1,
    talktime: 0,
    sms: 0,
    price: 6,
    keepAdding: true
  },
  {
    appliesToTelco: 'Circles.Life',
    appliesToPlans: ['Base Plan (New number)', 'Base Plan (Transfer number)'],
    addonName: '$10 for 2 GB',
    data: 2,
    talktime: 0,
    sms: 0,
    price: 10,
    keepAdding: true
  },
  {
    appliesToTelco: 'Circles.Life',
    appliesToPlans: ['Base Plan (New number)', 'Base Plan (Transfer number)'],
    addonName: '$4 for 100 min',
    data: 0,
    talktime: 100,
    sms: 0,
    price: 4,
    keepAdding: true
  },
  {
    appliesToTelco: 'Circles.Life',
    appliesToPlans: ['Base Plan (New number)', 'Base Plan (Transfer number)'],
    addonName: '$1 for 25 SMS',
    data: 0,
    talktime: 0,
    sms: 25,
    price: 1,
    keepAdding: true
  },
  {
    appliesToTelco: 'Circles.Life',
    appliesToPlans: ['$5 Plan'],
    addonName: '$8 for 1 GB',
    data: 1,
    talktime: 0,
    sms: 0,
    price: 8,
    keepAdding: true
  },
  {
    appliesToTelco: 'Circles.Life',
    appliesToPlans: ['$5 Plan'],
    addonName: '$12 for 2 GB',
    data: 2,
    talktime: 0,
    sms: 0,
    price: 12,
    keepAdding: true
  },
  {
    appliesToTelco: 'Circles.Life',
    appliesToPlans: ['$5 Plan'],
    addonName: '$5 for 30 min talktime',
    data: 0,
    talktime: 30,
    sms: 0,
    price: 5,
    keepAdding: true
  },
  {
    appliesToTelco: 'Circles.Life',
    appliesToPlans: ['$5 Plan'],
    addonName: '$10 for 200 min talktime + Free incoming cals',
    data: 0,
    talktime: 30,
    sms: 0,
    price: 10,
    pros: [FREE_INCOMING_CALLS],
    keepAdding: true
  },
  {
    appliesToTelco: 'Singtel',
    appliesToPlans: ['Combo 2', 'Combo 3', 'Combo 6', 'Combo 12'],
    addonName: 'Data X 2',
    multiplier: true,
    mutuallyExclusive: true,
    data: 2,
    talktime: 1,
    sms: 1,
    price: 5.9,
    cons: [SINGTEL_SIGNUP_FEE]
  },
  {
    appliesToTelco: 'Singtel',
    appliesToPlans: ['Combo 2', 'Combo 3', 'Combo 6', 'Combo 12'],
    addonName: 'Data X 3',
    multiplier: true,
    mutuallyExclusive: true,
    data: 3,
    talktime: 1,
    sms: 1,
    price: 9.9,
    cons: [SINGTEL_SIGNUP_FEE]
  },
  {
    appliesToTelco: 'Singtel',
    appliesToPlans: ['Combo 2', 'Combo 3', 'Combo 6', 'Combo 12'],
    addonName: 'Data X 4',
    multiplier: true,
    mutuallyExclusive: true,
    data: 4,
    talktime: 1,
    sms: 1,
    price: 19.9,
    cons: [SINGTEL_SIGNUP_FEE]
  },
  {
    appliesToTelco: 'Singtel',
    appliesToPlans: ['Combo 3', 'Combo 6', 'Combo 12'],
    addonName: 'Data X INFINITY',
    mutuallyExclusive: true,
    data: 10000,
    talktime: 0,
    sms: 0,
    price: 39.9,
    cons: [SINGTEL_SIGNUP_FEE],
    notes: [UNLIMITED_DATA_50]
  },
  {
    appliesToTelco: 'Singtel',
    appliesToPlans: ['SIM Only 20 GB Plan', 'SIM Only 40 GB Plan', 'SIM Only 70 GB Plan'],
    addonName: '1 GB Data',
    keepAdding: true,
    data: 1,
    talktime: 0,
    sms: 0,
    price: 5.35
  },
  {
    appliesToTelco: 'Singtel',
    appliesToPlans: ['SIM Only 20 GB Plan', 'SIM Only 40 GB Plan', 'SIM Only 70 GB Plan'],
    addonName: '200 min Talktime',
    keepAdding: true,
    data: 0,
    talktime: 200,
    sms: 0,
    price: 5.35
  },
  {
    appliesToTelco: 'Singtel',
    appliesToPlans: ['SIM Only 20 GB Plan', 'SIM Only 40 GB Plan', 'SIM Only 70 GB Plan'],
    addonName: '800 min Talktime',
    keepAdding: true,
    data: 0,
    talktime: 800,
    sms: 0,
    price: 10.7
  },
  {
    appliesToTelco: 'Singtel',
    appliesToPlans: ['SIM Only 20 GB Plan', 'SIM Only 40 GB Plan', 'SIM Only 70 GB Plan'],
    addonName: 'Unlimited Talktime',
    keepAdding: true,
    data: 0,
    talktime: 10000,
    sms: 0,
    price: 16.05
  },
  {
    appliesToTelco: 'Singtel',
    appliesToPlans: ['SIM Only 20 GB Plan', 'SIM Only 40 GB Plan', 'SIM Only 70 GB Plan'],
    addonName: '1200 SMS',
    keepAdding: true,
    data: 0,
    talktime: 0,
    sms: 1200,
    price: 5.35
  },
  {
    appliesToTelco: 'Starhub',
    appliesToPlans: 'All',
    addonName: '10 GB',
    data: 10,
    talktime: 0,
    sms: 0,
    price: 10
  },
  {
    appliesToTelco: 'Starhub',
    appliesToPlans: 'All',
    addonName: '50 GB',
    data: 50,
    talktime: 0,
    sms: 0,
    price: 20
  },
  {
    appliesToTelco: 'M1',
    appliesToPlans: 'All',
    addonName: '$10 Bundle Pack',
    mutuallyExclusive: true,
    data: 10,
    talktime: 100,
    sms: 0,
    price: 10
  },
  {
    appliesToTelco: 'M1',
    appliesToPlans: 'All',
    addonName: '$20 Bundle Pack',
    mutuallyExclusive: true,
    data: 50,
    talktime: 100,
    sms: 0,
    price: 20
  },
  {
    appliesToTelco: 'M1',
    appliesToPlans: 'All',
    addonName: '$50 Bundle Pack',
    mutuallyExclusive: true,
    data: 150,
    talktime: 10000,
    sms: 0,
    price: 50
  },
  {
    appliesToTelco: 'M1',
    appliesToPlans: 'All',
    addonName: '200 min at $2.50',
    mutuallyExclusive: true,
    data: 0,
    talktime: 200,
    sms: 0,
    price: 2.5
  },
  {
    appliesToTelco: 'M1',
    appliesToPlans: 'All',
    addonName: '800 min at $5',
    mutuallyExclusive: true,
    data: 0,
    talktime: 800,
    sms: 0,
    price: 5
  },
  {
    appliesToTelco: 'M1',
    appliesToPlans: 'All',
    addonName: 'Unlimited min at $7.50',
    mutuallyExclusive: true,
    data: 0,
    talktime: 10000,
    sms: 0,
    price: 7.5,
    notes: [UNLIMITED_TALKTIME]
  },
  {
    appliesToTelco: 'MyRepublic',
    appliesToPlans: 'All',
    addonName: '1 GB Data',
    mutuallyExclusive: true,
    data: 1,
    talktime: 0,
    sms: 0,
    price: 5
  },
  {
    appliesToTelco: 'MyRepublic',
    appliesToPlans: 'All',
    addonName: '3 GB Data',
    mutuallyExclusive: true,
    data: 3,
    talktime: 0,
    sms: 0,
    price: 12
  },
  {
    appliesToTelco: 'MyRepublic',
    appliesToPlans: 'All',
    addonName: '8 GB Data',
    mutuallyExclusive: true,
    data: 8,
    talktime: 0,
    sms: 0,
    price: 30
  }
]

export default addonsData
