import React from 'react';
import NextButton from './NextButton.js'
import MySlider from './MySlider.js'

class SelectOptionsForSelf extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      minData: 0,
      minTalktime: 0,
      minSMS: 0,
      price: 0,
    }
  }

  handleNextButtonClick() {
    const optionsSelected = this.state;
    this.props.onClick('ComparisonPage', optionsSelected);
  }

  // change to slider with tickbox for unlimited when i have time
  render() {    
    return (
      <div>
        What is the minimum amount of data you need?
        <MySlider
          defaultValue={0}
          step={5}
          valueLabelFormat={value => `${value} ${'GB'}`}
          min={0}
          max={100}
          onChangeCommitted={(event, value) => this.setState({ ['minData']: value })}
        />
        What is the minimum amount of talktime you need?
        <MySlider
          defaultValue={0}
          step={100}
          valueLabelFormat={value => `${value} ${'min'}`}
          min={0}
          max={1000}
          onChangeCommitted={(event, value) => this.setState({ ['minTalktime']: value })}
        />
        What is the minimum number of SMS you need?
        <MySlider
          defaultValue={0}
          step={100}
          min={0}
          max={1000}
          onChangeCommitted={(event, value) => this.setState({ ['minSMS']: value })}
        />
        What is your monthly budget?
        <MySlider
          defaultValue={0}
          step={10}
          valueLabelFormat={value => `${'$'}${value}`}
          min={0}
          max={200}
          onChangeCommitted={(event, value) => this.setState({ ['price']: value })}
        />
        <NextButton onClick={() => this.handleNextButtonClick()}/>
      </div>
    );
  }
}

export default SelectOptionsForSelf;