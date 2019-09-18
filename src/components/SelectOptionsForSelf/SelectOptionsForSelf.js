import React from 'react';
import NextButton from '../../components/NextButton/NextButton.js'
import OptionSlider from '../../components/OptionSlider/OptionSlider.js'
import UnlimitedCheckbox from '../../components/UnlimitedCheckbox/UnlimitedCheckbox.js'

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

  handleUnlimitedCheckboxClick(option) {
    this.setState({ [option]: 10000 });
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
        <OptionSlider
          defaultValue={0}
          step={5}
          valueLabelFormat={value => `${value} ${'GB'}`}
          min={0}
          max={100}
          onChangeCommitted={(event, value) => this.setState({ ['minData']: value })}
        />
        <UnlimitedCheckbox onClick={() => this.handleUnlimitedCheckboxClick('minData')}/>
        What is the minimum amount of talktime you need?
        <OptionSlider
          defaultValue={0}
          step={100}
          valueLabelFormat={value => `${value} ${'min'}`}
          min={0}
          max={1000}
          onChangeCommitted={(event, value) => this.setState({ ['minTalktime']: value })}
        />
        <UnlimitedCheckbox onClick={() => this.handleUnlimitedCheckboxClick('minTalktime')}/>
        What is the minimum number of SMS you need?
        <OptionSlider
          defaultValue={0}
          step={100}
          min={0}
          max={1000}
          onChangeCommitted={(event, value) => this.setState({ ['minSMS']: value })}
        />
        <UnlimitedCheckbox onClick={() => this.handleUnlimitedCheckboxClick('minSMS')}/>
        What is your monthly budget?
        <OptionSlider
          defaultValue={0}
          step={10}
          valueLabelFormat={value => `${'$'}${value}`}
          min={0}
          max={200}
          onChangeCommitted={(event, value) => this.setState({ ['price']: value })}
        />
        <UnlimitedCheckbox onClick={() => this.handleUnlimitedCheckboxClick('price')}/>
        <NextButton onClick={() => this.handleNextButtonClick()}/>
      </div>
    );
  }
}

export default SelectOptionsForSelf;