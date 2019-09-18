import React from 'react';
import { Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(13) + ' 0 ' + theme.spacing(3) + ' 0',
    width: '100%',
    display:'block'
  },
}));

export default function OptionSlider(props) {
  const classes = useStyles();  
  return (
      <Slider
        className={classes.root}
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