import React from 'react';
import { Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '3rem 0 0 0',
  },
}));

export default function OptionSlider(props) {
  const styles = useStyles();

  return (
    <Slider
      className={styles.root}
      defaultValue={props.defaultValue}
      step={props.step}
      valueLabelDisplay='on'
      valueLabelFormat={props.valueLabelFormat}
      min={props.min}
      max={props.max}
      onChangeCommitted={(event, value) => props.onChangeCommitted(event, value)}
    />
  );
}