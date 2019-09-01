import React from 'react';
import Option from './Option.js'
import Question from './Question.js'
import SelectOptionsForSelf from './SelectOptionsForSelf.js'
import SelectOptionsForFamily from './SelectOptionsForFamily.js'
import ComparisonPage from './ComparisonPage.js'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  background: 'white',
  padding: '30px',
  margin: '10px',
  color: '#333',
});

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
          value: 'Plans for Family (e.g. mobile, fiber, cable TV, etc.)',
        },
      ],
      mode: null,
      optionsSelected: null,
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
          <ul className="options">{options}</ul>   
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
          <ThemeProvider theme={theme}><ComparisonPage optionsSelected={this.state.optionsSelected}/></ThemeProvider>
        </div>
      );
    }
  }
}

export default App;