import React from 'react';
import { Button } from '@material-ui/core';

export default function Option(props) {
  return (
    <li className='option'>
      <Button variant='contained' onClick={props.onClick}>{props.value}</Button>
    </li>
  );
}