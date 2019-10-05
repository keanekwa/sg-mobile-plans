import React from 'react';
import { Button, Container, TextField, InputAdornment, Grid, Paper } from '@material-ui/core'
import ResultList from './ResultList'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  outerContainer: {
    paddingTop: 'calc(40vh - 168px)',
    transition: theme.transitions.create(
      ['padding'],
      { duration: 500 }
    ),
    background: `url(https://images.unsplash.com/photo-1562184647-dfdfb9c0bf3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9)`,
    backgroundSize: 'cover',
    height: '100vh',
  },
  outerContainerWithResultList: {
    paddingTop: '50px',
  },
  paper: {
    padding: '50px 30px',
    backgroundColor: 'rgba(255,255,255,0.8)',
  }
});

class SelectSelfOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minData: 0,
      minTalktime: 0,
      minSMS: 0,
      price: 0,
      showResultList: false,
    };
  }

  handleClick = () => {
    this.setState({ ['showResultList'] : false}, () => this.handleForceRefresh());
  }

  handleForceRefresh = () => {
    this.setState({
      ['showResultList'] : true,
      ['confirmedOptions'] : {
        minData: this.state.minData,
        minTalktime: this.state.minTalktime,
        minSMS: this.state.minSMS,
        price: this.state.price,
      }
    });
  }

  handleChange = (event, option) => {
    this.setState({ [option]: event.target.value });
  }

  render () {
    const { classes } = this.props;
    return (
      <Container className={!this.state.showResultList ? classes.outerContainer : classes.outerContainer + ' ' + classes.outerContainerWithResultList} maxWidth={false}>
        <Container maxWidth='lg'>
          <Grid container spacing='2'>
            <Grid item xs='12' sm='6'>
              <h1>What if you weren't restricted by your mobile plan?</h1>
            </Grid>
            <Grid item xs='12' sm='6'>
              <Paper className={classes.paper}>
                <Grid container spacing='2'>
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
                    <Button className={classes.Button} onClick={() => this.handleClick()} variant='contained' size='large' color='primary'>Confirm</Button>
                  </Grid>
                  {
                    this.state.showResultList && (
                      <Grid item xs='12'>
                        <ResultList optionsSelected={this.state.confirmedOptions}/>
                      </Grid>
                    )
                  }
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Container>
    );
  }
}

export default withStyles(styles)(SelectSelfOptions);

