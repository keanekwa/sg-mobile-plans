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

  const pros = props.resultSelected.pros !== undefined && props.resultSelected.pros.map(pro => <li key={pro}>{pro}</li>);
  const cons = props.resultSelected.cons !== undefined && props.resultSelected.cons.map(con => <li key={con}>{con}</li>);
  const basePlan = props.resultSelected.basePlan !== undefined ? props.resultSelected.basePlan : props.resultSelected;
  const addons = props.resultSelected.addons !== undefined ? props.resultSelected.addons : null;
  const addonTableRows = addons !== null && addons.map( addon => (
    <TableRow>
      <TableCell>{addon.addonName} Addon</TableCell>
      <TableCell>{addon.data}{addon.data === 'Unlimited' ? '' : 'GB'}</TableCell>
      <TableCell>{addon.talktime}{addon.talktime === 'Unlimited' ? '' : 'min'}</TableCell>
      <TableCell>{addon.sms}</TableCell>
    </TableRow>
  ));

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
                  <TableCell>{basePlan.data}{basePlan.data === 'Unlimited' ? '' : 'GB'}</TableCell>
                  <TableCell>{basePlan.talktime}{basePlan.talktime === 'Unlimited' ? '' : 'min'}</TableCell>
                  <TableCell>{basePlan.sms}</TableCell>
                </TableRow>
                {addonTableRows !== undefined && addonTableRows}
              </TableBody>
            </Table>
          </Box>
          <Box>
            {pros !== undefined && <Box>Pros:<ul>{pros}</ul></Box>}
            {cons !== undefined && <Box>Cons:<ul>{cons}</ul></Box>}
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