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
          key: 'Select Self Criteria',
          value: 'Mobile Plan for Myself',
        },
        {
          key: 'Select Family Criteria',
          value: 'Plans for Family (e.g. mobile, fiber, cable TV, etc.)',
        },
      ],
      mode: null,
    }
	}

  handleClick(optionKey) {
    this.setState({mode: optionKey});
    alert(optionKey);
  }

  render() {
    const options = this.state.options.map((option) => <Option key={option.key} value={option.value} onClick={() => this.handleClick(option.key)}/>);

    if (this.state.mode === null) {
      return (
        <div>
          <Question question={this.state.question}/>
          <ul className="options">{options}</ul>
        </div>
      );
    }
    else if (this.state.mode === 'Select Self Criteria') {
      return (
        <div> 
          <SelectOptionsForSelf onClick={(mode) => this.handleClick(mode)}/>
        </div>
      );
    }
    else if (this.state.mode === 'Select Family Criteria') {
      return (
        <div> 
          <SelectOptionsForFamily/>
        </div>
      );
    }
    else if (this.state.mode === 'Comparison Page') {
      return (
        <div> 
          <ComparisonPage/>
        </div>
      );
    }
  }
}

export default App;