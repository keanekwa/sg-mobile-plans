import React from 'react';
import { Box, ExpansionPanel, ExpansionPanelDetails, Fade, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors/';

const ExpansionPanelSummary = withStyles({
  root: {
    padding: '0 1.5rem',
  },
  content: {
    display: 'block',
  },
})(MuiExpansionPanelSummary);

const styles = theme => ({
  ExpansionPanel: {
    marginBottom: '16px',
  },
  ExpansionPanelSummaryLeft: {
    float: 'left',
    maxWidth: '70%',
  },
  ExpansionPanelSummaryRight: {
    color: indigo[800],
    float: 'right',
  },
  ExpansionPanelDetails: {
    padding: '1.5rem',
    flexDirection: 'column',
  },
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
      <ExpansionPanel className={classes.ExpansionPanel}>
        <ExpansionPanelSummary className={classes.ExpansionPanelSummary} disableRipple={false} disableTouchRipple={false} expandIcon={<ExpandMoreIcon className={classes.ExpandMoreIcon}/>}>
          <Box className={classes.ExpansionPanelSummaryLeft}>{props.telco} {props.planName}</Box>
          <Box className={classes.ExpansionPanelSummaryRight}>${props.price.toFixed(2)}</Box>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.ExpansionPanelDetails}>
          <Box>
            <Table size='small'>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Talktime</TableCell>
                  <TableCell>SMS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Base Plan</TableCell>
                  <TableCell>{props.data}{props.data === 'Unlimited' ? '' : 'GB'}</TableCell>
                  <TableCell>{props.talktime}{props.talktime === 'Unlimited' ? '' : 'min'}</TableCell>
                  <TableCell>{props.sms}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
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