import React from 'react';
//import components
import { Button, Container, TextField, InputAdornment, Grid, Paper, Typography, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core'
//import styles
import { withStyles } from '@material-ui/core/styles';
//import redux
import { connect } from 'react-redux';
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
  },
  Paper: {
    padding: '32px 24px',
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  question: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  Button: {
    padding: '14px 24px',
  },
  FormGroupGrid: {
    paddingTop: '0 !important',
  },
});

class SelectSelfOptions extends React.Component {
  componentDidMount () {
    this.props.setOptions({
        minData: 0,
        minTalktime: 0,
        minSMS: 0,
        price: 0,
      }
    );
  }

  handleChange = (event, option) => {
    const newOptions = this.props.options;
    newOptions[`${option}`] = event.target.value;
    this.props.setOptions(newOptions);
  }

  render () {
    const { classes } = this.props;
    return (
      <Container className={classes.outerContainer} maxWidth={false}>
        <Container maxWidth='lg'>
          <Paper className={classes.Paper}>
            <Grid container spacing={2}>
              <Grid item xs={12}><Typography variant='h4' gutterBottom={true}>Find the best mobile plan for your needs.</Typography></Grid>
              <Grid item className={classes.question} xs={12}>I need at least:</Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  InputLabelProps={{
                    classes: {
                      root: classes.TextFieldLabel,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.TextField,
                      notchedOutline: classes.TextFieldNotchedOutline,
                    },
                    inputMode: 'numeric',
                    endAdornment:
                      <InputAdornment className={classes.InputAdornment} position='end' disableTypography={true}>GB</InputAdornment>,
                  }}
                  variant='outlined' label='Data' fullWidth={true} onChange={(event) => this.handleChange(event, 'minData')}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  InputLabelProps={{
                    classes: {
                      root: classes.TextFieldLabel,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.TextField,
                      notchedOutline: classes.TextFieldNotchedOutline,
                    },
                    inputMode: 'numeric',
                    endAdornment: <InputAdornment className={classes.InputAdornment} position='end' disableTypography={true}>min</InputAdornment>,
                  }}
                  variant='outlined' label='Talktime' fullWidth={true} onChange={(event) => this.handleChange(event, 'minTalktime')}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  InputLabelProps={{
                    classes: {
                      root: classes.TextFieldLabel,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.TextField,
                      notchedOutline: classes.TextFieldNotchedOutline,
                    },
                    inputMode: 'numeric',
                  }}
                  variant='outlined' label='SMS' fullWidth={true} onChange={(event) => this.handleChange(event, 'minSMS')}
                />
              </Grid>
              <Grid item className={classes.question} xs={12}>My monthly budget is:</Grid>
              <Grid item xs={12}>
                <TextField
                  InputLabelProps={{
                    classes: {
                      root: classes.TextFieldLabel,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.TextField,
                      notchedOutline: classes.TextFieldNotchedOutline,
                    },
                    inputMode: 'numeric',
                    startAdornment: <InputAdornment className={classes.InputAdornment} position='start' disableTypography={true}>$</InputAdornment>,
                  }}
                  variant='outlined' fullWidth={true} onChange={(event) => this.handleChange(event, 'price')}
                />
              </Grid>
              <Grid item className={classes.question} xs={12}>Length of contract:</Grid>
              <Grid className={classes.FormGroupGrid} item xs={12}>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox checked onChange={(event) => this.handleChange(event, 'planTypes')} value='No contract' />
                    }
                    label='No contract'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked onChange={(event) => this.handleChange(event, 'planTypes')} value='12 month contract' />
                    }
                    label='12 month contract'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked onChange={(event) => this.handleChange(event, 'planTypes')} value='24 month contract' />
                    }
                    label='24 month contract'
                  />
                </FormGroup>
              </Grid>
              <Grid item className={classes.question} xs={12}>Preferred service providers:</Grid>
              <Grid className={classes.FormGroupGrid} item xs={12}>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox checked onChange={(event) => this.handleChange(event, 'preferredTelcos')} value='Singtel' />
                    }
                    label='Singtel'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked onChange={(event) => this.handleChange(event, 'preferredTelcos')} value='Starhub' />
                    }
                    label='Starhub'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked onChange={(event) => this.handleChange(event, 'preferredTelcos')} value='M1' />
                    }
                    label='M1'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked onChange={(event) => this.handleChange(event, 'preferredTelcos')} value='Starhub' />
                    }
                    label='Starhub'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked onChange={(event) => this.handleChange(event, 'preferredTelcos')} value='Circles.Life' />
                    }
                    label='Circles.Life'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked onChange={(event) => this.handleChange(event, 'preferredTelcos')} value='Gomo' />
                    }
                    label='Gomo'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked onChange={(event) => this.handleChange(event, 'preferredTelcos')} value='Zero1' />
                    }
                    label='Zero1'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked onChange={(event) => this.handleChange(event, 'preferredTelcos')} value='Zero Mobile' />
                    }
                    label='Zero Moblie'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked onChange={(event) => this.handleChange(event, 'preferredTelcos')} value='MyRepublic' />
                    }
                    label='MyRepublic'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked onChange={(event) => this.handleChange(event, 'preferredTelcos')} value='TPG' />
                    }
                    label='TPG'
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <Button className={classes.Button} onClick={() => this.props.setIsShowResults(true)} variant='contained' size='large' color='primary'>Confirm</Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  options: state.options.options,
});

const mapDispatchToProps = dispatch => ({
  setOptions: options => dispatch(setOptions(options)),
  setIsShowResults: isShowResults=> dispatch(setIsShowResults(isShowResults)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SelectSelfOptions));