/* Backup of slider style page
import React from 'react';
import Button from '@material-ui/core/Button'
import OptionSlider from './OptionSlider'
import UnlimitedCheckbox from './UnlimitedCheckbox'

class SelectSelfOptions extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      minData: 0,
      minTalktime: 0,
      minSMS: 0,
      price: 0,
    }
  }

  handleUnlimitedCheckboxClick = (option) => {
    this.setState({ [option]: 10000 });
  }

  handleNextButtonClick = () => {
    const optionsSelected = this.state;
    this.props.onClick('ResultList', optionsSelected);
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
        <Button onClick={() => this.handleNextButtonClick()} variant='outlined' size='large' color='primary'>Next</Button>
      </div>
    );
  }
}

export default SelectSelfOptions;
*/
import React from 'react';
import Button from '@material-ui/core/Button'
import { Input } from '@material-ui/core';

class SelectSelfOptions extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      minData: 0,
      minTalktime: 0,
      minSMS: 0,
      price: 0,
    }
  }

  handleNextButtonClick = () => {
    const optionsSelected = this.state;
    this.props.onClick('ResultList', optionsSelected);
  }

  // change to slider with tickbox for unlimited when i have time
  render() {    
    return (
      <div>
        I need at least <Input placeholder={0} onChange={(event) => this.setState({ ['minData']: event.target.value })}/> GB of data, <br/>
        at least <Input placeholder={0} onChange={(event) => this.setState({ ['minTalktime']: event.target.value })}/> min of talktime, <br/>
        and at least <Input placeholder={0} onChange={(event) => this.setState({ ['minSMS']: event.target.value })}/> SMS. <br/>
        My monthly budget for this will be $<Input placeholder={0} onChange={(event) => this.setState({ ['price']: event.target.value })}/><br/>
        <Button onClick={() => this.handleNextButtonClick()} variant='outlined' size='large' color='primary'>Next</Button>
      </div>
    );
  }
}

export default SelectSelfOptions;