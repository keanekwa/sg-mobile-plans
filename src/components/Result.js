import React from 'react';
import { Box, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Fade } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors/';

const styles = theme => ({
  ExpansionPanel: {
    background: 'none',
    color: blueGrey[50],
    border: '1px solid ' + blueGrey[50],
    marginBottom: '16px',
  },
  ExpandMoreIcon: {
    color: blueGrey[50],
  },
  ExpansionPanelSummary: {
    padding: '0 1.5rem',
  },
  ExpansionPanelDetails: {
    backgroundColor: blueGrey[800],
    padding: '1.5rem',
    flexDirection: 'column',
  },
  price: {
    color: blueGrey[200],
  }
});

const Result = props => {
  const { classes } = props;

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
  return (
    <Fade in={true} timeout={1000} mountOnEnter unmountOnExit style={{ transitionDelay: `${props.delay}ms` }}>
      <ExpansionPanel square={true} className={classes.ExpansionPanel}>
        <ExpansionPanelSummary className={classes.ExpansionPanelSummary} disableRipple={false} disableTouchRipple={false} expandIcon={<ExpandMoreIcon className={classes.ExpandMoreIcon}/>}>
          {props.telco} {props.planName} <Box className={classes.price}>&nbsp;| ${props.price % 1 === 0 ? props.price : props.price.toFixed(2)}</Box>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.ExpansionPanelDetails}>
          <Box>
            Data: {props.data}{props.data === 'Unlimited' ? '' : 'GB'}<br/>
            Talktime: {props.talktime}{props.talktime === 'Unlimited' ? '' : 'min'}<br/>
            SMS: {props.sms}<br/>
          </Box>
          <Box>
            {pros === '' ? '' : 'Pros:'}<br/>
            {pros === '' ? '' : <ul>{pros}</ul>}
            {cons === '' ? '' : 'Cons:'}<br/>
            {cons === '' ? '' : <ul>{cons}</ul>}
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Fade>
  );
}

export default withStyles(styles)(Result);