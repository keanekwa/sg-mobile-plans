import React from 'react';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    minWidth: 100,
    color: theme.dark.color,
    borderBottom: '1px solid ' + theme.dark.color,
  },
}));

function MySelect(props) {
  const classes = useStyles();
  const menuItemsMapped = props.options.map((option) => <MenuItem value={option}>{option === 10000 ? 'Unlimited' : option}</MenuItem>);
  return (
    <Select className={classes.root} value={props.value} name={props.name} onChange={(event) => props.onChange(event)}>
      {menuItemsMapped}
    </Select>
  );
}

export default MySelect;