import React from 'react';
import MobilePlanPaper from './MobilePlanPaper.js';

//if have time, try finding a way to send optionsSelected directly from SelectOptionsForSelf to ComparisonPage without having to go through App
//another thing to try is to save data in json so there will be no need to edit the code directly if mobile plans change
//try to change optionsSelected from plain array to key value pair dictionary
//change options pages into one page with dropdowns. will make it much easier to fix above problem
class ComparisonPage extends React.Component {
  render() {
    const optionsSelected = this.props.optionsSelected;
    const mobilePlans = [
      {
        telco: 'Singtel',
        planName: 'XO 48',
        data: 5,
        talktime: 100,
        sms: 100,
        price: 48,
      },
      {
        telco: 'Singtel',
        planName: 'XO 78',
        data: 30,
        talktime: 300,
        sms: 300,
        price: 78,
      },
      {
        telco: 'Singtel',
        planName: 'XO 108',
        data: 50,
        talktime: 500,
        sms: 500,
        price: 108,
      },
      {
        telco: 'Singtel',
        planName: 'Combo 1',
        data: 0.1,
        talktime: 100,
        sms: 500,
        price: 27.9,
      },
      {
        telco: 'Singtel',
        planName: 'Combo 2',
        data: 2,
        talktime: 200,
        sms: 1000,
        price: 42.9,
        extras: '2GB Singtel Wifi',
      },
      {
        telco: 'Singtel',
        planName: 'Combo 3',
        data: 3,
        talktime: 10000,
        sms: 10000,
        price: 68.9,
        extras: '2GB Singtel Wifi',
      },
      {
        telco: 'Singtel',
        planName: 'Combo 6',
        data: 6,
        talktime: 10000,
        sms: 10000,
        price: 95.9,
        extras: '2GB Singtel Wifi, 24mths HBO GO, 24mths Entertainment Plus',
      },
      {
        telco: 'Singtel',
        planName: 'Combo 12',
        data: 12,
        talktime: 10000,
        sms: 10000,
        price: 239.9,
        extras: '2GB Singtel Wifi, 24mths HBO GO, 24mths Entertainment Plus, $500 yearly handset upgrade voucher, Free Caller-ID & AutoRoam',
      },
      {
        telco: 'Circles.Life',
        planName: 'Base Plan (New Number)',
        data: 20,
        talktime: 100,
        sms: 25,
        price: 28,
        extras: 'Free Caller-ID',
      },
      {
        telco: 'Circles.Life',
        planName: 'Base Plan (Transfer Number)',
        data: 20,
        talktime: 100,
        sms: 25,
        price: 18,
        caveats: 'Price returns to $28/mo after 1 year',
        extras: 'Free Caller-ID',
      },
      {
        telco: 'Circles.Life',
        planName: '$5 Plan',
        data: 2,
        talktime: 50,
        sms: 25,
        price: 5,
        caveats: 'Phones, roaming, and unlimited data are only available with 20GB Base Plan sign-ups. No downgrade from Base Plan to $5 Plan.',
        extras: 'Free Caller-ID',
      },
      {
        telco: 'Gomo (by Singtel)',
        planName: '$5 Plan',
        data: 20,
        talktime: 200,
        sms: 200,
        price: 20,
        extras: 'Free Caller-ID',
      },
      //add Singtel SIM only plans with the addons also. add youth, silver all that also. add possible topups
    ];
    const filteredMobilePlans = mobilePlans.filter((plan) =>
      plan.data >= optionsSelected.minData &&
      plan.talktime >=  optionsSelected.minTalktime &&
      plan.sms >=  optionsSelected.minSMS &&
      plan.price <= optionsSelected.price
    );
    const sortedMobilePlans = filteredMobilePlans.sort((a,b) => (a.price < b.price) ? -1 : 1); //sort by cheap to expensive
    
    const mobilePlansMapped = sortedMobilePlans.map((mobilePlan) => <MobilePlanPaper
      telco={mobilePlan.telco}
      planName={mobilePlan.planName}
      price={mobilePlan.price}
      data={mobilePlan.data === 10000 ? 'Unlimited' : mobilePlan.data}
      talktime={mobilePlan.talktime === 10000 ? 'Unlimited' : mobilePlan.talktime}
      sms={mobilePlan.sms === 10000 ? 'Unlimited' : mobilePlan.sms}
      caveats={mobilePlan.caveats}
      extras={mobilePlan.extras}
    />);

    return (
      <div>
      {filteredMobilePlans[0] !== undefined ? mobilePlansMapped : 'Sorry but there are no suitable plans for you. Please adjust your selection criteria.'}
      </div>
    );
  }
}

export default ComparisonPage;