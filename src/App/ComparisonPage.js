import React from 'react';
import mobilePlanData from './mobilePlanData.js'
import MobilePlanPaper from './MobilePlanPaper.js';

//if have time, try finding a way to send optionsSelected directly from SelectOptionsForSelf to ComparisonPage without having to go through App
//another thing to try is to save data in json so there will be no need to edit the code directly if mobile plans change
//try to change optionsSelected from plain array to key value pair dictionary
//change options pages into one page with dropdowns. will make it much easier to fix above problem
class ComparisonPage extends React.Component {
  render() {
    const optionsSelected = this.props.optionsSelected;
    const filteredMobilePlans = mobilePlanData.filter((plan) =>
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