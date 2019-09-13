import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.background,
    padding: theme.spacing(5) + ' ' + theme.spacing(6),
    color: theme.light.color,
    margin: theme.spacing(4),
    textAlign: 'left',
  },
  table: {
    borderCollapse: 'collapse',
    textAlign: 'center',
    margin: 0,
  },
  h2: {
    padding: '0 0 0 ' + theme.spacing(4),
    margin: 0,
  },
  tdth: {
    padding: '0 ' + theme.spacing(3) + ' 0 ' + theme.spacing(3),
    borderRight: '3px solid #d5d5d5',
    borderLeft: '3px solid #d5d5d5',
    width: 65,
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
      <table className={classes.table}>
        <thead>
          <tr>
            <th className={classes.tdth}>Price</th>
            <th className={classes.tdth}>Data</th>
            <th className={classes.tdth}>Talktime</th>
            <th className={classes.tdth}>SMS</th>
            <td rowSpan={2}><h2 className={classes.h2}>{props.telco} - {props.planName}</h2></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classes.tdth}>${props.price % 1 === 0 ? props.price : props.price.toFixed(2)}</td>
            <td className={classes.tdth}>{props.data}{props.data === 'Unlimited' ? '' : 'GB'}</td>
            <td className={classes.tdth}>{props.talktime}{props.talktime === 'Unlimited' ? '' : 'min'}</td>
            <td className={classes.tdth}>{props.sms}</td>
          </tr>
        </tbody>
      </table>
      {pros === '' ? '' : 'Pros:'}
      {pros === '' ? '' : <ul className={classes.ul}>{pros}</ul>}
      {cons === '' ? '' : 'Cons:'}
      {cons === '' ? '' : <ul className={classes.ul}>{cons}</ul>}
    </Paper>
  );
}

export default MobilePlanPaper;