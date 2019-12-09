import React from 'react'
//import data
import addonsData from '../../data/addonsData'
//import components
import { Box, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
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
  },
  formControl: {
    minWidth: '200px',
    width: '100%',
    margin: '4px 0'
  }
})

const SelectAddons = props => {
  const { classes } = props

  const handleAddAddon = planNumber => {
    if (props.addonOptions[`${planNumber}`] === [] || props.addonOptions[`${planNumber}`].slice(-1)[0] !== []) {
      const addonsForPlan = addonsData.filter(addon => addon.appliesToTelco === props.comparePlans[`${planNumber}`].mobilePlan.telco && (addon.appliesToPlans === 'All' || addon.appliesToPlans.includes(props.comparePlans[`${planNumber}`].mobilePlan.planName))) //find suitable addons, i.e. those that apply to entire telco or those that only apply
      const additionalAddonOptions = props.addonOptions[`${planNumber}`]
      additionalAddonOptions.push(addonsForPlan)
      const newAddonOptions = {
        ...props.addonOptions,
        [`${planNumber}`]: additionalAddonOptions
      }
      props.setAddonOptions(newAddonOptions)
    }
  }

  let addonNumber = 0
  const handleChange = (event, planNumber, addonNumber) => {
    const newAddons = Array.from(props.comparePlans[`${planNumber}`].addons)
    newAddons[addonNumber - 1] = event.target.value
    console.log(event)
    props.setComparePlans({
      ...props.comparePlans,
      [`${planNumber}`]: {
        ...props.comparePlans[`${planNumber}`],
        addons: newAddons
      }
    })
  }

  return (
    <Box className={classes.addons}>
      <Typography className={classes.addonTypography} variant="body1" display="inline">
        With addons:
      </Typography>
      <Button disabled={props.comparePlans[`${props.planNumber}`].mobilePlan.planName === ''} size="small" color="primary" variant="outlined" onClick={() => handleAddAddon(props.planNumber)}>
        {props.addonOptions.length !== 0 ? <Box>Add</Box> : <Box>No Suitable Addons</Box>}
      </Button>
      {props.addonOptions[`${props.planNumber}`].length !== 0 &&
        (props.addonOptions[`${props.planNumber}`][0].length !== 0 ? (
          props.addonOptions[`${props.planNumber}`].map(addonOptions => {
            addonNumber += 1
            return (
              <FormControl className={classes.formControl}>
                <InputLabel>Addon {addonNumber}</InputLabel>
                <Select key={addonOptions} value={props.comparePlans[`${props.planNumber}`].addons[addonNumber]} onChange={event => handleChange(event, props.planNumber, addonNumber)}>
                  {addonOptions.map(addonOption => (
                    <MenuItem key={addonOption.addonName} value={addonOption.addonName}>
                      {addonOption.addonName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )
          })
        ) : (
          <FormControl className={classes.formControl} disabled>
            <InputLabel>No Suitable Addons</InputLabel>
            <Select value=""></Select>
          </FormControl>
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
