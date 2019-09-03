import React from 'react';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import NextButton from './NextButton.js'

class SelectOptionsForSelf extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      minData: 1,
      minTalktime: 100,
      minSMS: 100,
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  handleNextButtonClick() {
    const optionsSelected = this.state;
    this.props.onClick('ComparisonPage', optionsSelected);
  }

  render() {
    return (
      <div>
        I need at least
        <Select value={this.state.minData} name='minData' variant='filled' onChange={(event) => this.handleChange(event)}>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={'unlimited'}>Unlimted</MenuItem>
        </Select>
        GB of data, 
        <Select value={this.state.minTalktime} name='minTalktime' variant='filled' onChange={(event) => this.handleChange(event)}>
          <MenuItem value={100}>100</MenuItem>
          <MenuItem value={300}>300</MenuItem>
          <MenuItem value={500}>500</MenuItem>
          <MenuItem value={1000}>1000</MenuItem>
          <MenuItem value={'unlimited'}>Unlimited</MenuItem>
        </Select>
        min of talktime, and 
        <Select value={this.state.minSMS} name='minSMS' variant='filled' onChange={(event) => this.handleChange(event)}>
          <MenuItem value={100}>100</MenuItem>
          <MenuItem value={300}>300</MenuItem>
          <MenuItem value={500}>500</MenuItem>
          <MenuItem value={1000}>1000</MenuItem>
          <MenuItem value={'unlimited'}>Unlimited</MenuItem>
        </Select>
        SMS.
        <NextButton onClick={() => this.handleNextButtonClick()}/>
      </div>
    );
  }
}

export default SelectOptionsForSelf;