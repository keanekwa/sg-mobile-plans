import React from 'react';
// import components
import { Grid, Box, AppBar, Toolbar, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ResultsList from './ResultsList';
import ResultDetails from './ResultDetails';
//import styles
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
//import redux
import { connect } from 'react-redux';
import { setIsShowResults } from '../../redux/results/results-actions'

const styles = theme => ({
  outerContainer: {
    display: 'flex',
    flexFlow: 'column',
  },
  fullHeight: {
    height: '100%',
  },
  ShowMobileResultDetails: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  AppBar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    color: 'white',
  },
});

const ResultsPage = props => {
  const { classes } = props;

  return (
    <Box className={`${classes.outerContainer} ${classes.fullHeight}`}>
      <AppBar className={classes.AppBar} position='sticky'>
        <Toolbar>
          <IconButton color='inherit' onClick={() => props.setIsShowResults(false)}>
            <ArrowBackIcon/>
          </IconButton>
          <Box>Suitable Mobile Plans</Box>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.fullHeight}>
        <Grid item xs={12} md={6} className={`${classes.fullHeight} ${props.isShowMobileResultDetails ? classes.ShowMobileResultDetails : null}`}>
          <ResultsList />
        </Grid>
        <Grid item xs={12} md={6} className={`${classes.fullHeight} ${!props.isShowMobileResultDetails ? classes.ShowMobileResultDetails : null}`}>
          {props.resultSelected != null && <ResultDetails/>}
        </Grid>
      </Grid>
    </Box>
  );
}

const mapStateToProps = state => ({
  resultSelected: state.results.resultSelected,
  isShowMobileResultDetails: state.results.isShowMobileResultDetails,
});

const mapDispatchToProps = dispatch => ({
  setIsShowResults: isShowResults => dispatch(setIsShowResults(isShowResults)),
});

ResultsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ResultsPage));