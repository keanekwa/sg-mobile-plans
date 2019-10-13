import React from 'react';
//import components
import { Box, Button, Typography } from '@material-ui/core';
//import styles
import { withStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors/';
//import redux
import { connect } from 'react-redux';
import { setResultSelected, setIsShowMobileResultDetails } from '../../redux/results/results-actions';

const styles = theme => ({
  Result: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid ' + indigo[100],
    textTransform: 'none',
    borderRadius: '0',
    padding: '1rem 1.5rem',
  },
  ResultLeft: {
    maxWidth: '70%',
    textAlign: 'left',
  },
  ResultRight: {
    color: indigo[800],
  },
});

const Result = props => {
  const { classes } = props;

  return (
    <Button className={classes.Result} fullWidth={true} onClick={() => {props.setResultSelected(props.mobilePlan); props.setIsShowMobileResultDetails(true);}}>
      <Box className={classes.ResultLeft}>
        <Typography variant='h6'>{props.mobilePlan.telco} {props.mobilePlan.planName}</Typography>
        {
          (props.mobilePlan.addons !== undefined && props.mobilePlan.addons !== []) && 
          <Box>
            Combine with addons: {props.mobilePlan.addons.map((addon) => <Box>{addon}</Box>)}
          </Box>
        }
        <Box>{props.mobilePlan.data} GB | {props.mobilePlan.talktime} min | {props.mobilePlan.sms} SMS</Box>
      </Box>
      <Box className={classes.ResultRight}>${props.mobilePlan.price.toFixed(2)}</Box>
    </Button>
  );
}

const mapDispatchToProps = dispatch => ({
  setResultSelected: resultSelected => dispatch(setResultSelected(resultSelected)),
  setIsShowMobileResultDetails: isShowMobileResultDetails =>  dispatch(setIsShowMobileResultDetails(isShowMobileResultDetails)),
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(Result));