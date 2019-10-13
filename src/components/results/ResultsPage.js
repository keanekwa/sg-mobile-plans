import React from 'react';
// import components
import { Grid } from '@material-ui/core';
import ResultsList from './ResultsList';
import ResultDetails from './ResultDetails';
//import styles
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
//import redux
import { connect } from 'react-redux';

const styles = theme => ({
  fullHeight: {
    height: '100%',
  },
  ShowMobileResultDetails: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
});

const ResultsPage = props => {
  const { classes } = props;

  return (
    <Grid container className={classes.fullHeight}>
      <Grid item xs={12} md={6} className={`${classes.fullHeight} ${props.isShowMobileResultDetails ? classes.ShowMobileResultDetails : null}`}>
        <ResultsList />
      </Grid>
      <Grid item xs={12} md={6} className={!props.isShowMobileResultDetails ? classes.ShowMobileResultDetails : null}>
        {props.resultSelected != null && <ResultDetails/>}
      </Grid>
    </Grid>
  );
}

const mapStateToProps = state => ({
  resultSelected: state.results.resultSelected,
  isShowMobileResultDetails: state.results.isShowMobileResultDetails,
});

ResultsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(ResultsPage));