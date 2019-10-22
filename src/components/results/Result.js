import React from 'react';
import clsx from 'clsx';
//import components
import { Box, Button, Typography } from '@material-ui/core';
//import styles
import { withStyles } from '@material-ui/core/styles';
//import redux
import { connect } from 'react-redux';
import { setResultSelected, setIsShowMobileResultDetails } from '../../redux/results/results-actions';

const styles = theme => ({
  Result: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid ' + theme.palette.secondary.light,
    textTransform: 'none',
    borderRadius: '0',
    padding: '1rem 1.5rem',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      borderBottom: '1px solid ' + theme.palette.primary.main,
    },
  },    
  ResultSelected: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    borderBottom: '1px solid ' + theme.palette.primary.dark,
  },
  ResultLeft: {
    maxWidth: '70%',
    textAlign: 'left',
  },
});

const Result = props => {
  const { classes } = props;
  return (
    <Button className={clsx(classes.Result, props.resultSelected === props.mobilePlan && classes.ResultSelected)} fullWidth={true} onClick={() => {props.setResultSelected(props.mobilePlan); props.setIsShowMobileResultDetails(true);}}>
      <Box className={classes.ResultLeft}>
        <Typography variant='h6'>{props.mobilePlan.telco} {props.mobilePlan.planName}</Typography>
        {
          (props.mobilePlan.addons !== undefined && props.mobilePlan.addons !== []) && 
          <Box>
            Combine with addons: {props.mobilePlan.addons.map((addon) => <Box key={addon.addonName}>{addon.addonMultiple} x {addon.addonName} Addon</Box>)}
          </Box>
        }
        <Box>{props.mobilePlan.data} GB | {props.mobilePlan.talktime} min | {props.mobilePlan.sms} SMS</Box>
      </Box>
      <Box>${props.mobilePlan.price.toFixed(2)}</Box>
    </Button>
  );
}

const mapStateToProps = state => ({
  resultSelected: state.results.resultSelected,
});

const mapDispatchToProps = dispatch => ({
  setResultSelected: resultSelected => dispatch(setResultSelected(resultSelected)),
  setIsShowMobileResultDetails: isShowMobileResultDetails =>  dispatch(setIsShowMobileResultDetails(isShowMobileResultDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Result));