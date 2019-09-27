import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function UnlimitedCheckbox(props) {
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
            checked={state.checked}
            onChange={handleChange('checked')}
            onClick={props.onClick}
            color='primary'
          />
        }
        label="Unlimited"
      />
    </FormGroup>
  );
}