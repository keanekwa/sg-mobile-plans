import React from 'react';
import { Button, Container, Box, TextField, InputAdornment, Grid } from '@material-ui/core'
import ResultList from './ResultList'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  TextField: {
    color: `${theme.palette.primary.main}`,
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.primary.main} !important`,
      borderRadius: 0,
    }
  },
  TextFieldLabel: {
    color: `${theme.palette.primary.main}`,
  },
  TextFieldNotchedOutline: {
    borderWidth: '1px',
    borderColor: `${theme.palette.primary.main} !important`,
    borderRadius: 0,
  },
  InputAdornment: {
    color: `${theme.palette.primary.main} !important`,
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
    }
  }

  handleClick = () => {
    this.setState({ ['showResultList']: true });
    return <ResultList optionsSelected={this.state}/>;
  }

  render () {
    const { classes } = this.props;
    return (
      <Container maxWidth='md'>
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
              variant='outlined' label='Min. Data' fullWidth={true} onChange={(event) => this.setState({ ['minData']: event.target.value })}
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
              variant='outlined' label='Min. Talktime' fullWidth={true} onChange={(event) => this.setState({ ['minTalktime']: event.target.value })}
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
              variant='outlined' label='Min. SMS' fullWidth={true} onChange={(event) => this.setState({ ['minSMS']: event.target.value })}
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
              variant='outlined' fullWidth={true} onChange={(event) => this.setState({ ['price']: event.target.value })}
            />
          </Grid>
          <Grid item xs='12'>
            {
              !this.state.showResultList &&
              <Button
                onClick={() => this.handleClick()}
                variant='outlined'
                size='large'
                color='primary'>Next
              </Button>
            } 
            {
              this.state.showResultList &&
              <ResultList
                optionsSelected={this.state}
              />
            }
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(SelectSelfOptions);

