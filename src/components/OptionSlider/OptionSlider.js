import React from 'react';
import { Slider } from '@material-ui/core';
import './OptionSlider.scss'

export default function OptionSlider(props) {
  return (
    <div class='OptionSlider'>
      <Slider
        defaultValue={props.defaultValue}
        step={props.step}
        valueLabelDisplay='on'
        valueLabelFormat={props.valueLabelFormat}
        min={props.min}
        max={props.max}
        onChangeCommitted={(event, value) => props.onChangeCommitted(event, value)}
      />
    </div>
  );
}