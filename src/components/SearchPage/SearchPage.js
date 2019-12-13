import React, { useState } from 'react'
//import components
import { Button, Container, TextField, InputAdornment, Grid, Typography, FormGroup, FormControlLabel, Tooltip, Checkbox, Box, ClickAwayListener, Slide, AppBar, Toolbar, IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
//import styles
import { withStyles } from '@material-ui/core/styles'
//import redux
import { connect } from 'react-redux'
import { setIsShowSearch, setOptions } from '../../redux/search/search-actions'
import { setIsShowResults } from '../../redux/results/results-actions'

const styles = theme => ({
  outermostBox: {
    position: 'absolute',
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    top: 0,
    right: 0,
    backgroundColor: theme.palette.common.white,
    zIndex: 2
  },
  outerContainer: {
    flex: 1,
    padding: '40px',
    overflow: 'auto'
  },
  question: {
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  Button: {
    padding: '14px 24px'
  },
  planTypeGrid: {
    padding: '8px 8px 0 8px !important'
  }
})

const SearchPage = props => {
  const { classes } = props

  const handleChange = (event, option) => {
    let newOptions = props.options
    if (option === 'planTypes' || option === 'telcos' || option === 'specialOptions') {
      newOptions[`${option}`].forEach(subOption => {
        if (subOption.value === event.target.value) {
          subOption.isChecked = event.target.checked
        }
      })
    } else {
      newOptions = {
        ...newOptions,
        [`${option}`]: event.target.value
      }
    }
    props.setOptions(newOptions)
  }

  const [isMinDataError, setIsMinDataError] = useState(false)
  const [isMinTalktimeError, setIsMinTalktimeError] = useState(false)
  const [isMinSMSError, setIsMinSMSError] = useState(false)
  const [isPriceError, setIsPriceError] = useState(false)

  const handleSearchButtonClick = () => {
    //check if any of the fields have not been filled in
    props.options.minData === '' ? setIsMinDataError(true) : isMinDataError && setIsMinDataError(false)
    props.options.minTalktime === '' ? setIsMinTalktimeError(true) : isMinTalktimeError && setIsMinTalktimeError(false)
    props.options.minSMS === '' ? setIsMinSMSError(true) : isMinSMSError && setIsMinSMSError(false)
    props.options.price === '' ? setIsPriceError(true) : isPriceError && setIsPriceError(false)

    props.options.minData !== '' && props.options.minTalktime !== '' && props.options.minSMS !== '' && props.options.price !== '' && props.setIsShowResults(true)
  }

  return (
    <Slide direction="left" in={props.isShowSearch && !props.isShowResults} timeout={500} mountOnEnter unmountOnExit>
      <ClickAwayListener onClickAway={() => props.setIsShowSearch(false)}>
        <Box className={classes.outermostBox}>
          <AppBar className={classes.AppBar} position="sticky">
            <Toolbar>
              <IconButton color="inherit" onClick={() => props.setIsShowSearch(false)}>
                <ArrowBackIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Container className={classes.outerContainer} maxWidth="md">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4" gutterBottom={true}>
                  Find the best mobile plan for your needs.
                </Typography>
              </Grid>
              <Grid item className={classes.question} xs={12}>
                I need at least:
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  error={isMinDataError}
                  helperText={isMinDataError && 'Please enter a valid number.'}
                  InputProps={{
                    inputMode: 'numeric',
                    endAdornment: (
                      <InputAdornment className={classes.InputAdornment} position="end" disableTypography={true}>
                        GB
                      </InputAdornment>
                    )
                  }}
                  type="number"
                  variant="outlined"
                  label="Data"
                  value={props.options.minData}
                  fullWidth={true}
                  onChange={event => handleChange(event, 'minData')}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Tooltip placement="top" title="You can set this as 0 if you don't require talktime.">
                  <TextField
                    error={isMinTalktimeError}
                    helperText={isMinTalktimeError && 'Please enter a valid number.'}
                    InputProps={{
                      inputMode: 'numeric',
                      endAdornment: (
                        <InputAdornment className={classes.InputAdornment} position="end" disableTypography={true}>
                          min
                        </InputAdornment>
                      )
                    }}
                    type="number"
                    variant="outlined"
                    label="Talktime"
                    value={props.options.minTalktime}
                    fullWidth={true}
                    onChange={event => handleChange(event, 'minTalktime')}
                  />
                </Tooltip>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Tooltip placement="top" title="You can set this as 0 if you don't require SMS.">
                  <TextField
                    error={isMinSMSError}
                    helperText={isMinSMSError && 'Please enter a valid number.'}
                    InputProps={{
                      inputMode: 'numeric'
                    }}
                    type="number"
                    variant="outlined"
                    label="SMS"
                    value={props.options.minSMS}
                    fullWidth={true}
                    onChange={event => handleChange(event, 'minSMS')}
                  />
                </Tooltip>
              </Grid>
              <Grid item className={classes.question} xs={12}>
                My monthly budget is:
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={isPriceError}
                  helperText={isPriceError && 'Please enter a valid budget.'}
                  InputProps={{
                    inputMode: 'numeric',
                    startAdornment: (
                      <InputAdornment className={classes.InputAdornment} position="start" disableTypography={true}>
                        $
                      </InputAdornment>
                    )
                  }}
                  type="number"
                  variant="outlined"
                  value={props.options.price}
                  fullWidth={true}
                  onChange={event => handleChange(event, 'price')}
                />
              </Grid>
              {props.options.planTypes !== undefined && (
                <Grid item xs={12} className={classes.planTypeGrid}>
                  <Box className={classes.question}>Length of contract:</Box>
                  <FormGroup row>
                    {props.options.planTypes.map(planType => {
                      return <FormControlLabel key={planType.value} control={<Checkbox defaultChecked={planType.isChecked} value={planType.value} onChange={event => handleChange(event, 'planTypes')} />} label={planType.value} />
                    })}
                  </FormGroup>
                </Grid>
              )}
              {props.options.telcos !== undefined && (
                <Grid item xs={12}>
                  <Box className={classes.question}>Preferred telcos:</Box>
                  <FormGroup row>
                    {props.options.telcos.map(telco => {
                      return <FormControlLabel key={telco.value} control={<Checkbox defaultChecked={telco.isChecked} value={telco.value} onChange={event => handleChange(event, 'telcos')} />} label={telco.value} />
                    })}
                  </FormGroup>
                </Grid>
              )}
              {props.options.specialOptions !== undefined && (
                <Grid item xs={12}>
                  <Box className={classes.question}>Include plans applicable for:</Box>
                  <FormGroup row>
                    {props.options.specialOptions.map(specialOption => {
                      return <FormControlLabel key={specialOption.value} control={<Checkbox defaultChecked={specialOption.isChecked} value={specialOption.value} onChange={event => handleChange(event, 'specialOptions')} />} label={specialOption.value} />
                    })}
                  </FormGroup>
                </Grid>
              )}
              <Grid item xs={12}>
                <Button className={classes.Button} onClick={() => handleSearchButtonClick()} variant="contained" size="large" color="primary">
                  Search
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ClickAwayListener>
    </Slide>
  )
}

const mapStateToProps = state => ({
  isShowSearch: state.search.isShowSearch,
  isShowResults: state.results.isShowResults,
  options: state.search.options
})

const mapDispatchToProps = dispatch => ({
  setOptions: options => dispatch(setOptions(options)),
  setIsShowSearch: isShowSearch => dispatch(setIsShowSearch(isShowSearch)),
  setIsShowResults: isShowResults => dispatch(setIsShowResults(isShowResults))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchPage))
