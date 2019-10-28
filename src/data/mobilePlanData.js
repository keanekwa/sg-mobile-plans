const NO_CONTRACT = 'No contract';
const PLAN_12_MTH = '12 month contract';
const PLAN_24_MTH = '24 month contract';

const FREE_CALLER_ID = 'Free Caller ID';
const FREE_VOICEMAIL = 'Free voicemail';
const FREE_INCOMING_CALLS = 'Free incoming calls';
const FREE_REGISTRATION_DELIVERY = 'Free registration and delivery (for online sign-up only)';
const FREE_REGISTRATION_DELIVERY_SIM = 'Free registration, delivery and SIM card';
const FREE_REGISTRATION_SIM = 'Free registration and SIM card';
const FREE_NUMBER_PORTING = 'Free number porting';
const FREE_MALAYSIA_INDO_DATA_ROAMING = 'Free data roaming in Malaysia and Indonesia';
const FREE_WEEKEND_DATA = 'Free weekend data';

const UNLIMITED_DATA_2_DAY = 'Data marketed as unlimited, but usage in excess of 2 GB/day may be at controlled speeds';
const UNLIMITED_DATA_3_DAY = 'Data marketed as unlimited, but usage in excess of 3 GB/day may be at controlled speeds';
const UNLIMITED_DATA_45 = 'Data marketed as unlimited, but usage in excess of 45 GB/mth may be at controlled speeds';
const UNLIMITED_TALKTIME_5000 = 'Talktime marketed as unlimited, but is capped at 5,000 min';
const UNLIMITED_TALKTIME_8000 = 'Talktime marketed as unlimited, but is capped at 8,000 min';
const UNLIMITED_TALKTIME_10000 = 'Talktime marketed as unlimited, but is capped at 10,000 min';
const UNLIMITED_SMS_8000 = 'SMS marketed as unlimited, but is capped at 8,000 SMS';
const UNLIMITED_SMS_10000 = 'SMS marketed as unlimited, but is capped at 10,000 SMS';

const MANAGED_SPEEDS_1GB = 'First 1 GB at 4G speeds; managed network speeds thereafter';
const MANAGED_SPEEDS_12GB = 'First 12 GB at 4G speeds; managed network speeds thereafter';
const MANAGED_SPEEDS_15GB = 'First 15 GB at 4G speeds; managed network speeds thereafter';
const MANAGED_SPEEDS_18GB = 'First 18 GB at 4G speeds; managed network speeds thereafter';
const MANAGED_SPEEDS_26GB = 'First 26 GB at 4G speeds; managed network speeds thereafter';
const MANAGED_SPEEDS_27GB = 'First 27 GB at 4G speeds; managed network speeds thereafter';
const MANAGED_SPEEDS_30GB = 'First 30 GB at 4G speeds; managed network speeds thereafter';
const MANAGED_SPEEDS_38GB = 'First 38 GB at 4G speeds; managed network speeds thereafter';
const MANAGED_SPEEDS_80GB = 'First 80 GB at 4G speeds; managed network speeds thereafter';

const SINGTEL_2GB_SINGTEL_WIFI = '2 GB Singtel Wifi';
const SINGTEL_UNLIMITED_SINGTEL_WIFI = 'Unlimited Singtel Wifi';
const SINGTEL_12MTHS_ENTERTAINMENT_PLUS = '12 mth Entertainment Plus';
const SINGTEL_24MTHS_ENTERTAINMENT_PLUS = '24 mth Entertainment Plus';
const SINGTEL_24MTHS_HBO_GO = '24 mth HBO GO';
const SINGTEL_24MTHS_HOOQ = '24 mth HOOQ';
const SINGTEL_500_YEARLY_HANDSET_VOUCHER = '$500 yearly handset upgrade voucher';
const SINGTEL_FREE_AUTOROAM = 'Free AutoRoam';

const STARHUB_FREE_WEEKEND_DATA = 'Online exclusive: Free weekend data (10 GB/day on Sat and Sun)';
const STARHUB_FREE_INTERNATIONAL_ROAMING = 'Free International Roaming (opt-in is required)';
const STARHUB_ONLINE_120_REBATE = 'Online exclusive: $120 bill rebate';

const CIRCLES_NO_ADDONS_FOR_5_PLAN = 'Phones, roaming, and unlimited data addons are not available with this plan (only available with 20GB Base Plan)';
const CIRCLES_PRICE_RETURNS_28 = 'Price returns to $28/mth after 1 year';

