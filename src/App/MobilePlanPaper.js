import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.background,
    padding: theme.spacing(6) + ' ' + theme.spacing(7),
    color: theme.light.color,
    margin: theme.spacing(5) + ' 0 0 0',
    textAlign: 'left',
  },
  table: {
    borderCollapse: 'collapse',
    textAlign: 'center',
    margin: '0 0 ' + theme.spacing(6) + ' 0',
    '&:hover, &:focus, &:active': {
      cursor: 'pointer',
      color: theme.light.hover,
    },
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
    verticalAlign: 'middle',
  },
  ul: {
    margin: 0,
  },
}));

export default function MobilePlanPaper(props) {
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

  const [checked, setChecked] = React.useState(false);
  function expandOrMinimize() {
    setChecked(prev => !prev);
  }
  return (
    <Collapse in={checked} collapsedHeight='6.75rem'>
      <Paper square={true} className={classes.root}>
        <table className={classes.table} onClick={expandOrMinimize}>
          <tbody className={classes.thead}>
            <tr>
              <th className={classes.tdth}>Price</th>
              <th className={classes.tdth}>Data</th>
              <th className={classes.tdth}>Talktime</th>
              <th className={classes.tdth}>SMS</th>
              <td rowSpan={2} align='center'><h2 className={classes.h2}>{props.telco} - {props.planName}</h2></td>
            </tr>
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
    </Collapse>
  );
}