import React from 'react';
//import components
import { Box, IconButton, Fade, Table, TableBody, TableCell, TableHead, TableRow, AppBar, Toolbar, Typography, Paper } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
//import styles
import { withStyles } from '@material-ui/core/styles';
//import redux
import { connect } from 'react-redux';
import { setIsShowMobileResultDetails } from '../../redux/results/results-actions';

const styles = theme => ({
  headerBox: {
    borderBottom: '1px solid ' + theme.palette.primary.main,
    padding: '1rem 1.5rem',
  },
  contentBox: {
    padding: '1rem 1.5rem',
  },
  price: {
    lineHeight: '1.75',
  },
  Table: {
    marginBottom: '1.5rem',
  },
  tableHeadCell: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
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
  
  const pros = props.resultSelected.pros !== undefined ? props.resultSelected.pros.map(pro => <li key={pro}>{pro}</li>) : null;
  const cons = props.resultSelected.cons !== undefined ? props.resultSelected.cons.map(con => <li key={con}>{con}</li>) : null;
  const basePlan = props.resultSelected.basePlan !== undefined ? props.resultSelected.basePlan : props.resultSelected;
  const addons = props.resultSelected.addons !== undefined ? props.resultSelected.addons : null;
  const addonTableRows = addons !== null && addons.map( addon => (
    <TableRow>
      <TableCell>{addon.addonMultiple} x {addon.addonName} Addon</TableCell>
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
        <Box>
          <Box className={classes.headerBox}>
            <Typography variant='h6'>{props.resultSelected.telco} {props.resultSelected.planName}</Typography>
            <Box className={classes.price}>${props.resultSelected.price.toFixed(2)}</Box>
          </Box>
          <Box className={classes.contentBox}>
            <Paper>
              <Table className={classes.Table}>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableHeadCell}></TableCell>
                    <TableCell className={classes.tableHeadCell}>Data</TableCell>
                    <TableCell className={classes.tableHeadCell}>Talktime</TableCell>
                    <TableCell className={classes.tableHeadCell}>SMS</TableCell>
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
            </Paper>
            <Paper>
              {pros !== null && <Box>Pros:<ul>{pros}</ul></Box>}
              {cons !== null && <Box>Cons:<ul>{cons}</ul></Box>}
            </Paper>
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