const M1_FREE_M1_CALLS = 'Unlimited Free Calls to 3 M1 Numbers';
const M1_UNLIMITED_SPOTIFY = 'Unlimited Streaming of Music on Spotify';
const M1_FREE_WEEKEND_DATA = 'Free 3/6 month unlimited weekend data for new sign ups for existing/new M1 customers respectively';
const M1_FREE_CALLER_ID = 'Free 3/6 month Caller ID for new sign ups for existing/new M1 customers respectively';

const ZERO1_FREE_UMESPACE = 'Free umeSpace (64 GB Cloud Storage)'

const ZERO_MOBILE_UNLIMITED_SMS = 'SMS marketed as unlimited, but is capped by the Zero Mobile fair use policy. While the policy does not state the exact cap, we can assume the cap is 5,000 SMS/mth as the talktime is capped at 5,000 min/mth';
const ZERO_MOBILE_PRICE_RETURNS_59_95 = 'Price returns to $59.95/mth after 1 year';
const ZERO_MOBILE_PRICE_RETURNS_49_95 = 'Price returns to $49.95/mth after 1 year';

const MY_REPUBLIC_ROAM_LIKE_HOME = '2 GB Roam Like Home - Essential (2GB data for Malaysia, Indonesia, Thailand, Philippines, Taiwan, Hong Kong)';

const GIGA_ROLLOVER = 'Unused data can be rolled-over for up to 2 months';

const TPG_4G_VOLTE = 'A 4G VoLTE compatible device is required for making and receiving calls'
const TPG_PRICE_RETURN = '$0 for the first 6 months; monthly charge after 6 months to be confirmed';

