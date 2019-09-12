import React from 'react';
import mobilePlanData from './mobilePlanData.js'
import addonsData from './addonsData.js'
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

    //see if addding addons can make plans that meet requirements
    const unfilteredMobilePlans = mobilePlanData.filter((plan) =>
      plan.data < optionsSelected.minData ||
      plan.talktime < optionsSelected.minTalktime ||
      plan.sms < optionsSelected.minSMS ||
      plan.price > optionsSelected.price
    );
    let addonMultiple = 0;
    for (let mobilePlan of unfilteredMobilePlans) { //go through all the plans that fail the criteria
      for (let addon of addonsData) {
        if (mobilePlan.planName === addon.appliesToPlan || mobilePlan.telco === addon.appliesToTelco) {  //see what are the available addons
          if (mobilePlan.data < optionsSelected.minData) {
            addonMultiple = Math.ceil((optionsSelected.minData - mobilePlan.data) / addon.data);  //check how many data addons are required
            if (addon.keepAdding === false && addonMultiple > 1) { 
              continue;
            }
          }
          if (mobilePlan.talktime < optionsSelected.minTalktime) {
            addonMultiple = Math.ceil((optionsSelected.minTalktime - mobilePlan.talktime) / addon.talktime);  //check how many talktime addons are required
            if (addon.keepAdding === false && addonMultiple > 1) { 
              continue;
            }
          }
          if (mobilePlan.sms < optionsSelected.minSMS) {
            addonMultiple = Math.ceil((optionsSelected.minSMS - mobilePlan.sms) / addon.sms);  //check how many SMS addons are required
            if (addon.keepAdding === false && addonMultiple > 1) { 
              continue;
            }
          }
          if (addonMultiple > 0) { //if there is a suitable addon
            mobilePlan.data += addon.data * addonMultiple;
            mobilePlan.talktime += addon.talktime * addonMultiple;
            mobilePlan.sms += addon.sms * addonMultiple;
            mobilePlan.price += addon.price * addonMultiple;
            if (mobilePlan.pros !== undefined && addon.pros !== undefined) {
              mobilePlan.pros = mobilePlan.pros.concat(addon.pros);
            }
            else if (addon.pros !== undefined) {
              mobilePlan.pros = addon.pros;
            }
            mobilePlan.pros = (mobilePlan.pros === undefined) ? addon.pros : mobilePlan.pros.concat(addon.pros);
            mobilePlan.cons = (mobilePlan.cons === undefined) ? addon.cons : mobilePlan.cons.concat(addon.cons);
            filteredMobilePlans.push({
              telco: mobilePlan.telco,
              planName: mobilePlan.planName + ' + ' + addonMultiple + ' x ' + addon.addonName + ' addon',
              price: mobilePlan.price,
              data: mobilePlan.data >= 10000 ? 'Unlimited' : mobilePlan.data,
              talktime: mobilePlan.talktime >= 10000 ? 'Unlimited' : mobilePlan.talktime,
              sms: mobilePlan.sms >= 10000 ? 'Unlimited' : mobilePlan.sms,
              pros: mobilePlan.pros,
              cons: mobilePlan.cons,
            });
          }
        }
      }
    }

    const sortedMobilePlans = filteredMobilePlans.sort((a,b) => (a.price < b.price) ? -1 : 1); //sort by cheap to expensive
    let mobilePlansMapped = sortedMobilePlans.map((mobilePlan) => <MobilePlanPaper
      telco={mobilePlan.telco}
      planName={mobilePlan.planName}
      price={mobilePlan.price}
      data={mobilePlan.data >= 10000 ? 'Unlimited' : mobilePlan.data}
      talktime={mobilePlan.talktime >= 10000 ? 'Unlimited' : mobilePlan.talktime}
      sms={mobilePlan.sms >= 10000 ? 'Unlimited' : mobilePlan.sms}
      pros={mobilePlan.pros}
      cons={mobilePlan.cons}
    />);

    return (
      <div>
      {filteredMobilePlans[0] !== undefined ? mobilePlansMapped : 'Sorry but there are no suitable plans for you. Please adjust your selection criteria.'}
      </div>
    );
  }
}

export default ComparisonPage;