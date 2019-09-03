import React from 'react';
import { Button } from '@material-ui/core';

function NextButton(props) {
  return (
    <Button onClick={props.onClick} variant='contained'>Next</Button>
  );
}

export default NextButton;