const mobilePlanData = [
  {
    telco: 'Singtel',
    planName: 'XO 48',
    planType: PLAN_24_MTH,
    data: 5,
    talktime: 100,
    sms: 100,
    price: 48,
    pros: [FREE_WEEKEND_DATA, SINGTEL_24MTHS_ENTERTAINMENT_PLUS],
  },
  {
    telco: 'Singtel',
    planName: 'XO 78',
    planType: PLAN_24_MTH,
    data: 30,
    talktime: 300,
    sms: 300,
    price: 78,
    pros: [FREE_WEEKEND_DATA, SINGTEL_24MTHS_HBO_GO, SINGTEL_24MTHS_ENTERTAINMENT_PLUS, SINGTEL_24MTHS_HOOQ],
  },
  {
    telco: 'Singtel',
    planName: 'XO 108',
    planType: PLAN_24_MTH,
    data: 50,
    talktime: 500,
    sms: 500,
    price: 108,
    pros: [FREE_WEEKEND_DATA, SINGTEL_24MTHS_HBO_GO, SINGTEL_24MTHS_ENTERTAINMENT_PLUS, SINGTEL_24MTHS_HOOQ],
  },
  {
    telco: 'Singtel',
    planName: 'Combo 1',
    planType: PLAN_24_MTH,
    data: 0.1,
    talktime: 100,
    sms: 500,
    price: 27.9,
  },
  {
    telco: 'Singtel',
    planName: 'Combo 2',
    planType: PLAN_24_MTH,
    data: 2,
    talktime: 200,
    sms: 1000,
    price: 42.9,
    pros: [SINGTEL_2GB_SINGTEL_WIFI, SINGTEL_24MTHS_ENTERTAINMENT_PLUS],
  },
  {
    telco: 'Singtel',
    planName: 'Combo 3',
    planType: PLAN_24_MTH,
    data: 3,
    talktime: 10000,
    sms: 10000,
    price: 68.9,
    pros: [SINGTEL_2GB_SINGTEL_WIFI, SINGTEL_24MTHS_ENTERTAINMENT_PLUS],
    notes: [UNLIMITED_TALKTIME_10000, UNLIMITED_SMS_10000],
  },
  {
    telco: 'Singtel',
    planName: 'Combo 6',
    planType: PLAN_24_MTH,
    data: 6,
    talktime: 10000,
    sms: 10000,
    price: 95.9,
    pros: [SINGTEL_2GB_SINGTEL_WIFI, SINGTEL_24MTHS_HBO_GO, SINGTEL_24MTHS_ENTERTAINMENT_PLUS, SINGTEL_24MTHS_HOOQ],
    notes: [UNLIMITED_TALKTIME_10000, UNLIMITED_SMS_10000],
  },
  {
    telco: 'Singtel',
    planName: 'Combo 12',
    planType: PLAN_24_MTH,
    data: 12,
    talktime: 10000,
    sms: 10000,
    price: 239.9,
    pros: [SINGTEL_2GB_SINGTEL_WIFI, SINGTEL_24MTHS_HBO_GO, SINGTEL_24MTHS_ENTERTAINMENT_PLUS, SINGTEL_24MTHS_HOOQ, SINGTEL_500_YEARLY_HANDSET_VOUCHER, FREE_CALLER_ID, SINGTEL_FREE_AUTOROAM],
    notes: [UNLIMITED_TALKTIME_10000, UNLIMITED_SMS_10000],
  },
  {
    telco: 'Singtel',
    planName: 'SIM Only 3 GB Plan + Free 3 GB',
    planType: NO_CONTRACT,
    data: 6,
    talktime: 0,
    sms: 0,
    price: 20,
    pros: [FREE_INCOMING_CALLS, FREE_REGISTRATION_SIM, SINGTEL_2GB_SINGTEL_WIFI, SINGTEL_12MTHS_ENTERTAINMENT_PLUS],
  },
  {
    telco: 'Singtel',
    planName: 'SIM Only 20 GB Plan',
    planType: PLAN_12_MTH,
    data: 20,
    talktime: 150,
    sms: 500,
    price: 25.35,
    pros: [FREE_INCOMING_CALLS, FREE_REGISTRATION_SIM, SINGTEL_UNLIMITED_SINGTEL_WIFI, SINGTEL_12MTHS_ENTERTAINMENT_PLUS],
  },
  {
    telco: 'Singtel',
    planName: 'Silver Combo 1',
    planType: PLAN_24_MTH,
    data: 0.1,
    talktime: 100,
    sms: 500,
    price: 22.32,
    pros: [FREE_VOICEMAIL],
  },
  {
    telco: 'Singtel',
    planName: 'Silver Combo 2',
    planType: PLAN_24_MTH,
    data: 2,
    talktime: 200,
    sms: 1000,
    price: 34.32,
    pros: [SINGTEL_2GB_SINGTEL_WIFI, SINGTEL_24MTHS_ENTERTAINMENT_PLUS],
  },
  {
    telco: 'Singtel',
    planName: 'Silver Combo 3',
    planType: PLAN_24_MTH,
    data: 3,
    talktime: 10000,
    sms: 10000,
    price: 55.12,
    pros: [SINGTEL_2GB_SINGTEL_WIFI, SINGTEL_24MTHS_ENTERTAINMENT_PLUS],
    notes: [UNLIMITED_TALKTIME_10000, UNLIMITED_SMS_10000],
  },
  {
    telco: 'Singtel',
    planName: 'Youth Combo 1',
    planType: PLAN_24_MTH,
    data: 0.1,
    talktime: 100,
    sms: 10000,
    price: 27.9,
    pros: [SINGTEL_2GB_SINGTEL_WIFI],
    notes: [UNLIMITED_SMS_10000],
  },
  {
    telco: 'Singtel',
    planName: 'Youth Combo 2',
    planType: PLAN_24_MTH,
    data: 4,
    talktime: 10000,
    sms: 10000,
    price: 42.9,
    pros: [SINGTEL_2GB_SINGTEL_WIFI, SINGTEL_24MTHS_ENTERTAINMENT_PLUS],
    notes: [UNLIMITED_TALKTIME_10000, UNLIMITED_SMS_10000],
  },
  {
    telco: 'Singtel',
    planName: 'Youth Combo 3',
    planType: PLAN_24_MTH,
    data: 7,
    talktime: 10000,
    sms: 10000,
    price: 68.9,
    pros: [SINGTEL_2GB_SINGTEL_WIFI, SINGTEL_24MTHS_ENTERTAINMENT_PLUS],
    notes: [UNLIMITED_TALKTIME_10000, UNLIMITED_SMS_10000],
  },
  {
    telco: 'Singtel',
    planName: 'Youth Combo 6',
    planType: PLAN_24_MTH,
    data: 7,
    talktime: 10000,
    sms: 10000,
    price: 95.9,
    pros: [SINGTEL_2GB_SINGTEL_WIFI, SINGTEL_24MTHS_ENTERTAINMENT_PLUS, SINGTEL_24MTHS_HBO_GO],
    notes: [UNLIMITED_TALKTIME_10000, UNLIMITED_SMS_10000],
  },
  {
    telco: 'Circles.Life',
    planName: 'Base Plan (New number)',
    planType: NO_CONTRACT,
    data: 20,
    talktime: 100,
    sms: 25,
    price: 28,
    pros: [FREE_CALLER_ID],
  },
  {
    telco: 'Circles.Life',
    planName: 'Base Plan (Transfer number)',
    planType: NO_CONTRACT,
    data: 20,
    talktime: 100,
    sms: 25,
    price: 18,
    pros: [FREE_CALLER_ID],
    notes: [CIRCLES_PRICE_RETURNS_28],
  },
  {
    telco: 'Circles.Life',
    planName: '$5 Plan',
    planType: NO_CONTRACT,
    data: 2,
    talktime: 50,
    sms: 25,
    price: 5,
    cons: [CIRCLES_NO_ADDONS_FOR_5_PLAN],
    pros: [FREE_CALLER_ID],
  },
  {
    telco: 'Gomo',
    planName: 'Base Plan',
    planType: NO_CONTRACT,
    data: 20,
    talktime: 200,
    sms: 200,
    price: 20,  
    pros: [FREE_CALLER_ID, FREE_INCOMING_CALLS, FREE_REGISTRATION_DELIVERY_SIM],
  },
  {
    telco: 'Starhub',
    planName: '$50 2-year Plan',
    planType: PLAN_24_MTH,
    data: 15,
    talktime: 100,
    sms: 0,
    price: 50,
    pros: [FREE_CALLER_ID, STARHUB_FREE_INTERNATIONAL_ROAMING, FREE_INCOMING_CALLS, STARHUB_FREE_WEEKEND_DATA],
  },
  {
    telco: 'Starhub',
    planName: '$75 2-year Plan',
    planType: PLAN_24_MTH,
    data: 40,
    talktime: 300,
    sms: 0,
    price: 75,
    pros: [FREE_CALLER_ID, STARHUB_FREE_INTERNATIONAL_ROAMING, FREE_INCOMING_CALLS, STARHUB_FREE_WEEKEND_DATA],
  },
  {
    telco: 'Starhub',
    planName: '$105 2-year Plan',
    planType: PLAN_24_MTH,
    data: 70,
    talktime: 500,
    sms: 0,
    price: 105,
    pros: [FREE_CALLER_ID, STARHUB_FREE_INTERNATIONAL_ROAMING, FREE_INCOMING_CALLS, STARHUB_FREE_WEEKEND_DATA],
  },
  {
    telco: 'Starhub',
    planName: '$238 2-year Plan',
    planType: PLAN_24_MTH,
    data: 110,
    talktime: 10000,
    sms: 10000,
    price: 238,
    pros: [FREE_CALLER_ID, STARHUB_FREE_INTERNATIONAL_ROAMING, FREE_INCOMING_CALLS, STARHUB_FREE_WEEKEND_DATA],
  },
  {
    telco: 'Starhub',
    planName: '$25 SIM Only Plan',
    planType: NO_CONTRACT,
    data: 15,
    talktime: 100,
    sms: 0,
    price: 25,
    pros: [FREE_CALLER_ID, FREE_INCOMING_CALLS, STARHUB_FREE_INTERNATIONAL_ROAMING, STARHUB_FREE_WEEKEND_DATA, STARHUB_ONLINE_120_REBATE],
  },
  {
    telco: 'Starhub',
    planName: '$50 SIM Only Plan',
    planType: NO_CONTRACT,
    data: 40,
    talktime: 300,
    sms: 0,
    price: 50,
    pros: [FREE_CALLER_ID, FREE_INCOMING_CALLS, STARHUB_FREE_INTERNATIONAL_ROAMING, STARHUB_FREE_WEEKEND_DATA, STARHUB_ONLINE_120_REBATE],
  },
  {
    telco: 'Starhub',
    planName: '$80 SIM Only Plan',
    planType: NO_CONTRACT,
    data: 70,
    talktime: 500,
    sms: 0,
    price: 80,
    pros: [FREE_CALLER_ID, FREE_INCOMING_CALLS, STARHUB_FREE_INTERNATIONAL_ROAMING, STARHUB_FREE_WEEKEND_DATA, STARHUB_ONLINE_120_REBATE],
  },
  {
    telco: 'M1',
    planName: 'SIM Only Plan',
    planType: NO_CONTRACT,
    data: 30,
    talktime: 1000,
    sms: 1000,
    price: 25,
    pros: [FREE_INCOMING_CALLS, FREE_VOICEMAIL, M1_FREE_M1_CALLS, M1_UNLIMITED_SPOTIFY, M1_FREE_WEEKEND_DATA, M1_FREE_CALLER_ID, FREE_REGISTRATION_DELIVERY],
  },
  {
    telco: 'M1',
    planName: 'Plan with Device',
    planType: PLAN_24_MTH,
    data: 12,
    talktime: 100,
    sms: 100,
    price: 30,
    pros: [FREE_INCOMING_CALLS, FREE_VOICEMAIL, M1_FREE_M1_CALLS, M1_UNLIMITED_SPOTIFY, M1_FREE_WEEKEND_DATA, M1_FREE_CALLER_ID, FREE_REGISTRATION_DELIVERY],
  },
  {
    telco: 'Zero1',
    planName: '1 GB to Unlimited Data',
    planType: NO_CONTRACT,
    data: 1,
    talktime: 200,
    sms: 200,
    price: 13.90,
    pros: [FREE_CALLER_ID, FREE_INCOMING_CALLS],
    notes: [MANAGED_SPEEDS_1GB],
  },
  {
    telco: 'Zero1',
    planName: '3 GB to Unlimited Data Bonus 12',
    planType: NO_CONTRACT,
    data: 15,
    talktime: 200,
    sms: 200,
    price: 29.99,
    pros: [FREE_CALLER_ID, FREE_INCOMING_CALLS, ZERO1_FREE_UMESPACE, FREE_REGISTRATION_DELIVERY_SIM],
    notes: [MANAGED_SPEEDS_15GB],
  },
  {
    telco: 'Zero1',
    planName: '9 GB to Unlimited Data Bonus 18',
    planType: NO_CONTRACT,
    data: 27,
    talktime: 450,
    sms: 450,
    price: 39.90,
    pros: [FREE_CALLER_ID, FREE_INCOMING_CALLS, ZERO1_FREE_UMESPACE, FREE_REGISTRATION_DELIVERY_SIM],
    notes: [MANAGED_SPEEDS_27GB],
  },
  {
    telco: 'Zero Mobile',
    planName: 'Zero X (New number)',
    planType: NO_CONTRACT,
    data: 45,
    talktime: 5000,
    sms: 5000,
    price: 59.95,
    pros: [FREE_CALLER_ID, FREE_REGISTRATION_SIM],
    notes: [UNLIMITED_DATA_45, UNLIMITED_TALKTIME_5000, ZERO_MOBILE_UNLIMITED_SMS],
  },
  {
    telco: 'Zero Mobile',
    planName: 'Zero X (Transfer number)',
    planType: NO_CONTRACT,
    data: 45,
    talktime: 5000,
    sms: 5000,
    price: 49.95,
    pros: [FREE_CALLER_ID, FREE_REGISTRATION_SIM, FREE_NUMBER_PORTING],
    notes: [ZERO_MOBILE_PRICE_RETURNS_59_95, UNLIMITED_DATA_45, UNLIMITED_TALKTIME_5000, ZERO_MOBILE_UNLIMITED_SMS],
  },
  {
    telco: 'Zero Mobile',
    planName: 'Zero Xs (New number)',
    planType: NO_CONTRACT,
    data: 45,
    talktime: 100,
    sms: 100,
    price: 49.95,
    pros: [FREE_CALLER_ID, FREE_REGISTRATION_SIM, FREE_NUMBER_PORTING],
    cons: [UNLIMITED_DATA_45],
  },
  {
    telco: 'Zero Mobile',
    planName: 'Zero Xs (Transfer number)',
    planType: NO_CONTRACT,
    data: 45,
    talktime: 100,
    sms: 100,
    price: 39.95,
    pros: [FREE_CALLER_ID, FREE_REGISTRATION_SIM, FREE_NUMBER_PORTING],
    notes: [ZERO_MOBILE_PRICE_RETURNS_49_95, UNLIMITED_DATA_45, UNLIMITED_TALKTIME_5000, ZERO_MOBILE_UNLIMITED_SMS],
  },
  {
    telco: 'MyRepublic',
    planName: 'Unlimited',
    planType: NO_CONTRACT,
    data: 90,
    talktime: 8000,
    sms: 8000,
    price: 48,
    pros: [FREE_CALLER_ID, FREE_INCOMING_CALLS],
    notes: [UNLIMITED_DATA_3_DAY, UNLIMITED_TALKTIME_8000, UNLIMITED_SMS_8000],
  },
  {
    telco: 'MyRepublic',
    planName: 'Unlimited (for existing broadband customers only)',
    planType: NO_CONTRACT,
    data: 90,
    talktime: 8000,
    sms: 8000,
    price: 38,
    pros: [FREE_CALLER_ID, FREE_INCOMING_CALLS],
    notes: [UNLIMITED_DATA_3_DAY, UNLIMITED_TALKTIME_8000, UNLIMITED_SMS_8000],
  },
  {
    telco: 'MyRepublic',
    planName: 'Uno 18',
    planType: NO_CONTRACT,
    data: 1,
    talktime: 1000,
    sms: 1000,
    price: 18,
    pros: [FREE_CALLER_ID, FREE_INCOMING_CALLS],
    notes: [MANAGED_SPEEDS_1GB],
  },
  {
    telco: 'MyRepublic',
    planName: 'Smart 35',
    planType: NO_CONTRACT,
    data: 12,
    talktime: 1000,
    sms: 1000,
    price: 35,
    pros: [FREE_CALLER_ID, FREE_INCOMING_CALLS],
    notes: [MANAGED_SPEEDS_12GB],
  },
  {
    telco: 'MyRepublic',
    planName: 'Smart 35 (for existing broadband customers only)',
    planType: NO_CONTRACT,
    data: 15,
    talktime: 1000,
    sms: 1000,
    price: 35,
    pros: [FREE_CALLER_ID, FREE_INCOMING_CALLS],
    notes: [MANAGED_SPEEDS_15GB],
  },
  {
    telco: 'MyRepublic',
    planName: 'Ultimate 80',
    planType: NO_CONTRACT,
    data: 80,
    talktime: 1000,
    sms: 1000,
    price: 80,
    pros: [FREE_CALLER_ID, FREE_INCOMING_CALLS],
    notes: [MANAGED_SPEEDS_80GB],
  },
  {
    telco: 'MyRepublic',
    planName: 'Mega 55',
    planType: NO_CONTRACT,
    data: 18,
    talktime: 1000,
    sms: 1000,
    price: 55,
    pros: [FREE_CALLER_ID, FREE_INCOMING_CALLS],
    notes: [MANAGED_SPEEDS_18GB],
  },
  {
    telco: 'MyRepublic',
    planName: 'Mega 55 (for existing broadband customers only)',
    planType: NO_CONTRACT,
    data: 26,
    talktime: 1000,
    sms: 1000,
    price: 55,
    pros: [FREE_CALLER_ID, FREE_INCOMING_CALLS],
    notes: [MANAGED_SPEEDS_26GB],
  },
  {
    telco: 'MyRepublic',
    planName: 'Xtra 85',
    planType: NO_CONTRACT,
    data: 30,
    talktime: 1000,
    sms: 1000,
    price: 85,
    pros: [FREE_CALLER_ID, FREE_INCOMING_CALLS, MY_REPUBLIC_ROAM_LIKE_HOME],
    notes: [MANAGED_SPEEDS_30GB],
  },
  {
    telco: 'MyRepublic',
    planName: 'Xtra 85 (for existing broadband customers only)',
    planType: NO_CONTRACT,
    data: 38,
    talktime: 1000,
    sms: 1000,
    price: 85,
    pros: [FREE_CALLER_ID, FREE_INCOMING_CALLS, MY_REPUBLIC_ROAM_LIKE_HOME],
    notes: [MANAGED_SPEEDS_38GB],
  },
  {
    telco: 'Giga!',
    planName: 'Base Plan',
    planType: NO_CONTRACT,
    data: 25,
    talktime: 1000,
    sms: 1000,
    price: 25,
    pros: [FREE_CALLER_ID, FREE_INCOMING_CALLS, GIGA_ROLLOVER],
  },
  {
    telco: 'TPG',
    planName: 'SIM Only Mobile Plan',
    planType: NO_CONTRACT,
    data: 60,
    talktime: 20,
    sms: 20,
    price: 0,
    pros: [FREE_INCOMING_CALLS, FREE_MALAYSIA_INDO_DATA_ROAMING],
    notes: [UNLIMITED_DATA_2_DAY, TPG_4G_VOLTE, TPG_PRICE_RETURN],
  },
];

export default mobilePlanData;