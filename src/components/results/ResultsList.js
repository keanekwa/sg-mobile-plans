import React from 'react';
//import data
import mobilePlanData from '../../data/mobilePlanData';
import addonsData from '../../data/addonsData';
//import styles
import { withStyles } from '@material-ui/styles';
import { indigo } from '@material-ui/core/colors/';
//import components
import { Box } from '@material-ui/core';
import Result from './Result';

const styles = theme => ({
  ResultsList: {
    height: '100%',
    overflowY: 'scroll',
    borderRight: '1px solid ' + indigo[100],
  }
});

const ResultsList = props => {
  const { classes } = props;
  const optionsSelected = props.optionsSelected;
  const filteredMobilePlans = mobilePlanData.filter((mobilePlan) =>
    mobilePlan.data >= optionsSelected.minData &&
    mobilePlan.talktime >=  optionsSelected.minTalktime &&
    mobilePlan.sms >=  optionsSelected.minSMS &&
    mobilePlan.price <= optionsSelected.price
  );

  //see if addding addons can make plans that meet requirements
  const unfilteredMobilePlans = mobilePlanData.filter((mobilePlan) =>
    mobilePlan.data < optionsSelected.minData ||
    mobilePlan.talktime < optionsSelected.minTalktime ||
    mobilePlan.sms < optionsSelected.minSMS ||
    mobilePlan.price > optionsSelected.price
  );
  for (const mobilePlan of unfilteredMobilePlans) { //go through all the plans that fail the criteria
    const addonsForTelco = addonsData.filter(addon => addon.appliesToTelco === mobilePlan.telco); //find addons for the telco
    for (const addon of addonsForTelco) {
      if (addon.appliesToPlans === 'All' || addon.appliesToPlans.includes(mobilePlan.planName)) { //ensure addon is suitable for plan
        const newPlan = {addonMultiple: 0};
        if (addon.multiplier === true) {  //do this for multiplier addons, e.g. Singtel Data X 2
          newPlan.data = mobilePlan.data * addon.data;
          newPlan.talktime = mobilePlan.talktime * addon.talktime;
          newPlan.sms = mobilePlan.sms * addon.sms;
          newPlan.price = mobilePlan.price + addon.price;
          newPlan.addonMultiple = 1;
        }
        else {  //do this for non-multiplier addons, e.g. Singtel DataMore
          const addonMultipleForData = Math.ceil((optionsSelected.minData - mobilePlan.data) / addon.data);  //check how many data addons are required
          const addonMultipleForTalktime = Math.ceil((optionsSelected.minTalktime - mobilePlan.talktime) / addon.talktime) //check how many talktime addons are required
          const addonMultipleForSMS = Math.ceil((optionsSelected.minSMS - mobilePlan.sms) / addon.sms) //check how many sms addons are required
          newPlan.addonMultiple = Math.max(addonMultipleForData, addonMultipleForTalktime, addonMultipleForSMS);
          if (addon.keepAdding !== true && newPlan.addonMultiple > 1) { continue; } //cannot add single-add addons multiple times
          else if (newPlan.addonMultiple <= 0) { continue;} //cannot have negative addons
          newPlan.data = mobilePlan.data + (newPlan.addonMultiple * addon.data);
          newPlan.talktime = mobilePlan.talktime + (newPlan.addonMultiple * addon.talktime);
          newPlan.sms = mobilePlan.sms + (newPlan.addonMultiple * addon.sms);
          newPlan.price = mobilePlan.price + (newPlan.addonMultiple * addon.price);
        }
        if (newPlan.data >= optionsSelected.minData &&
          newPlan.talktime >= optionsSelected.minTalktime &&
          newPlan.sms >= optionsSelected.minSMS &&
          newPlan.price <= optionsSelected.price) { //if there is a suitable addon, add a new plan suggestion accordingly
          if (mobilePlan.pros !== undefined && addon.pros !== undefined) {
            newPlan.pros = mobilePlan.pros.concat(addon.pros);
          }
          else if (mobilePlan.pros !== undefined) {
            newPlan.pros = mobilePlan.pros;
          }
          else if (addon.pros !== undefined) {
            newPlan.pros = addon.pros;
          }
          if (mobilePlan.cons !== undefined && addon.cons !== undefined) {
            newPlan.cons = mobilePlan.cons.concat(addon.cons);
          }
          else if (mobilePlan.cons !== undefined) {
            newPlan.cons = mobilePlan.cons;
          }
          else if (addon.cons !== undefined) {
            newPlan.cons = addon.cons;
          }
          filteredMobilePlans.push({
            telco: mobilePlan.telco,
            planName: mobilePlan.planName + ' + ' + newPlan.addonMultiple + ' x ' + addon.addonName + ' addon',
            price: newPlan.price,
            data: newPlan.data >= 10000 ? 'Unlimited' : newPlan.data,
            talktime: newPlan.talktime >= 10000 ? 'Unlimited' : newPlan.talktime,
            sms: newPlan.sms >= 10000 ? 'Unlimited' : newPlan.sms,
            pros: newPlan.pros,
            cons: newPlan.cons,
          });
        }
      }
    }
  }

  const sortedMobilePlans = filteredMobilePlans.sort((a,b) => (a.price < b.price) ? -1 : 1); //sort by cheap to expensive
  let mobilePlansMapped = sortedMobilePlans.map((mobilePlan) => <Result key={mobilePlan.planName} mobilePlan={mobilePlan}/>);

  return (
    <Box className={classes.ResultsList}>
      {filteredMobilePlans[0] !== undefined ? mobilePlansMapped : 'Sorry but there are no suitable plans for you. Please adjust your selection criteria.'}
    </Box>
  );
}

export default withStyles(styles)(ResultsList);