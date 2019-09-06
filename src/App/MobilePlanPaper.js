import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.background,
    padding: theme.spacing(5),
    color: theme.light.color,
    margin: theme.spacing(4),
    textAlign: 'left',
  },
  clearfix: {
    overflow: theme.clearfix.overflow,
    margin: '0 0 ' + theme.spacing(4) + ' 0',
  },
  floatLeft: {
    float: 'left',
  },
  floatRight: {
    float: 'right',
  },
  table: {
    borderCollapse: 'collapse',
    margin: '0 0 ' + theme.spacing(4) + ' 0 ',
  },
  tdth: {
    border: '1px solid #333',
    padding: theme.spacing(3),
  },
  ul: {
    margin: 0,
  },
}));

function MobilePlanPaper(props) {
  const classes = useStyles();
  let pros, cons = undefined;
  if (props.pros === undefined) {
    pros = '';
  }
  else {
    pros = props.pros.map(pro => <li>{pro}</li>);
  }
  if (props.cons === undefined) {
    cons = '';
  }
  else {
    cons = props.cons.map(con => <li>{con}</li>);
  }

  return (
    <Paper className={classes.root}>
      <h3 className={classes.clearfix}><span className={classes.floatLeft}>{props.telco} - {props.planName}</span><span className={classes.floatRight}>${props.price % 1 === 0 ? props.price : props.price.toFixed(2)}</span></h3>
      <table className={classes.table}>
        <tr>
          <th className={classes.tdth}>Data</th>
          <th className={classes.tdth}>Talktime</th>
          <th className={classes.tdth}>SMS</th>
        </tr>
        <tr>
          <td className={classes.tdth}>{props.data}{props.data === 'Unlimited' ? '' : 'GB'}</td>
          <td className={classes.tdth}>{props.talktime}{props.talktime === 'Unlimited' ? '' : 'min'}</td>
          <td className={classes.tdth}>{props.sms}</td>
        </tr>
      </table>
      {pros === '' ? '' : 'Pros:'}
      {pros === '' ? '' : <ul className={classes.ul}>{pros}</ul>}
      {cons === '' ? '' : 'Cons:'}
      {cons === '' ? '' : <ul className={classes.ul}>{cons}</ul>}
    </Paper>
  );
}

export default MobilePlanPaper;