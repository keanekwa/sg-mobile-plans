import React from 'react'
//import data
import mobilePlanData from '../../data/mobilePlanData'
import addonsData from '../../data/addonsData'
//import components
import { Select, Box, Button, Typography, MenuItem } from '@material-ui/core'
//import styles
import { withStyles } from '@material-ui/core/styles'
//import redux
import { connect } from 'react-redux'
import { setComparePlans, setPlanOptions, setAddonOptions } from '../../redux/compare/compare-actions'

const styles = theme => ({
  addons: {
    marginTop: '20px'
  },
  addonTypography: {
    marginRight: '10px',
    fontWeight: 700
  }
})

const SelectAddons = props => {
  const { classes } = props

  const handleAddAddon = planNumber => {
    const addonsForPlan = addonsData.filter(addon => addon.appliesToTelco === props.comparePlans[`${planNumber}`].mobilePlan.telco && (addon.appliesToPlans === 'All' || addon.appliesToPlans.includes(props.comparePlans[`${planNumber}`].mobilePlan.planName))) //find suitable addons, i.e. those that apply to entire telco or those that only apply
    const additionalAddonOptions = props.addonOptions[`${planNumber}`]
    additionalAddonOptions.push(addonsForPlan)
    const newAddonOptions = {
      ...props.addonOptions,
      [`${planNumber}`]: additionalAddonOptions
    }
    props.setAddonOptions(newAddonOptions)
  }

  return (
    <Box className={classes.addons}>
      <Typography className={classes.addonTypography} variant="body1" display="inline">
        With addons:
      </Typography>
      <Button disabled={props.comparePlans[`${props.planNumber}`].mobilePlan.planName === ''} size="small" color="primary" variant="outlined" onClick={() => handleAddAddon(props.planNumber)}>
        {props.addonOptions.length !== 0 ? <Box>Add</Box> : <Box>No Suitable Addons</Box>}
      </Button>
      {props.addonOptions[`${props.planNumber}`].map(addonOptions => (
        <Select key={addonOptions}>
          {addonOptions.map(addonOption => (
            <MenuItem key={addonOption.addonName}>{addonOption.addonName}</MenuItem>
          ))}
        </Select>
      ))}
    </Box>
  )
  //todo: map selects. one dropdown each with cross to delete. each dropdown should have the suitable addons calculated
}

const mapStateToProps = state => ({
  comparePlans: state.compare.comparePlans,
  planOptions: state.compare.planOptions,
  addonOptions: state.compare.addonOptions
})

const mapDispatchToProps = dispatch => ({
  setComparePlans: comparePlans => dispatch(setComparePlans(comparePlans)),
  setPlanOptions: planOptions => dispatch(setPlanOptions(planOptions)),
  setAddonOptions: addonOptions => dispatch(setAddonOptions(addonOptions))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SelectAddons))
