import React from 'react';
//import components
import { Box, IconButton, Fade, Table, TableBody, TableCell, TableHead, TableRow, AppBar, Toolbar  } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
//import styles
import { withStyles } from '@material-ui/core/styles';
//import redux
import { connect } from 'react-redux';
import { setIsShowMobileResultDetails } from '../../redux/results/results-actions';

const styles = theme => ({
  outerBox: {
    padding: '1rem 1.5rem',
  },
  AppBar: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    color: 'white',
  },
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
    <Box>
      <AppBar className={classes.AppBar} position='static'>
        <Toolbar>
          <IconButton color='inherit' onClick={() => props.setIsShowMobileResultDetails(false)}>
            <ArrowBackIcon/>
          </IconButton>
          <Box>{props.resultSelected.telco} {props.resultSelected.planName}</Box>
        </Toolbar>
      </AppBar>
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
    </Box>
  );
}

const mapStateToProps = state => ({
  resultSelected: state.results.resultSelected,
});

const mapDispatchToProps = dispatch => ({
  setIsShowMobileResultDetails: isShowMobileResultDetails =>  dispatch(setIsShowMobileResultDetails(isShowMobileResultDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ResultDetails));