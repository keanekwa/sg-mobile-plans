import React from 'react'
//import data
import addonsData from '../../data/addonsData'
//import components
import { Box, IconButton, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
//import styles
import { withStyles } from '@material-ui/core/styles'
import CancelIcon from '@material-ui/icons/Cancel'
//import redux
import { connect } from 'react-redux'
import { setComparePlans, setPlanOptions, setAddonOptions, setIsNoMoreAddons } from '../../redux/compare/compare-actions'

const styles = theme => ({
  addons: {
    marginTop: '20px'
  },
  addonTypography: {
    marginRight: '10px',
    fontWeight: 700
  },
  formControl: {
    width: '100%',
    margin: '4px 0',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  select: {
    flex: 1
  },
  cancelButton: {
    marginLeft: '6px'
  }
})

const SelectAddons = props => {
  const { classes } = props

  //find suitable addons, i.e. those that apply to entire telco or those that only apply to the plan
  const addonsForPlan = addonsData.filter(addon => addon.appliesToTelco === props.comparePlans[`${props.planNumber}`].mobilePlan.telco && (addon.appliesToPlans === 'All' || addon.appliesToPlans.includes(props.comparePlans[`${props.planNumber}`].mobilePlan.planName)))

  const handleAddAddon = planNumber => {
    //find addons that have already been selected in ComparePage
    const addonsAlreadySelected = props.comparePlans[`${planNumber}`].addons
    //suitable addons are those that are not already selected, unless they have the property keepAdding set to true
    const suitableAddons = addonsForPlan.filter(addon => !(addonsAlreadySelected.includes(addon) && addon.keepAdding !== true))
    //create a new array of addon options for the next dropdown
    const newAddonOptionsForPlan = props.addonOptions[`${planNumber}`]
    //push the array into redux
    newAddonOptionsForPlan.push(suitableAddons)
    const newAddonOptions = {
      ...props.addonOptions,
      [`${planNumber}`]: newAddonOptionsForPlan
    }
    props.setAddonOptions(newAddonOptions)
  }

  let addonNumber = 0
  const handleSelectAddon = (event, planNumber, addonNumber) => {
    const newAddons = Array.from(props.comparePlans[`${planNumber}`].addons)
    const newAddon = addonsData.find(addon => addon.addonName === event.target.value && addon.appliesToTelco === props.comparePlans[`${planNumber}`].mobilePlan.telco)
    newAddons[addonNumber - 1] = newAddon
    props.setComparePlans({
      ...props.comparePlans,
      [`${planNumber}`]: {
        ...props.comparePlans[`${planNumber}`],
        addons: newAddons
      }
    })
    //if the newAddon is mutually exclusive or there are no more addons to add, disallow additional addons
    if (newAddon.mutuallyExclusive === true || (props.addonOptions[`${planNumber}`].slice(-1)[0].length === 1 && newAddon.keepAdding !== true)) {
      props.setIsNoMoreAddons({
        ...props.isNoMoreAddons,
        [`${planNumber}`]: true
      })
    }
  }

  const handleDeleteAddon = () => {
    const newAddons = Array.from(props.comparePlans[`${props.planNumber}`].addons)
    newAddons.splice(newAddons.length - 1, 1)
    props.setComparePlans({
      ...props.comparePlans,
      [`${props.planNumber}`]: {
        ...props.comparePlans[`${props.planNumber}`],
        addons: newAddons
      }
    })
    const newAddonOptions = Array.from(props.addonOptions[`${props.planNumber}`])
    newAddonOptions.splice(newAddonOptions.length - 1, 1)
    props.setAddonOptions({
      ...props.addonOptions,
      [`${props.planNumber}`]: newAddonOptions
    })
    props.isNoMoreAddons[`${props.planNumber}`] === true &&
      props.setIsNoMoreAddons({
        ...props.isNoMoreAddons,
        [`${props.planNumber}`]: false
      })
  }

  return (
    <Box className={classes.addons}>
      <Typography className={classes.addonTypography} variant="body1" display="inline">
        With addons:
      </Typography>
      <Button disabled={props.comparePlans[`${props.planNumber}`].mobilePlan.planName === '' || props.addonOptions[`${props.planNumber}`].length > props.comparePlans[`${props.planNumber}`].addons.length || props.isNoMoreAddons[`${props.planNumber}`] === true || addonsForPlan.length === 0} size="small" color="primary" variant="outlined" onClick={() => handleAddAddon(props.planNumber)}>
        {props.isNoMoreAddons[`${props.planNumber}`] === true ? <Box>No more suitable addons</Box> : addonsForPlan.length === 0 ? <Box>No suitable addons</Box> : <Box>Add</Box>}
      </Button>
      {props.addonOptions[`${props.planNumber}`].length !== 0 &&
        props.addonOptions[`${props.planNumber}`][0].length !== 0 &&
        props.addonOptions[`${props.planNumber}`].map(addonOptions => {
          addonNumber += 1
          return (
            <FormControl key={addonNumber} className={classes.formControl}>
              <InputLabel>Addon {addonNumber}</InputLabel>
              <Select className={classes.select} defaultValue="" onChange={event => handleSelectAddon(event, props.planNumber, addonNumber)}>
                {addonOptions.map(addonOption => (
                  <MenuItem key={addonOption.addonName} value={addonOption.addonName}>
                    {addonOption.addonName}
                  </MenuItem>
                ))}
              </Select>
              {props.addonOptions[`${props.planNumber}`].length === addonNumber && (
                <IconButton size="small" className={classes.cancelButton} aria-label="Delete Addon" value={addonNumber} onClick={() => handleDeleteAddon()}>
                  <CancelIcon />
                </IconButton>
              )}
            </FormControl>
          )
        })}
    </Box>
  )
}

const mapStateToProps = state => ({
  comparePlans: state.compare.comparePlans,
  planOptions: state.compare.planOptions,
  addonOptions: state.compare.addonOptions,
  isNoMoreAddons: state.compare.isNoMoreAddons
})

const mapDispatchToProps = dispatch => ({
  setComparePlans: comparePlans => dispatch(setComparePlans(comparePlans)),
  setPlanOptions: planOptions => dispatch(setPlanOptions(planOptions)),
  setAddonOptions: addonOptions => dispatch(setAddonOptions(addonOptions)),
  setIsNoMoreAddons: isNoMoreAddons => dispatch(setIsNoMoreAddons(isNoMoreAddons))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SelectAddons))
