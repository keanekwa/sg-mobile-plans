import React from 'react';
import { Button } from '@material-ui/core';

function NextQuestionButton(props) {
  return (
    <Button onClick={props.onClick} variant='contained'>Next</Button>
  );
}

export default NextQuestionButton;