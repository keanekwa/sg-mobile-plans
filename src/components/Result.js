import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors/';

const useStyles = makeStyles({
  root: {
    margin: '1.25rem 0 0 0',
    textAlign: 'left',
    backgroundColor: blueGrey[800],
  },
  button: {
    justifyContent: 'left',
    backgroundColor: blueGrey[900],
  },
  data: {
    padding: '0 1rem 1rem 1rem',
    background: 'none',
    color: blueGrey[50],
  },
});

export default function Result(props) {
  const classes = useStyles();

  let pros, cons = undefined;
  if (props.pros === undefined) {
    pros = '';
  }
  else {
    pros = props.pros.map(pro => <li key={pro}>{pro}</li>);
  }
  if (props.cons === undefined) {
    cons = '';
  }
  else {
    cons = props.cons.map(con => <li key={con}>{con}</li>);
  }

  const [checked, setChecked] = React.useState(false);
  const expandOrMinimize = () => {
    setChecked(prev => !prev);
  }

  return (
    <Collapse className={classes.root} in={checked} collapsedHeight='56px'>
      <Button size='large' className={classes.button} component='div' color='primary' variant='outlined' fullWidth={true} onClick={expandOrMinimize}>
        {props.telco} {props.planName} --- ${props.price % 1 === 0 ? props.price : props.price.toFixed(2)}
      </Button>
      <Box className={classes.data} square={true}>
        Data: {props.data}{props.data === 'Unlimited' ? '' : 'GB'}<br/>
        Talktime: {props.talktime}{props.talktime === 'Unlimited' ? '' : 'min'}<br/>
        SMS: {props.sms}<br/>
        {pros === '' ? '' : 'Pros:'}
        {pros === '' ? '' : <ul>{pros}</ul>}
        {cons === '' ? '' : 'Cons:'}
        {cons === '' ? '' : <ul>{cons}</ul>}
      </Box>
    </Collapse>
  );
}