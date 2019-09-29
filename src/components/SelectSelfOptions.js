import React from 'react';
import { Button, Container, TextField, InputAdornment, Grid } from '@material-ui/core'
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
    this.setState({ ['showResultList'] : true, ['confirmedOptions'] : {
      minData: this.state.minData,
      minTalktime: this.state.minTalktime,
      minSMS: this.state.minSMS,
      price: this.state.price,
    }});
  }

  handleChange = (event, option) => {
    this.setState({ [option]: event.target.value });
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
              variant='outlined' label='Min. Data' fullWidth={true} onChange={(event) => this.handleChange(event, 'minData')}
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
              variant='outlined' label='Min. Talktime' fullWidth={true} onChange={(event) => this.handleChange(event, 'minTalktime')}
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
              variant='outlined' label='Min. SMS' fullWidth={true} onChange={(event) => this.handleChange(event, 'minSMS')}
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
            <Button onClick={() => this.handleClick()} variant='outlined' size='large' color='primary'>Confirm</Button>
            {
              this.state.showResultList &&
              <ResultList optionsSelected={this.state.confirmedOptions} />
            }
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(SelectSelfOptions);

