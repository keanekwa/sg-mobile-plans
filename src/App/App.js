import React from 'react';
import Option from './Option.js'
import Question from './Question.js'
import SelectOptionsForSelf from './SelectOptionsForSelf.js'
import SelectOptionsForFamily from './SelectOptionsForFamily.js'
import ComparisonPage from './ComparisonPage.js'

class App extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      question: 'What are you looking for?',
      options: [
        {
          key: 'SelectOptionsForSelf',
          value: 'Mobile Plan for Myself',
        },
        {
          key: 'SelectOptionsForFamily',
          value: 'Plans for Family (e.g. mobile, fiber, TV, etc.)',
        },
      ],
      mode: null,
      minData: null,
      minTalktime: null,
      minSMS: null,
    }
	}

  handleClick(optionKey, optionsSelected) {
    this.setState({mode: optionKey});
    if (optionKey === 'ComparisonPage') {
      this.setState({optionsSelected: optionsSelected});
    }
  }

  render() {
    const options = this.state.options.map((option) => <Option key={option.key} value={option.value} onClick={() => this.handleClick(option.key)}/>);

    if (this.state.mode === null) {
      return (
        <div>
          <Question question={this.state.question}/>
          <ul className='options'>{options}</ul>
        </div>
      );
    }
    else if (this.state.mode === 'SelectOptionsForSelf') {
      return (
        <div> 
          <SelectOptionsForSelf onClick={(mode, optionsSelected) => this.handleClick(mode, optionsSelected)}/>
        </div>
      );
    }
    else if (this.state.mode === 'SelectOptionsForFamily') {
      return (
        <div> 
          <SelectOptionsForFamily/>
        </div>
      );
    }
    else if (this.state.mode === 'ComparisonPage') {
      return (
        <div> 
          <ComparisonPage optionsSelected={this.state.optionsSelected}/>
        </div>
      );
    }
  }
}

export default App;