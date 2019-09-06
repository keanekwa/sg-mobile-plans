import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.background,
    padding: theme.spacing(5),
    color: theme.light.color,
    margin: theme.spacing(4),
  },
}));

function MobilePlanPaper(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      {props.telco} - {props.planName}<br/>
      Price: ${props.price % 1 === 0 ? props.price : props.price.toFixed(2)}<br/>
      Data: {props.data}{props.data === 'Unlimited' ? '' : 'GB'}<br/>
      Talktime: {props.talktime}{props.talktime === 'Unlimited' ? '' : 'min'}<br/>
      SMS: {props.sms}<br/>
      {props.caveats === undefined ? '' : ('Caveats: '+ props.caveats)}<br/>
      {props.extras === undefined ? '' : ('Extras: ' + props.extras)}
    </Paper>
  );
}

export default MobilePlanPaper;