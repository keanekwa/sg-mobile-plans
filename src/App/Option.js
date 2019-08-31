import React from 'react';

function Option(props) {
  return (
    <li className="option">
      <button onClick={props.onClick}>{props.value}</button>
    </li>
  );
}

export default Option;