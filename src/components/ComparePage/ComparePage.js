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
import { setIsShowCompare, setComparePlans, setPlanOptions } from '../../redux/compare/compare-actions'

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
    minWidth: '150px',
    width: '100%'
  }
})

const ComparePage = props => {
  const { classes } = props

  //get unique telcos from mobilePlanData. good for auto update of MenuItems when the mobilePlanData changes
  const uniqueTelcos = []
  mobilePlanData.forEach(mobilePlan => {
    if (uniqueTelcos.indexOf(mobilePlan.telco) === -1) {
      uniqueTelcos.push(mobilePlan.telco)
    }
  })

  const handleChange = (event, planNumber, option) => {
    const newComparePlans = props.comparePlans
    newComparePlans[`${planNumber}`][`${option}`] = event.target.value
    props.setComparePlans(newComparePlans)

    if (newComparePlans[`${planNumber}`]['planType'] !== '' && newComparePlans[`${planNumber}`]['telco'] !== '') {
      const filteredPlans = mobilePlanData.filter(mobilePlan => mobilePlan.telco === newComparePlans[`${planNumber}`]['telco'] && mobilePlan.planType === newComparePlans[`${planNumber}`]['planType'])
      const newPlanOptions = props.planOptions
      newPlanOptions[`${planNumber}`] = filteredPlans.map(mobilePlan => (
        <MenuItem id="menuItem" value={mobilePlan.planName}>
          {mobilePlan.planName}
        </MenuItem>
      ))
      props.setPlanOptions(newPlanOptions)
      console.log('new options ' + newPlanOptions.planOne)
      console.log('props options ' + props.planOptions.planOne)
    }
  }

  const handleClickAway = event => {
    if (event.target.id !== 'menuItem') {
      props.setIsShowCompare(false)
    }
  }

  return (
    <Slide direction="left" in={props.isShowCompare} timeout={500} mountOnEnter unmountOnExit>
      <ClickAwayListener onClickAway={event => handleClickAway(event)}>
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
              <Grid item sm={6} className={classes.planOneGrid}>
                <Typography variant="h6">Plan 1</Typography>
                <FormControl className={classes.FormControl}>
                  <InputLabel>Contract Length</InputLabel>
                  <Select defaultValue={props.comparePlans.planOne.planType} onChange={event => handleChange(event, 'planOne', 'planType')}>
                    <MenuItem id="menuItem" value={'No contract'}>
                      No contract
                    </MenuItem>
                    <MenuItem id="menuItem" value={'12 month contract'}>
                      12 month contract
                    </MenuItem>
                    <MenuItem id="menuItem" value={'24 month contract'}>
                      24 month contract
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.FormControl}>
                  <InputLabel>Telcos</InputLabel>
                  <Select defaultValue={props.comparePlans.planOne.telco} onChange={event => handleChange(event, 'planOne', 'telco')}>
                    {uniqueTelcos.map(telco => (
                      <MenuItem id="menuItem" key={telco} value={telco}>
                        {telco}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {console.log(props.planOptions.planOne.length)}
                {props.planOptions.planOne.length !== 0 ? (
                  <FormControl className={classes.FormControl}>
                    <InputLabel>Plans</InputLabel>
                    <Select defaultValue={props.comparePlans.planOne.planName} onChange={event => handleChange(event, 'planOne', 'planName')}>
                      {props.planOptions.planOne}
                    </Select>
                  </FormControl>
                ) : (
                  <FormControl className={classes.FormControl} disabled>
                    <InputLabel>No Suitable Plans</InputLabel>
                    <Select defaultValue=""></Select>
                  </FormControl>
                )}
              </Grid>

              <Grid item xs={6}>
                <Typography variant="h6">Plan 2</Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ClickAwayListener>
    </Slide>
  )
}

const mapStateToProps = state => ({
  isShowCompare: state.compare.isShowCompare,
  comparePlans: state.compare.comparePlans,
  planOptions: state.compare.planOptions
})

const mapDispatchToProps = dispatch => ({
  setIsShowCompare: isShowCompare => dispatch(setIsShowCompare(isShowCompare)),
  setComparePlans: comparePlans => dispatch(setComparePlans(comparePlans)),
  setPlanOptions: planOptions => dispatch(setPlanOptions(planOptions))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ComparePage))
