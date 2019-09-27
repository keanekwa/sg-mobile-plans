import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import { Input } from '@material-ui/core';
import ResultList from './ResultList'

class SelectSelfOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minData: 0,
      minTalktime: 0,
      minSMS: 0,
      price: 0,
      showResultList: false,
    }
  }

  handleClick = () => {
    this.setState({ ['showResultList']: true });
    return <ResultList optionsSelected={this.state}/>;
  }

  render () {
    return (
      <div>
        I need at least <Input placeholder='0' onChange={(event) => this.setState({ ['minData']: event.target.value })}/> GB of data, <br/>
        at least <Input placeholder='0' onChange={(event) => this.setState({ ['minTalktime']: event.target.value })}/> min of talktime, <br/>
        and at least <Input placeholder='0' onChange={(event) => this.setState({ ['minSMS']: event.target.value })}/> SMS. <br/>
        My monthly budget for this will be $<Input placeholder='0' onChange={(event) => this.setState({ ['price']: event.target.value })}/><br/>
        <Button onClick={() => this.handleClick()} variant='outlined' size='large' color='primary'>Next</Button> 
        {this.state.showResultList && <ResultList optionsSelected={this.state}/>}
      </div>
    );
  }
}

export default SelectSelfOptions;

