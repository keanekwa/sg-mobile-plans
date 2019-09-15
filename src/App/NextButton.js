import React from 'react';
import { Button } from '@material-ui/core';

export default function NextButton(props) {
  return (
    <Button onClick={props.onClick} variant='contained'>Next</Button>
  );
}