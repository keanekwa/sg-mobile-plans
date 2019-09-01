import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.background,
    padding: theme.padding,
    color: theme.color,
    margin: theme.margin,
  },
}));

function MobilePlanPaper(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      {props.telco} - {props.planName}<br/>
      Price: ${props.price}<br/>
      Data: {props.data}GB<br/>
      Talktime: {props.talktime}min<br/>
      SMS: {props.sms}
    </Paper>
  );
}

export default MobilePlanPaper;