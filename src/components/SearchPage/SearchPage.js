import React from 'react'
//import components
import { Button, Container, TextField, InputAdornment, Grid, Paper, Typography, FormGroup, FormControlLabel, Checkbox, Box, Link, Fade } from '@material-ui/core'
import SearchResultsPage from './SearchResultsPage/SearchResultsPage'
//import styles
import { withStyles } from '@material-ui/core/styles'
//import redux
import { connect } from 'react-redux'
import { setOptions } from '../../redux/options/options-actions'
import { setIsShowResults } from '../../redux/results/results-actions'

const styles = theme => ({
  outerContainer: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: `url(https://firebasestorage.googleapis.com/v0/b/telco-comparison.appspot.com/o/background.jpg?alt=media&token=06710f10-1913-479e-a76b-eea90797bdf2) center`, //todo: resize for different screen sizes
    backgroundSize: 'cover',
    padding: '40px 0',
    position: 'relative'
  },
  Paper: {
    padding: '32px 24px',
    backgroundColor: 'rgba(255,255,255,0.8)'
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
  },
  footnote: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    color: theme.palette.common.white
  },
  footnoteLink: {
    color: theme.palette.common.white
  }
})

const SearchPage = props => {
  const { classes } = props

  const handleChange = (event, option) => {
    const newOptions = props.options
    if (option === 'planTypes' || option === 'telcos') {
      newOptions[`${option}`].forEach(subOption => {
        if (subOption.value === event.target.value) {
          subOption.isChecked = event.target.checked
        }
      })
    } else {
      newOptions[`${option}`] = event.target.value
    }
    props.setOptions(newOptions)
  }

  return (
    <Fade in={true} timeout={500} mountOnEnter unmountOnExit>
      <Container className={classes.outerContainer} maxWidth={false}>
        <Container maxWidth="lg">
          <Paper className={classes.Paper}>
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
                  InputLabelProps={{
                    classes: {
                      root: classes.TextFieldLabel
                    }
                  }}
                  InputProps={{
                    classes: {
                      root: classes.TextField,
                      notchedOutline: classes.TextFieldNotchedOutline
                    },
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
                  defaultValue={props.options.minData !== 0 && props.options.minData}
                  fullWidth={true}
                  onChange={event => handleChange(event, 'minData')}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  InputLabelProps={{
                    classes: {
                      root: classes.TextFieldLabel
                    }
                  }}
                  InputProps={{
                    classes: {
                      root: classes.TextField,
                      notchedOutline: classes.TextFieldNotchedOutline
                    },
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
                  defaultValue={props.options.minTalktime !== 0 && props.options.minTalktime}
                  fullWidth={true}
                  onChange={event => handleChange(event, 'minTalktime')}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  InputLabelProps={{
                    classes: {
                      root: classes.TextFieldLabel
                    }
                  }}
                  InputProps={{
                    classes: {
                      root: classes.TextField,
                      notchedOutline: classes.TextFieldNotchedOutline
                    },
                    inputMode: 'numeric'
                  }}
                  type="number"
                  variant="outlined"
                  label="SMS"
                  defaultValue={props.options.minSMS !== 0 && props.options.minSMS}
                  fullWidth={true}
                  onChange={event => handleChange(event, 'minSMS')}
                />
              </Grid>
              <Grid item className={classes.question} xs={12}>
                My monthly budget is:
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputLabelProps={{
                    classes: {
                      root: classes.TextFieldLabel
                    }
                  }}
                  InputProps={{
                    classes: {
                      root: classes.TextField,
                      notchedOutline: classes.TextFieldNotchedOutline
                    },
                    inputMode: 'numeric',
                    startAdornment: (
                      <InputAdornment className={classes.InputAdornment} position="start" disableTypography={true}>
                        $
                      </InputAdornment>
                    )
                  }}
                  type="number"
                  variant="outlined"
                  defaultValue={props.options.price !== 0 && props.options.price}
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
              <Grid item xs={12}>
                <Button className={classes.Button} onClick={() => props.setIsShowResults(true)} variant="contained" size="large" color="primary">
                  Confirm
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Box className={classes.footnote}>
          Last updated on 31 Oct 2019. Designed by{' '}
          <Link target="_blank" className={classes.footnoteLink} href="https://keanekwa.com">
            Keane Kwa
          </Link>
          .
        </Box>
        <SearchResultsPage />
      </Container>
    </Fade>
  )
}

const mapStateToProps = state => ({
  options: state.options.options
})

const mapDispatchToProps = dispatch => ({
  setOptions: options => dispatch(setOptions(options)),
  setIsShowResults: isShowResults => dispatch(setIsShowResults(isShowResults))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SearchPage))
