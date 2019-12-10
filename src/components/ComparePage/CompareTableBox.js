import React from 'react'
//import components
import { Box } from '@material-ui/core'
//import styles
import { withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { teal, orange } from '@material-ui/core/colors'

const styles = theme => ({
  tableData: {
    padding: '1rem 30px',
    borderTop: '1px solid ' + theme.palette.secondary.light
  },
  tableDataGood: {
    backgroundColor: teal[100],
    color: teal[900]
  },
  tableDataBad: {
    backgroundColor: orange[100],
    color: orange[900]
  }
})

const calculatefinalPlan = plan => {
  let newMobilePlan = plan.mobilePlan
  const addons = plan.addons
  console.log(newMobilePlan)

  addons.forEach(addon => {
    if (addon.multiplier === true) {
      //do this for multiplier addons, e.g. Singtel Data X 2
      newMobilePlan = {
        ...newMobilePlan,
        data: newMobilePlan.data * addon.data,
        talktime: newMobilePlan.talktime * addon.talktime,
        sms: newMobilePlan.sms * addon.sms,
        price: newMobilePlan.price + addon.price
      }
    } else {
      //this is for non-multiplier addons, e.g. $6 for 1 GB
      newMobilePlan = {
        ...newMobilePlan,
        data: newMobilePlan.data + addon.data,
        talktime: newMobilePlan.talktime + addon.talktime,
        sms: newMobilePlan.sms + addon.sms,
        price: newMobilePlan.price + addon.price
      }
    }
  })

  return newMobilePlan
}

const CompareTableBox = props => {
  const { classes } = props
  const finalThisPlan = calculatefinalPlan(props.thisPlan)
  const finalOtherPlan = calculatefinalPlan(props.otherPlan)

  if (props.dataType === 'data' || props.dataType === 'talktime' || props.dataType === 'sms') {
    const unit = props.dataType === 'data' ? ' GB' : props.dataType === 'talktime' ? ' min' : ''
    return <Box className={clsx(classes.tableData, finalThisPlan.planName !== '' && finalOtherPlan.planName !== '' && (finalThisPlan[`${props.dataType}`] > finalOtherPlan[`${props.dataType}`] ? classes.tableDataGood : finalThisPlan[`${props.dataType}`] < finalOtherPlan[`${props.dataType}`] && classes.tableDataBad))}>{finalThisPlan.planName !== '' && finalThisPlan[`${props.dataType}`] + unit}&nbsp;</Box>
  } else if (props.dataType === 'price') {
    return <Box className={clsx(classes.tableData, finalThisPlan.planName !== '' && finalOtherPlan.planName !== '' && (finalThisPlan[`${props.dataType}`] > finalOtherPlan[`${props.dataType}`] ? classes.tableDataBad : finalThisPlan[`${props.dataType}`] < finalOtherPlan[`${props.dataType}`] && classes.tableDataGood))}>{finalThisPlan.planName !== '' && '$' + finalThisPlan[`${props.dataType}`].toFixed(2)}&nbsp;</Box>
  } else if (props.dataType === '2yr_price') {
    return <Box className={clsx(classes.tableData, finalThisPlan.planName !== '' && finalOtherPlan.planName !== '' && (finalThisPlan['price'] > finalOtherPlan['price'] ? classes.tableDataBad : finalThisPlan['price'] < finalOtherPlan['price'] && classes.tableDataGood))}>{finalThisPlan.planName !== '' && '$' + (finalThisPlan['price'] * 24).toFixed(2)}&nbsp;</Box>
  }
}

export default withStyles(styles)(CompareTableBox)
