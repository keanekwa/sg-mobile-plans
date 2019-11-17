import React from 'react'
//import data
import mobilePlanData from '../../data/mobilePlanData'
//import components
import { Container, Grid, FormControl, InputLabel, Select, MenuItem, Box, ClickAwayListener, Slide, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
//import styles
import { withStyles } from '@material-ui/core/styles'
//import redux
import { connect } from 'react-redux'
import { setIsShowCompare } from '../../redux/compare/compare-actions'

const styles = theme => ({
  outermostBox: {
    position: 'fixed',
    display: 'flex',
    flexFlow: 'column',
    top: 0,
    right: 0,
    height: '100%',
    backgroundColor: theme.palette.common.white,
    zIndex: 2
  },
  outerContainer: {
    flex: 1,
    padding: '40px',
    overflow: 'auto',
    height: '100%'
  },
  planOneGrid: {
    borderRight: '1px solid ' + theme.palette.secondary.light
  },
  FormControl: {
    minWidth: 150
  }
})

const ComparePage = props => {
  const { classes } = props

  const handleChange = (event, planNumber, option) => {
    alert(event.target.value + planNumber + option)
  }

  //get unique telcos from mobilePlanData. good for auto update of MenuItems when the data changes
  const uniqueTelcos = []
  mobilePlanData.forEach(mobilePlan => {
    if (uniqueTelcos.indexOf(mobilePlan.telco) === -1) {
      uniqueTelcos.push(mobilePlan.telco)
    }
  })
  const filteredMobilePlans = []
  const mobilePlansMapped = []

  return (
    <Slide direction="left" in={props.isShowCompare} timeout={500} mountOnEnter unmountOnExit>
      <ClickAwayListener onClickAway={() => props.setIsShowCompare(false)}>
        <Box className={classes.outermostBox}>
          <AppBar className={classes.AppBar} position="sticky">
            <Toolbar>
              <IconButton color="inherit" onClick={() => props.setIsShowCompare(false)}>
                <ArrowBackIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Container className={classes.outerContainer} maxWidth="md">
            <Grid container spacing={10}>
              <Grid item xs={6} className={classes.planOneGrid}>
                <Typography variant="h6">Plan 1</Typography>
                <FormControl className={classes.FormControl}>
                  <InputLabel>Contract Length</InputLabel>
                  <Select onChange={event => handleChange(event, 1, 'planType')} autoWidth>
                    <MenuItem value={'No contract'}>No contract</MenuItem>
                    <MenuItem value={'12 month contract'}>12 month contract</MenuItem>
                    <MenuItem value={'24 month contract'}>24 month contract</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.FormControl}>
                  <InputLabel>Telcos</InputLabel>
                  <Select autoWidth>
                    {uniqueTelcos.map(telco => (
                      <MenuItem key={telco} value={telco}>
                        {telco}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {filteredMobilePlans[0] !== undefined ? (
                  <FormControl className={classes.FormControl} disabled>
                    <InputLabel>Plans</InputLabel>
                    <Select>{mobilePlansMapped}</Select>
                  </FormControl>
                ) : (
                  <FormControl className={classes.FormControl} disabled>
                    <InputLabel>No Suitable Plans</InputLabel>
                    <Select></Select>
                  </FormControl>
                )}
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Plan 2</Typography>
                <FormControl className={classes.FormControl}>
                  <InputLabel>Contract length</InputLabel>
                  <Select autoWidth>
                    <MenuItem value={'No contract'}>No contract</MenuItem>
                    <MenuItem value={'12 month contract'}>12 month contract</MenuItem>
                    <MenuItem value={'24 month contract'}>24 month contract</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ClickAwayListener>
    </Slide>
  )
}

const mapStateToProps = state => ({
  isShowCompare: state.compare.isShowCompare
})

const mapDispatchToProps = dispatch => ({
  setIsShowCompare: isShowCompare => dispatch(setIsShowCompare(isShowCompare))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ComparePage))
