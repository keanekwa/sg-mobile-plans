import React from 'react';
//import components
import { Box, IconButton, Fade, Table, TableBody, TableCell, TableHead, TableRow, AppBar, Toolbar } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
//import styles
import { withStyles } from '@material-ui/core/styles';
//import redux
import { connect } from 'react-redux';
import { setIsShowMobileResultDetails } from '../../redux/results/results-actions';
import { blueGrey } from '@material-ui/core/colors';

const styles = theme => ({
  contentBox: {
    maxWidth: '100%',
    overflowX: 'auto',
  },
  Table: {
    marginBottom: '1.5rem',
  },
  tableHeadCell: {
    backgroundColor: blueGrey[100],
    fontWeight: '700',
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
  console.log(props.resultSelected.planName + basePlan.data);
  const addons = props.resultSelected.addons !== undefined ? props.resultSelected.addons : null;
  const addonTableRows = addons !== null && addons.map( addon => (
    <TableRow>
      <TableCell>{addon.addonName} Addon (x{addon.addonMultiple})</TableCell>
      <TableCell>{addon.multiplier === true && 'x'}{addon.data * addon.addonMultiple}{addon.multiplier !== true && 'GB'}</TableCell>
      <TableCell>{addon.talktime * addon.addonMultiple}min</TableCell>
      <TableCell>{addon.sms * addon.addonMultiple}</TableCell>
      <TableCell>${addon.price.toFixed(2)}</TableCell>
    </TableRow>
  ));

  return (
    <Box>
      <AppBar className={classes.AppBar} position='static'>
        <Toolbar>
          <IconButton color='inherit' onClick={() => props.setIsShowMobileResultDetails(false)}>
            <ArrowBackIcon/>
          </IconButton>
          <Box>{props.resultSelected.telco} {props.resultSelected.planName} - ${props.resultSelected.price.toFixed(2)}</Box>
        </Toolbar>
      </AppBar>
      <Fade in={true} timeout={500} mountOnEnter unmountOnExit>
        <Box>
          <Box className={classes.contentBox}>
            <Table className={classes.Table}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHeadCell}>Breakdown</TableCell>
                  <TableCell className={classes.tableHeadCell}>Data</TableCell>
                  <TableCell className={classes.tableHeadCell}>Talktime</TableCell>
                  <TableCell className={classes.tableHeadCell}>SMS</TableCell>
                  <TableCell className={classes.tableHeadCell}>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Base Plan</TableCell>
                  <TableCell>{basePlan.data}GB</TableCell>
                  <TableCell>{basePlan.talktime}min</TableCell>
                  <TableCell>{basePlan.sms}</TableCell>
                  <TableCell>${basePlan.price.toFixed(2)}</TableCell>
                </TableRow>
                {addonTableRows !== undefined && addonTableRows}
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell>{props.resultSelected.data}GB</TableCell>
                  <TableCell>{props.resultSelected.talktime}min</TableCell>
                  <TableCell>{props.resultSelected.sms}</TableCell>
                  <TableCell>${props.resultSelected.price.toFixed(2)}</TableCell>
                </TableRow>
              </TableBody>
              {
                pros !== null && 
                <TableHead>
                  <TableCell colSpan={5} className={classes.tableHeadCell}>Pros</TableCell>
                </TableHead>
              }
              {
                pros !== null && 
                <TableBody>
                  <TableCell colSpan={5}><ul>{pros}</ul></TableCell>
                </TableBody>
              }
              {
                cons !== null && 
                <TableHead>
                  <TableCell colSpan={5} className={classes.tableHeadCell}>Cons</TableCell>
                </TableHead>
              }
              {
                cons !== null && 
                <TableBody>
                  <TableCell colSpan={5}><ul>{cons}</ul></TableCell>
                </TableBody>
              }
            </Table>
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