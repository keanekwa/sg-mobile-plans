import React from 'react';
import Option from './components/Option/Option.js'
import Question from './components/Question/Question.js'
import SelectOptionsForSelf from './components/SelectOptionsForSelf/SelectOptionsForSelf.js'
import SelectOptionsForFamily from './components/SelectOptionsForFamily/SelectOptionsForFamily.js'
import ComparisonPage from './components/ComparisonPage/ComparisonPage.js'

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