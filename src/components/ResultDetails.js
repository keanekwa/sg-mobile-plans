import React from 'react';
//import components
import { Box, Fade, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
//import styles
import { withStyles } from '@material-ui/core/styles';
//import redux
import { connect } from 'react-redux';

const styles = theme => ({
  outerBox: {
    padding: '1rem 1.5rem',
  }
});

const ResultDetails = props => {
  const { classes } = props;

  let pros, cons = undefined;
  if (props.resultSelected.pros === undefined) {
    pros = '';
  }
  else {
    pros = props.resultSelected.pros.map(pro => <li key={pro}>{pro}</li>);
  }
  if (props.resultSelected.cons === undefined) {
    cons = '';
  }
  else {
    cons = props.resultSelected.cons.map(con => <li key={con}>{con}</li>);
  }
  return (
    <Fade in={true} timeout={500} mountOnEnter unmountOnExit>
      <Box className={classes.outerBox}>
        <Box>{props.resultSelected.telco} {props.resultSelected.planName}</Box>
        <Box>${props.resultSelected.price.toFixed(2)}</Box>
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
                <TableCell>{props.resultSelected.data}{props.resultSelected.data === 'Unlimited' ? '' : 'GB'}</TableCell>
                <TableCell>{props.resultSelected.talktime}{props.resultSelected.talktime === 'Unlimited' ? '' : 'min'}</TableCell>
                <TableCell>{props.resultSelected.sms}</TableCell>
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
      </Box>
    </Fade>
  );
}

const mapStateToProps = state => ({
  resultSelected: state.results.resultSelected,
});

export default connect(mapStateToProps)(withStyles(styles)(ResultDetails));