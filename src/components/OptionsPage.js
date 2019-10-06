import React from 'react';
import { Button, Container, TextField, InputAdornment, Grid, Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  outerContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: `url(https://firebasestorage.googleapis.com/v0/b/telco-comparison.appspot.com/o/background.jpg?alt=media&token=06710f10-1913-479e-a76b-eea90797bdf2) center`, //todo: resize for different screen sizes
    backgroundSize: 'cover',
  },
  paper: {
    padding: '32px 24px',
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
});

class SelectSelfOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minData: 0,
      minTalktime: 0,
      minSMS: 0,
      price: 0,
      showResultsList: false,
    };
  }

  handleChange = (event, option) => {
    this.setState({ [option]: event.target.value });
  }

  render () {
    const { classes } = this.props;
    return (
      <Container className={classes.outerContainer} maxWidth={false}>
        <Container maxWidth='lg'>
          <Typography variant='h4' gutterBottom={true}>What do you need?</Typography><br/>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item xs='12'>I need at least:</Grid>
              <Grid item xs='12' sm='4'>
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
              <Grid item xs='12'sm='4'>
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
              <Grid item xs='12'sm='4'>
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
              <Grid item xs='12'>My monthly budget is:</Grid>
              <Grid item xs='12'>
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
              <Grid item xs='12'>
                <Button className={classes.Button} onClick={() => this.props.history.push('/results')} variant='contained' size='large' color='primary'>Confirm</Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Container>
    );
  }
}

export default withStyles(styles)(SelectSelfOptions);

