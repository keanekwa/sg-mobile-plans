import React from 'react';
import { Paper } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import './Result.scss'

export default function Result(props) {
  let pros, cons = undefined;
  if (props.pros === undefined) {
    pros = '';
  }
  else {
    pros = props.pros.map(pro => <li key={pro}>{pro}</li>);
  }
  if (props.cons === undefined) {
    cons = '';
  }
  else {
    cons = props.cons.map(con => <li key={con}>{con}</li>);
  }

  const [checked, setChecked] = React.useState(false);
  const expandOrMinimize = () => {
    setChecked(prev => !prev);
  }
  
  return (
    <Collapse in={checked} collapsedHeight='6.75rem'>
      <Paper square={true} class='MobilePlanPaper'>
        <table onClick={expandOrMinimize}>
          <tbody>
            <tr>
              <th class='sideBorderTableCells'>Price</th>
              <th class='sideBorderTableCells'>Data</th>
              <th class='sideBorderTableCells'>Talktime</th>
              <th class='sideBorderTableCells'>SMS</th>
              <td rowSpan={2} align='center'><h2>{props.telco} - {props.planName}</h2></td>
            </tr>
            <tr>
              <td class='sideBorderTableCells'>${props.price % 1 === 0 ? props.price : props.price.toFixed(2)}</td>
              <td class='sideBorderTableCells'>{props.data}{props.data === 'Unlimited' ? '' : 'GB'}</td>
              <td class='sideBorderTableCells'>{props.talktime}{props.talktime === 'Unlimited' ? '' : 'min'}</td>
              <td class='sideBorderTableCells'>{props.sms}</td>
            </tr>
          </tbody>
        </table>
        {pros === '' ? '' : 'Pros:'}
        {pros === '' ? '' : <ul>{pros}</ul>}
        {cons === '' ? '' : 'Cons:'}
        {cons === '' ? '' : <ul>{cons}</ul>}
      </Paper>
    </Collapse>
  );
}