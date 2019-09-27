import React from 'react';
import Button from '@material-ui/core/Button'
import SelectSelfOptions from './components/SelectSelfOptions'
import SelectFamilyOptions from './components/SelectFamilyOptions'
import ResultList from './components/ResultList'

class App extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      question: 'What are you looking for?',
      options: [
        {
          key: 'SelectSelfOptions',
          value: 'Mobile Plan for Myself',
        },
        {
          key: 'SelectFamilyOptions',
          value: 'Plans for Family (e.g. mobile, fiber, TV)',
        },
      ],
      mode: null,
    }
	}

  handleClick = (optionKey, optionsSelected) => {
    this.setState({mode: optionKey});
    if (optionKey === 'ResultList') {
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
    else if (this.state.mode === 'SelectSelfOptions') {
      return (
        <div> 
          <SelectSelfOptions onClick={(mode, optionsSelected) => this.handleClick(mode, optionsSelected)}/>
        </div>
      );
    }
    else if (this.state.mode === 'SelectFamilyOptions') {
      return (
        <div> 
          <SelectFamilyOptions/>
        </div>
      );
    }
    else if (this.state.mode === 'ResultList') {
      return (
        <div> 
          <ResultList optionsSelected={this.state.optionsSelected}/>
        </div>
      );
    }
  }
}

export default App;