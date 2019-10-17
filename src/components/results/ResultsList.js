import React from 'react';
//import data
import mobilePlanData from '../../data/mobilePlanData';
import addonsData from '../../data/addonsData';
//import styles
import { withStyles } from '@material-ui/styles';
import { indigo } from '@material-ui/core/colors/';
//import components
import { Box, AppBar, Toolbar, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Result from './Result';
//import redux
import { connect } from 'react-redux';
import { setIsShowResults } from '../../redux/results/results-actions'

const styles = theme => ({
  ResultsList: {
    height: '100%',
    overflowY: 'scroll',
    borderRight: '1px solid ' + indigo[100],
  },
  AppBar: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    color: 'white',
  },
});

const ResultsList = props => {
  const { classes } = props;
  const options = props.options;
  const filteredMobilePlans = mobilePlanData.filter((mobilePlan) =>
    mobilePlan.data >= options.minData &&
    mobilePlan.talktime >=  options.minTalktime &&
    mobilePlan.sms >=  options.minSMS &&
    mobilePlan.price <= options.price
  );

  //see if addding addons can make plans that meet requirements
  const unfilteredMobilePlans = mobilePlanData.filter((mobilePlan) =>
    mobilePlan.data < options.minData ||
    mobilePlan.talktime < options.minTalktime ||
    mobilePlan.sms < options.minSMS ||
    mobilePlan.price > options.price
  );

  for (const mobilePlan of unfilteredMobilePlans) { //go through all the plans that fail the criteria
    const addonsForPlan = addonsData.filter(addon => addon.appliesToTelco === mobilePlan.telco && (addon.appliesToPlans === 'All' || addon.appliesToPlans.includes(mobilePlan.planName))); //find suitable addons, i.e. those that apply to entire telco or those that only apply to the mobile plan
    for (let x = 0; x < addonsForPlan.length; x++) { //double for loop to permutate addons
      const newPlan = {
        ...mobilePlan,
        basePlan: {
          data: mobilePlan.data,
          talktime: mobilePlan.talktime,
          sms: mobilePlan.sms,
          price: mobilePlan.price,
        },
        addons: [],
      };
      for (let y = x; y < addonsForPlan.length; y++) {
        const addon = addonsForPlan[y];
        if (addon.multiplier === true) {  //do this for multiplier addons, e.g. Singtel Data X 2
          newPlan.data *= addon.data;
          newPlan.talktime *= addon.talktime;
          newPlan.sms *= addon.sms;
          newPlan.price += addon.price;
          newPlan.addons.push({...addon, addonMultiple: 1});
        }
        else {  //do this for non-multiplier addons, e.g. Singtel DataMore
          const addonMultipleForData = Math.ceil((options.minData - newPlan.data) / addon.data);  //check how many data addons are required
          const addonMultipleForTalktime = Math.ceil((options.minTalktime - newPlan.talktime) / addon.talktime) //check how many talktime addons are required
          const addonMultipleForSMS = Math.ceil((options.minSMS - newPlan.sms) / addon.sms) //check how many sms addons are required
          const addonMultiple = Math.max(addonMultipleForData, addonMultipleForTalktime, addonMultipleForSMS);
          if (addon.keepAdding !== true && addonMultiple > 1) { continue; } //cannot add single-add addons multiple times
          else if (addonMultiple <= 0) { continue; } //cannot have negative addons
          newPlan.data += addonMultiple * addon.data;
          newPlan.talktime += addonMultiple * addon.talktime;
          newPlan.sms += addonMultiple * addon.sms;
          newPlan.price += addonMultiple * addon.price;
          newPlan.addons.push({...addon, addonMultiple: addonMultiple});
        }
        if (newPlan.data >= options.minData && newPlan.talktime >= options.minTalktime && newPlan.sms >= options.minSMS && newPlan.price <= options.price) { // if so far, newPlan is suitable then push newPlan to filteredMobilePlans, then break the y for loop. Otherwise, continue looping and adding more addons to newPlan
          const addonPros = newPlan.addons.reduce((allAddonPros, addonPros) => allAddonPros.push(addonPros)).pros;
          const addonCons = newPlan.addons.reduce((allAddonCons, addonCons) => allAddonCons.push(addonCons)).cons;
          if (addonPros !== undefined && newPlan.pros !== undefined) { 
            newPlan.pros.push(addonPros);
          }
          else if (addonPros !== undefined) {
            newPlan.pros = addonPros;
          }
          if (addonCons !== undefined && newPlan.cons !== undefined) { 
            newPlan.cons.push(addonCons);
          }
          else if (addonCons !== undefined) {
            newPlan.cons = addonCons;
          }
          filteredMobilePlans.push({
            telco: newPlan.telco,
            planName: newPlan.planName,
            addons: newPlan.addons,
            price: newPlan.price,
            data: newPlan.data,
            talktime: newPlan.talktime,
            sms: newPlan.sms,
            pros: newPlan.pros,
            cons: newPlan.cons,
          });
          break;
        }
      }
    }
  }

  const sortedMobilePlans = filteredMobilePlans.sort((a,b) => (a.price < b.price) ? -1 : 1); //sort by cheap to expensive
  let mobilePlansMapped = sortedMobilePlans.map((mobilePlan) => <Result key={mobilePlan.telco + ' ' + mobilePlan.planName} mobilePlan={mobilePlan}/>);

  return (
    <Box className={classes.ResultsList}>
      <AppBar className={classes.AppBar} position='static'>
        <Toolbar>
          <IconButton color='inherit' onClick={() => props.setIsShowResults(false)}>
            <ArrowBackIcon/>
          </IconButton>
          <Box>Suitable Plans</Box>
        </Toolbar>
      </AppBar>
      {filteredMobilePlans[0] !== undefined ? mobilePlansMapped : 'Sorry but there are no suitable plans for you. Please adjust your selection criteria.'}
    </Box>
  );
}

const mapStateToProps = state => ({
  options: state.options.options,
});

const mapDispatchToProps = dispatch => ({
  setIsShowResults: isShowResults=> dispatch(setIsShowResults(isShowResults)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ResultsList));