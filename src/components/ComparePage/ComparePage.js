import React from 'react'
//import data
import mobilePlanData from '../../data/mobilePlanData'
//import components
import { Container, Grid, FormControl, InputLabel, Select, MenuItem, Box, ClickAwayListener, Slide, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
//import styles
import { withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { teal, orange } from '@material-ui/core/colors'
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
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    overflowX: 'auto'
  },
  appBar: {
    minWidth: '900px'
  },
  outerContainer: {
    flex: 1,
    overflow: 'auto',
    height: '100%',
    minWidth: '900px',
    padding: 0
  },
  planOneGrid: {
    borderLeft: '1px solid ' + theme.palette.secondary.light,
    borderRight: '1px solid ' + theme.palette.secondary.light
  },
  formSection: {
    padding: '30px',
    borderBottom: '1px solid ' + theme.palette.secondary.light
  },
  formControl: {
    minWidth: '200px',
    width: '100%',
    margin: '4px 0'
  },
  tableHeaders: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'flex-end'
  },
  tableData: {
    padding: '1rem 30px',
    borderBottom: '1px solid ' + theme.palette.secondary.light
  },
  tableDataGood: {
    backgroundColor: teal[100],
    color: teal[900]
  },
  tableDataBad: {
    backgroundColor: orange[100],
    color: orange[900]
  },
  phoneInfo: {
    padding: '30px'
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
    let newComparePlans = props.comparePlans

    //save the planType or telco to redux
    if (option === 'planType' || option === 'telco') {
      newComparePlans = {
        ...props.comparePlans,
        [`${planNumber}`]: {
          ...props.comparePlans[`${planNumber}`],
          [`${option}`]: event.target.value
        }
      }
    }

    //update plan options if planType and telco have both been selected
    if (newComparePlans[`${planNumber}`]['planType'] !== '' && newComparePlans[`${planNumber}`]['telco'] !== '') {
      const filteredPlans = mobilePlanData.filter(mobilePlan => mobilePlan.telco === newComparePlans[`${planNumber}`]['telco'] && mobilePlan.planType === newComparePlans[`${planNumber}`]['planType'])
      const newPlanOptions = {
        ...props.planOptions,
        [`${planNumber}`]: filteredPlans.map(mobilePlan => (
          <MenuItem key={mobilePlan.planName} value={mobilePlan.planName}>
            {mobilePlan.planName}
          </MenuItem>
        ))
      }
      props.setPlanOptions(newPlanOptions)
      //save mobilePlan to redux
      if (option === 'mobilePlan') {
        newComparePlans = {
          ...props.comparePlans,
          [`${planNumber}`]: {
            ...props.comparePlans[`${planNumber}`],
            ['mobilePlan']: filteredPlans.filter(mobilePlan => mobilePlan.planName === event.target.value)[0]
          }
        }
      }
    }

    props.setComparePlans(newComparePlans)
  }

  const handleClickAway = event => {
    if (event.target.localName !== 'li' && event.target.localName !== 'ul') {
      props.setIsShowCompare(false)
    }
  }

  return (
    <Slide direction="left" in={props.isShowCompare} timeout={500} mountOnEnter unmountOnExit>
      <ClickAwayListener onClickAway={event => handleClickAway(event)}>
        <Box className={classes.outermostBox}>
          <AppBar className={classes.appBar} position="sticky">
            <Toolbar>
              <IconButton color="inherit" onClick={() => props.setIsShowCompare(false)}>
                <ArrowBackIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Container className={classes.outerContainer} maxWidth="md">
            <Grid container>
              <Grid item xs={2} className={classes.tableHeaders}>
                <Box className={classes.formSection}></Box>
                <Box className={classes.tableData}>Data</Box>
                <Box className={classes.tableData}>Talktime</Box>
                <Box className={classes.tableData}>SMS</Box>
                <Box className={classes.tableData}>Price / mth</Box>
                {props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.planName !== '' && ((props.comparePlans.planOne.mobilePlan.planType === 'No contract' && props.comparePlans.planTwo.mobilePlan.planType === '24 month contract') || (props.comparePlans.planTwo.mobilePlan.planType === 'No contract' && props.comparePlans.planOne.mobilePlan.planType === '24 month contract')) && <Box className={classes.tableData}>Price / 2 yrs</Box>}
              </Grid>
              <Grid item xs={5} className={classes.planOneGrid}>
                <Box className={classes.formSection}>
                  <Typography variant="h6">Plan 1</Typography>
                  <FormControl className={classes.formControl}>
                    <InputLabel>Contract Length</InputLabel>
                    <Select defaultValue={props.comparePlans.planOne.planType} onChange={event => handleChange(event, 'planOne', 'planType')}>
                      <MenuItem value={'No contract'}>No contract</MenuItem>
                      <MenuItem value={'12 month contract'}>12 month contract</MenuItem>
                      <MenuItem value={'24 month contract'}>24 month contract</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel>Telco</InputLabel>
                    <Select defaultValue={props.comparePlans.planOne.telco} onChange={event => handleChange(event, 'planOne', 'telco')}>
                      {uniqueTelcos.map(telco => (
                        <MenuItem key={telco} value={telco}>
                          {telco}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {props.planOptions.planOne.length !== 0 ? (
                    <FormControl className={classes.formControl}>
                      <InputLabel>Plan</InputLabel>
                      <Select defaultValue={props.comparePlans.planOne.mobilePlan.planName} onChange={event => handleChange(event, 'planOne', 'mobilePlan')}>
                        {props.planOptions.planOne}
                      </Select>
                    </FormControl>
                  ) : (
                    <FormControl className={classes.formControl} disabled>
                      <InputLabel>No Suitable Plans</InputLabel>
                      <Select defaultValue=""></Select>
                    </FormControl>
                  )}
                </Box>
                <Box>
                  <Box className={clsx(classes.tableData, props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.planName !== '' && (props.comparePlans.planOne.mobilePlan.data > props.comparePlans.planTwo.mobilePlan.data ? classes.tableDataGood : props.comparePlans.planOne.mobilePlan.data < props.comparePlans.planTwo.mobilePlan.data && classes.tableDataBad))}>{props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planOne.mobilePlan.data + ' GB'}&nbsp;</Box>
                  <Box className={clsx(classes.tableData, props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.planName !== '' && (props.comparePlans.planOne.mobilePlan.talktime > props.comparePlans.planTwo.mobilePlan.talktime ? classes.tableDataGood : props.comparePlans.planOne.mobilePlan.talktime < props.comparePlans.planTwo.mobilePlan.talktime && classes.tableDataBad))}>{props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planOne.mobilePlan.talktime + ' min'}&nbsp;</Box>
                  <Box className={clsx(classes.tableData, props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.planName !== '' && (props.comparePlans.planOne.mobilePlan.sms > props.comparePlans.planTwo.mobilePlan.sms ? classes.tableDataGood : props.comparePlans.planOne.mobilePlan.sms < props.comparePlans.planTwo.mobilePlan.sms && classes.tableDataBad))}>{props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planOne.mobilePlan.sms}&nbsp;</Box>
                  <Box className={clsx(classes.tableData, props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.planName !== '' && (props.comparePlans.planOne.mobilePlan.price < props.comparePlans.planTwo.mobilePlan.price ? classes.tableDataGood : props.comparePlans.planOne.mobilePlan.price > props.comparePlans.planTwo.mobilePlan.price && classes.tableDataBad))}>{props.comparePlans.planOne.mobilePlan.planName !== '' && '$' + props.comparePlans.planOne.mobilePlan.price.toFixed(2)}&nbsp;</Box>
                  {props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.planName !== '' && ((props.comparePlans.planOne.mobilePlan.planType === 'No contract' && props.comparePlans.planTwo.mobilePlan.planType === '24 month contract') || (props.comparePlans.planTwo.mobilePlan.planType === 'No contract' && props.comparePlans.planOne.mobilePlan.planType === '24 month contract')) && <Box className={clsx(classes.tableData, props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.planName !== '' && (props.comparePlans.planOne.mobilePlan.price < props.comparePlans.planTwo.mobilePlan.price ? classes.tableDataGood : props.comparePlans.planOne.mobilePlan.price > props.comparePlans.planTwo.mobilePlan.price && classes.tableDataBad))}>{props.comparePlans.planOne.mobilePlan.planName !== '' && '$' + (props.comparePlans.planOne.mobilePlan.price * 24).toFixed(2)}&nbsp;</Box>}
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box className={classes.formSection}>
                  <Typography variant="h6">Plan 2</Typography>
                  <FormControl className={classes.formControl}>
                    <InputLabel>Contract Length</InputLabel>
                    <Select defaultValue={props.comparePlans.planTwo.planType} onChange={event => handleChange(event, 'planTwo', 'planType')}>
                      <MenuItem value={'No contract'}>No contract</MenuItem>
                      <MenuItem value={'12 month contract'}>12 month contract</MenuItem>
                      <MenuItem value={'24 month contract'}>24 month contract</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel>Telco</InputLabel>
                    <Select defaultValue={props.comparePlans.planTwo.telco} onChange={event => handleChange(event, 'planTwo', 'telco')}>
                      {uniqueTelcos.map(telco => (
                        <MenuItem key={telco} value={telco}>
                          {telco}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {props.planOptions.planTwo.length !== 0 ? (
                    <FormControl className={classes.formControl}>
                      <InputLabel>Plan</InputLabel>
                      <Select defaultValue={props.comparePlans.planTwo.mobilePlan.planName} onChange={event => handleChange(event, 'planTwo', 'mobilePlan')}>
                        {props.planOptions.planTwo}
                      </Select>
                    </FormControl>
                  ) : (
                    <FormControl className={classes.formControl} disabled>
                      <InputLabel>No Suitable Plans</InputLabel>
                      <Select defaultValue=""></Select>
                    </FormControl>
                  )}
                </Box>
                <Box>
                  <Box className={clsx(classes.tableData, props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.planName !== '' && (props.comparePlans.planOne.mobilePlan.data < props.comparePlans.planTwo.mobilePlan.data ? classes.tableDataGood : props.comparePlans.planOne.mobilePlan.data > props.comparePlans.planTwo.mobilePlan.data && classes.tableDataBad))}>{props.comparePlans.planTwo.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.data + ' GB'}&nbsp;</Box>
                  <Box className={clsx(classes.tableData, props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.planName !== '' && (props.comparePlans.planOne.mobilePlan.talktime < props.comparePlans.planTwo.mobilePlan.talktime ? classes.tableDataGood : props.comparePlans.planOne.mobilePlan.talktime > props.comparePlans.planTwo.mobilePlan.talktime && classes.tableDataBad))}>{props.comparePlans.planTwo.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.talktime + ' min'}&nbsp;</Box>
                  <Box className={clsx(classes.tableData, props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.planName !== '' && (props.comparePlans.planOne.mobilePlan.sms < props.comparePlans.planTwo.mobilePlan.sms ? classes.tableDataGood : props.comparePlans.planOne.mobilePlan.sms > props.comparePlans.planTwo.mobilePlan.sms && classes.tableDataBad))}>{props.comparePlans.planTwo.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.sms}&nbsp;</Box>
                  <Box className={clsx(classes.tableData, props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.planName !== '' && (props.comparePlans.planOne.mobilePlan.price > props.comparePlans.planTwo.mobilePlan.price ? classes.tableDataGood : props.comparePlans.planOne.mobilePlan.price < props.comparePlans.planTwo.mobilePlan.price && classes.tableDataBad))}>{props.comparePlans.planTwo.mobilePlan.planName !== '' && '$' + props.comparePlans.planTwo.mobilePlan.price.toFixed(2)}&nbsp;</Box>
                  {props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.planName !== '' && ((props.comparePlans.planOne.mobilePlan.planType === 'No contract' && props.comparePlans.planTwo.mobilePlan.planType === '24 month contract') || (props.comparePlans.planTwo.mobilePlan.planType === 'No contract' && props.comparePlans.planOne.mobilePlan.planType === '24 month contract')) && <Box className={clsx(classes.tableData, props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.planName !== '' && (props.comparePlans.planOne.mobilePlan.price > props.comparePlans.planTwo.mobilePlan.price ? classes.tableDataGood : props.comparePlans.planOne.mobilePlan.price < props.comparePlans.planTwo.mobilePlan.price && classes.tableDataBad))}>{props.comparePlans.planTwo.mobilePlan.planName !== '' && '$' + (props.comparePlans.planTwo.mobilePlan.price * 24).toFixed(2)}&nbsp;</Box>}
                </Box>
              </Grid>
              <Grid item xs={12} className={classes.phoneInfo}>
                <Typography variant="h6" gutterBottom={true}>
                  Is it better to get a 24 month contract with a phone, or to get a no contract SIM only plan?
                </Typography>
                {props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.planName !== '' && props.comparePlans.planOne.mobilePlan.planType === 'No contract' && props.comparePlans.planTwo.mobilePlan.planType === '24 month contract' ? (
                  <Box>
                    For{' '}
                    <strong>
                      {props.comparePlans.planTwo.mobilePlan.telco} {props.comparePlans.planTwo.mobilePlan.planName}
                    </strong>
                    , if you think the amount of data, talktime and SMS is sufficient, and you are able to get a the phone of your choice for <strong>${(props.comparePlans.planTwo.mobilePlan.price * 24 - props.comparePlans.planOne.mobilePlan.price * 24).toFixed(0)} cheaper</strong>, then it is more worthwhile. Otherwise, it is more worthwhile to get{' '}
                    <strong>
                      {props.comparePlans.planOne.mobilePlan.telco} {props.comparePlans.planOne.mobilePlan.planName}
                    </strong>
                    .
                  </Box>
                ) : props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.planType === 'No contract' && props.comparePlans.planOne.mobilePlan.planType === '24 month contract' ? (
                  <Box>
                    For{' '}
                    <strong>
                      {props.comparePlans.planOne.mobilePlan.telco} {props.comparePlans.planOne.mobilePlan.planName}
                    </strong>
                    , if you think the amount of data, talktime and SMS are sufficient, and you are able to get a the phone of your choice for <strong>${(props.comparePlans.planOne.mobilePlan.price * 24 - props.comparePlans.planTwo.mobilePlan.price * 24).toFixed(0)} cheaper</strong>, then it is more worthwhile. Otherwise, it is more worthwhile to get{' '}
                    <strong>
                      {props.comparePlans.planTwo.mobilePlan.telco} {props.comparePlans.planTwo.mobilePlan.planName}
                    </strong>
                    .
                  </Box>
                ) : (
                  <Box>From the above dropdown boxes, choose a plan with a 24 month contract, and a plan with no contract to compare.</Box>
                )}
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
