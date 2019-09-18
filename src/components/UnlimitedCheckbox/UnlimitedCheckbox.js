import React from 'react';
import { makeStyles } from '@material-ui/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {

  },
}));

export default function OptionSlider(props) {
  const classes = useStyles();  
  const [state, setState] = React.useState({
    checked: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            className={classes.root}
            checked={state.checked}
            onChange={handleChange('checked')}
            onClick={props.onClick}
            value="checked"
          />
        }
        label="Unlimited"
      />
    </FormGroup>
  );
}