import React from 'react'
//import data
import mobilePlanData from '../../data/mobilePlanData'
//import components
import { Container, Grid, FormControl, InputLabel, Select, MenuItem, Box, ClickAwayListener, Slide, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import SelectAddons from './SelectAddons'
import CompareTableBox from './CompareTableBox'
//import styles
import { withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
//import redux
import { connect } from 'react-redux'
import { setIsShowCompare, setComparePlans, setPlanOptions, setAddonOptions, setIsNoMoreAddons } from '../../redux/compare/compare-actions'

const styles = theme => ({
  outermostBox: {
    position: 'absolute',
    minHeight: '100%',
    display: 'flex',
    flexFlow: 'column',
    top: 0,
    right: 0,
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
    minWidth: '900px',
    padding: 0
  },
  planGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    flexFlow: 'column',
    borderBottom: '1px solid ' + theme.palette.secondary.light
  },
  planOneGrid: {
    borderLeft: '1px solid ' + theme.palette.secondary.light,
    borderRight: '1px solid ' + theme.palette.secondary.light
  },
  formSection: {
    padding: '30px'
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
    borderTop: '1px solid ' + theme.palette.secondary.light
  },
  phoneInfo: {
    padding: '30px'
  }
})

const ComparePage = props => {
  const { classes } = props

  //get unique telcos from mobilePlanData
  const uniqueTelcos = []
  mobilePlanData.forEach(mobilePlan => {
    if (uniqueTelcos.indexOf(mobilePlan.telco) === -1) {
      uniqueTelcos.push(mobilePlan.telco)
    }
  })

  const handleChange = (event, planNumber, option) => {
    let newComparePlans = props.comparePlans

    //save planType to redux, and reset telco, mobilePlan, planOptions, isNoMoreAddons
    if (option === 'planType') {
      newComparePlans = {
        ...props.comparePlans,
        [`${planNumber}`]: {
          ...props.comparePlans[`${planNumber}`],
          ['planType']: event.target.value,
          ['telco']: '',
          ['mobilePlan']: {
            planName: ''
          }
        }
      }
      props.setPlanOptions({
        ...props.planOptions,
        [`${planNumber}`]: []
      })
      props.setIsNoMoreAddons({
        ...props.isNoMoreAddons,
        [`${planNumber}`]: false
      })
    }

    //save telco to redux, and reset mobilePlan
    if (option === 'telco') {
      newComparePlans = {
        ...props.comparePlans,
        [`${planNumber}`]: {
          ...props.comparePlans[`${planNumber}`],
          ['telco']: event.target.value,
          ['mobilePlan']: {
            planName: ''
          }
        }
      }
    }

    //update plan options if planType and telco have both been selected. reset addonOptions as well
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
    //reset addonOptions as long as anything in comparePlans is changed
    props.setAddonOptions({
      ...props.addonOptions,
      [`${planNumber}`]: []
    })
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
              <Grid item xs={2} className={clsx(classes.planGrid, classes.tableHeaders)}>
                <Box className={classes.formSection}></Box>
                <Box className={classes.tableData}>Data</Box>
                <Box className={classes.tableData}>Talktime</Box>
                <Box className={classes.tableData}>SMS</Box>
                <Box className={classes.tableData}>Price / mth</Box>
                {props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.planName !== '' && ((props.comparePlans.planOne.mobilePlan.planType === 'No contract' && props.comparePlans.planTwo.mobilePlan.planType === '24 month contract') || (props.comparePlans.planTwo.mobilePlan.planType === 'No contract' && props.comparePlans.planOne.mobilePlan.planType === '24 month contract')) && <Box className={classes.tableData}>Price / 2 yrs</Box>}
              </Grid>
              <Grid item xs={5} className={clsx(classes.planGrid, classes.planOneGrid)}>
                <Box className={classes.formSection}>
                  <Typography variant="h6">Plan 1</Typography>
                  <FormControl className={classes.formControl}>
                    <InputLabel>Contract Length</InputLabel>
                    <Select value={props.comparePlans.planOne.planType} onChange={event => handleChange(event, 'planOne', 'planType')}>
                      <MenuItem value={'No contract'}>No contract</MenuItem>
                      <MenuItem value={'12 month contract'}>12 month contract</MenuItem>
                      <MenuItem value={'24 month contract'}>24 month contract</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel>Telco</InputLabel>
                    <Select value={props.comparePlans.planOne.telco} onChange={event => handleChange(event, 'planOne', 'telco')}>
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
                      <Select value={props.comparePlans.planOne.mobilePlan.planName} onChange={event => handleChange(event, 'planOne', 'mobilePlan')}>
                        {props.planOptions.planOne}
                      </Select>
                    </FormControl>
                  ) : (
                    <FormControl className={classes.formControl} disabled>
                      <InputLabel>No Suitable Plans</InputLabel>
                      <Select value=""></Select>
                    </FormControl>
                  )}
                  <SelectAddons planNumber="planOne" />
                </Box>
                <Box>
                  <CompareTableBox thisPlan={props.comparePlans.planOne} otherPlan={props.comparePlans.planTwo} dataType="data" />
                  <CompareTableBox thisPlan={props.comparePlans.planOne} otherPlan={props.comparePlans.planTwo} dataType="talktime" />
                  <CompareTableBox thisPlan={props.comparePlans.planOne} otherPlan={props.comparePlans.planTwo} dataType="sms" />
                  <CompareTableBox thisPlan={props.comparePlans.planOne} otherPlan={props.comparePlans.planTwo} dataType="price" />
                  {props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.planName !== '' && ((props.comparePlans.planOne.mobilePlan.planType === 'No contract' && props.comparePlans.planTwo.mobilePlan.planType === '24 month contract') || (props.comparePlans.planTwo.mobilePlan.planType === 'No contract' && props.comparePlans.planOne.mobilePlan.planType === '24 month contract')) && <CompareTableBox thisPlan={props.comparePlans.planOne} otherPlan={props.comparePlans.planTwo} dataType="2yr_price" />}
                </Box>
              </Grid>
              <Grid item xs={5} className={classes.planGrid}>
                <Box className={classes.formSection}>
                  <Typography variant="h6">Plan 2</Typography>
                  <FormControl className={classes.formControl}>
                    <InputLabel>Contract Length</InputLabel>
                    <Select value={props.comparePlans.planTwo.planType} onChange={event => handleChange(event, 'planTwo', 'planType')}>
                      <MenuItem value={'No contract'}>No contract</MenuItem>
                      <MenuItem value={'12 month contract'}>12 month contract</MenuItem>
                      <MenuItem value={'24 month contract'}>24 month contract</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel>Telco</InputLabel>
                    <Select value={props.comparePlans.planTwo.telco} onChange={event => handleChange(event, 'planTwo', 'telco')}>
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
                      <Select value={props.comparePlans.planTwo.mobilePlan.planName} onChange={event => handleChange(event, 'planTwo', 'mobilePlan')}>
                        {props.planOptions.planTwo}
                      </Select>
                    </FormControl>
                  ) : (
                    <FormControl className={classes.formControl} disabled>
                      <InputLabel>No Suitable Plans</InputLabel>
                      <Select value=""></Select>
                    </FormControl>
                  )}
                  <SelectAddons planNumber="planTwo" />
                </Box>
                <Box>
                  <CompareTableBox thisPlan={props.comparePlans.planTwo} otherPlan={props.comparePlans.planOne} dataType="data" />
                  <CompareTableBox thisPlan={props.comparePlans.planTwo} otherPlan={props.comparePlans.planOne} dataType="talktime" />
                  <CompareTableBox thisPlan={props.comparePlans.planTwo} otherPlan={props.comparePlans.planOne} dataType="sms" />
                  <CompareTableBox thisPlan={props.comparePlans.planTwo} otherPlan={props.comparePlans.planOne} dataType="price" />
                  {props.comparePlans.planOne.mobilePlan.planName !== '' && props.comparePlans.planTwo.mobilePlan.planName !== '' && ((props.comparePlans.planOne.mobilePlan.planType === 'No contract' && props.comparePlans.planTwo.mobilePlan.planType === '24 month contract') || (props.comparePlans.planTwo.mobilePlan.planType === 'No contract' && props.comparePlans.planOne.mobilePlan.planType === '24 month contract')) && <CompareTableBox thisPlan={props.comparePlans.planTwo} otherPlan={props.comparePlans.planOne} dataType="2yr_price" />}
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
                  <Box>
                    From the above dropdown boxes, choose a plan with a <strong>24 month contract</strong>, and a plan with <strong>no contract</strong> to compare.
                  </Box>
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
  planOptions: state.compare.planOptions,
  addonOptions: state.compare.addonOptions,
  isNoMoreAddons: state.compare.isNoMoreAddons
})

const mapDispatchToProps = dispatch => ({
  setIsShowCompare: isShowCompare => dispatch(setIsShowCompare(isShowCompare)),
  setComparePlans: comparePlans => dispatch(setComparePlans(comparePlans)),
  setPlanOptions: planOptions => dispatch(setPlanOptions(planOptions)),
  setAddonOptions: addonOptions => dispatch(setAddonOptions(addonOptions)),
  setIsNoMoreAddons: isNoMoreAddons => dispatch(setIsNoMoreAddons(isNoMoreAddons))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ComparePage))
