import React from 'react';
import Button from '@material-ui/core/Button'
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
          value: 'Plans for Family (e.g. mobile, fiber, TV)',
        },
      ],
      mode: null,
    }
	}

  handleClick = (optionKey, optionsSelected) => {
    this.setState({mode: optionKey});
    if (optionKey === 'ComparisonPage') {
      this.setState({optionsSelected: optionsSelected});
    }
  }

  render() {
    const options = this.state.options.map((option) => <div><Button size='large' fullWidth={true} key={option.key} color='primary' variant='outlined' onClick={() => this.handleClick(option.key)}>{option.value}</Button></div>);
    if (this.state.mode === null) {
      return (
        <div>
          <h1>{this.state.question}</h1>
          {options}
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