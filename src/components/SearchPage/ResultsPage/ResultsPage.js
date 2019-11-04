import React from 'react'
// import components
import { Grid, Box, AppBar, Toolbar, IconButton, Slide } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ResultsList from './ResultsList'
import ResultDetails from './ResultDetails'
//import styles
import { withStyles } from '@material-ui/styles'
//import redux
import { connect } from 'react-redux'
import { setIsShowResults } from '../../../redux/results/results-actions'

const styles = theme => ({
  outerContainer: {
    position: 'fixed',
    display: 'flex',
    flexFlow: 'column',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.common.white,
    zIndex: 3
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
    flex: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  '@global': {
    [theme.breakpoints.up('md')]: {
      '*::-webkit-scrollbar': {
        width: '9px'
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
        backgroundColor: '#eee'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.secondary.light,
        outline: '1px solid slategrey',
        '&:hover': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    }
  }
})

const ResultsPage = props => {
  const { classes } = props

  return (
    <Slide in={props.isShowResults} direction="left" timeout={500} mountOnEnter unmountOnExit>
      <Box className={classes.outerContainer}>
        <AppBar className={classes.AppBar} position="sticky">
          <Toolbar>
            <IconButton color="inherit" onClick={() => props.setIsShowResults(false)}>
              <ArrowBackIcon />
            </IconButton>
            <Box>Suitable Mobile Plans</Box>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.fullHeight}>
          <Grid item xs={12} md={5} className={`${classes.fullHeight} ${props.isShowMobileResultDetails ? classes.ShowMobileResultDetails : null}`}>
            <ResultsList />
          </Grid>
          <Grid item xs={12} md={7} className={`${classes.fullHeight} ${!props.isShowMobileResultDetails ? classes.ShowMobileResultDetails : null}`}>
            {props.resultSelected != null && <ResultDetails />}
          </Grid>
        </Grid>
      </Box>
    </Slide>
  )
}

const mapStateToProps = state => ({
  isShowResults: state.results.isShowResults,
  resultSelected: state.results.resultSelected,
  isShowMobileResultDetails: state.results.isShowMobileResultDetails
})

const mapDispatchToProps = dispatch => ({
  setIsShowResults: isShowResults => dispatch(setIsShowResults(isShowResults))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ResultsPage))
