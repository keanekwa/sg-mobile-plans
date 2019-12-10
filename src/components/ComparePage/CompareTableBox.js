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

const CompareTableBox = props => {
  const { classes } = props

  if (props.dataType === 'data' || props.dataType === 'talktime' || props.dataType === 'sms') {
    const unit = props.dataType === 'data' ? ' GB' : props.dataType === 'talktime' ? ' min' : ''
    return <Box className={clsx(classes.tableData, props.thisMobilePlan.planName !== '' && props.otherMobilePlan.planName !== '' && (props.thisMobilePlan[`${props.dataType}`] > props.otherMobilePlan[`${props.dataType}`] ? classes.tableDataGood : props.thisMobilePlan[`${props.dataType}`] < props.otherMobilePlan[`${props.dataType}`] && classes.tableDataBad))}>{props.thisMobilePlan.planName !== '' && props.thisMobilePlan[`${props.dataType}`] + unit}&nbsp;</Box>
  } else if (props.dataType === 'price') {
    return <Box className={clsx(classes.tableData, props.thisMobilePlan.planName !== '' && props.otherMobilePlan.planName !== '' && (props.thisMobilePlan[`${props.dataType}`] > props.otherMobilePlan[`${props.dataType}`] ? classes.tableDataBad : props.thisMobilePlan[`${props.dataType}`] < props.otherMobilePlan[`${props.dataType}`] && classes.tableDataGood))}>{props.thisMobilePlan.planName !== '' && '$' + props.thisMobilePlan[`${props.dataType}`].toFixed(2)}&nbsp;</Box>
  } else if (props.dataType === '2yr_price') {
    return <Box className={clsx(classes.tableData, props.thisMobilePlan.planName !== '' && props.otherMobilePlan.planName !== '' && (props.thisMobilePlan['price'] > props.otherMobilePlan['price'] ? classes.tableDataBad : props.thisMobilePlan['price'] < props.otherMobilePlan['price'] && classes.tableDataGood))}>{props.thisMobilePlan.planName !== '' && '$' + (props.thisMobilePlan['price'] * 24).toFixed(2)}&nbsp;</Box>
  }
}

export default withStyles(styles)(CompareTableBox)
