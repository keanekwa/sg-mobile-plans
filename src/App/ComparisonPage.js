import React from 'react';
import MobilePlanPaper from './MobilePlanPaper.js';

//if have time, try finding a way to send optionsSelected directly from SelectOptionsForSelf to ComparisonPage without having to go through App
//another thing to try is to save data in json so there will be no need to edit the code directly if mobile plans change
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
    ];
    const sortedMobilePlans = mobilePlans.sort((a,b) => (a.price < b.price) ? -1 : 1); //sort by cheap to expensive
    
    const mobilePlansMapped = sortedMobilePlans.map((mobilePlan) => <MobilePlanPaper
      telco={mobilePlan.telco}
      planName={mobilePlan.planName}
      price={mobilePlan.price}
      data={mobilePlan.data}
      talktime={mobilePlan.talktime}
      sms={mobilePlan.sms}
    />);

    return (
      <div>
      {mobilePlansMapped}
      </div>
    );
  }
}

export default ComparisonPage;