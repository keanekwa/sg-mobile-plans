import React from 'react'
import clsx from 'clsx'
//import components
import { Box, Button, Typography, Chip } from '@material-ui/core'
//import styles
import { withStyles } from '@material-ui/core/styles'
import { teal, orange } from '@material-ui/core/colors'
//import redux
import { connect } from 'react-redux'
import { setResultSelected, setIsShowMobileResultDetails } from '../../../redux/results/results-actions'

const styles = theme => ({
  Result: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid ' + theme.palette.secondary.light,
    textTransform: 'none',
    borderRadius: '0',
    padding: '1rem 1.5rem',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
      borderBottom: '1px solid ' + theme.palette.primary.light
    }
  },
  ResultSelected: {
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
      borderBottom: '1px solid ' + theme.palette.primary.dark
    }
  },
  ResultLeft: {
    maxWidth: '70%',
    textAlign: 'left'
  },
  Chip: {
    marginTop: '0.3rem'
  },
  resultChipNoContract: {
    backgroundColor: teal[100],
    color: teal[900]
  },
  resultChipWithContract: {
    backgroundColor: orange[100],
    color: orange[900]
  },
  price: {
    alignSelf: 'flex-start',
    fontSize: '1.1rem'
  }
})

const Result = props => {
  const { classes } = props
  return (
    <Button
      className={clsx(classes.Result, props.resultSelected === props.mobilePlan && classes.ResultSelected)}
      fullWidth={true}
      onClick={() => {
        props.setResultSelected(props.mobilePlan)
        props.setIsShowMobileResultDetails(true)
      }}
    >
      <Box className={classes.ResultLeft}>
        <Typography variant="h6">
          {props.mobilePlan.telco} {props.mobilePlan.planName}
        </Typography>
        {props.mobilePlan.addons !== undefined && props.mobilePlan.addons !== [] && (
          <Box>
            Combine with addons:{' '}
            {props.mobilePlan.addons.map(addon => (
              <Box key={addon.addonName}>
                {addon.addonName} Addon (x{addon.addonMultiple}){' '}
              </Box>
            ))}
          </Box>
        )}
        <Box>
          {props.mobilePlan.data} GB &#124; {props.mobilePlan.talktime} min &#124; {props.mobilePlan.sms} SMS
        </Box>
        <Chip className={clsx(classes.Chip, props.mobilePlan.planType === 'No contract' ? classes.resultChipNoContract : classes.resultChipWithContract)} size="small" label={props.mobilePlan.planType} />
      </Box>
      <Box className={classes.price}>
        ${props.mobilePlan.price.toFixed(2)}
        <Typography variant="caption"> &frasl; mth</Typography>
      </Box>
    </Button>
  )
}

const mapStateToProps = state => ({
  resultSelected: state.results.resultSelected
})

const mapDispatchToProps = dispatch => ({
  setResultSelected: resultSelected => dispatch(setResultSelected(resultSelected)),
  setIsShowMobileResultDetails: isShowMobileResultDetails => dispatch(setIsShowMobileResultDetails(isShowMobileResultDetails))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Result))
