import React from 'react';
// import components
import { Grid, Box, AppBar, Toolbar, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ResultsList from './ResultsList';
import ResultDetails from './ResultDetails';
//import styles
import { withStyles } from '@material-ui/styles';
//import redux
import { connect } from 'react-redux';
import { setIsShowResults } from '../../redux/results/results-actions';

const styles = theme => ({
  outerContainer: {
    display: 'flex',
    flexFlow: 'column'
  },
  fullHeight: {
    height: '100%'
  },
  ShowMobileResultDetails: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  AppBar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    color: 'white'
  },
  '@global': {
    [theme.breakpoints.up('md')]: {
      '*::-webkit-scrollbar': {
        width: '7px'
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
        backgroundColor: '#eee'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.secondary.main,
        outline: '1px solid slategrey'
      }
    }
  }
});

const ResultsPage = props => {
  const { classes } = props;

  return (
    <Box className={`${classes.outerContainer} ${classes.fullHeight}`}>
      <AppBar className={classes.AppBar} position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => props.setIsShowResults(false)}
          >
            <ArrowBackIcon />
          </IconButton>
          <Box>Suitable Mobile Plans</Box>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.fullHeight}>
        <Grid
          item
          xs={12}
          md={5}
          className={`${classes.fullHeight} ${
            props.isShowMobileResultDetails
              ? classes.ShowMobileResultDetails
              : null
          }`}
        >
          <ResultsList />
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          className={`${classes.fullHeight} ${
            !props.isShowMobileResultDetails
              ? classes.ShowMobileResultDetails
              : null
          }`}
        >
          {props.resultSelected != null && <ResultDetails />}
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = state => ({
  resultSelected: state.results.resultSelected,
  isShowMobileResultDetails: state.results.isShowMobileResultDetails
});

const mapDispatchToProps = dispatch => ({
  setIsShowResults: isShowResults => dispatch(setIsShowResults(isShowResults))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ResultsPage));
