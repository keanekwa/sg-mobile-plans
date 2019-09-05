import React from 'react';
import MySelect from './MySelect.js';
import NextButton from './NextButton.js'

class SelectOptionsForSelf extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      minData: 0,
      minTalktime: 0,
      minSMS: 0,
      price: 10000,
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
        <MySelect value={this.state.minData} name='minData' options={[0,1,3,5,10,30,50,10000]} onChange={(event) => this.handleChange(event)}/>
        GB of data, 
        <MySelect value={this.state.minTalktime} name='minTalktime' options={[0,100,300,500,1000,10000]}  onChange={(event) => this.handleChange(event)}/>
        min of talktime, and 
        <MySelect value={this.state.minSMS} name='minSMS' options={[0,100,300,500,1000,10000]}  onChange={(event) => this.handleChange(event)}/>
        SMS.<br/>
        And my budget is
        <MySelect value={this.state.price} name='price' options={[20,30,40,50,75,100,150,10000]}  onChange={(event) => this.handleChange(event)}/>
        per month.<br/><br/>
        <NextButton onClick={() => this.handleNextButtonClick()}/>
      </div>
    );
  }
}

export default SelectOptionsForSelf;