import React from 'react';
// import components
import { Grid } from '@material-ui/core';
import ResultsList from './ResultsList';
import ResultDetails from './ResultDetails';
//import styles
import { withStyles } from '@material-ui/styles';
//import redux
import { connect } from 'react-redux';

const styles = theme => ({
  fullHeight: {
    height: '100%',
  }
});


const ResultsPage = props => {
  const { classes } = props;

  return (
    <Grid container className={classes.fullHeight}>
      <Grid item xs={12} md={6} className={classes.fullHeight}>
        <ResultsList optionsSelected={props.options}/>
      </Grid>
      <Grid item xs={12} md={6}>
        {props.resultSelected != null && <ResultDetails resultSelected={props.resultSelected}/>}
      </Grid>
    </Grid>
  );
}

const mapStateToProps = state => ({
  options: state.options.options,
  resultSelected: state.results.resultSelected,
});

export default connect(mapStateToProps)(withStyles(styles)(ResultsPage));