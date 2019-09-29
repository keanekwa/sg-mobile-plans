import React from 'react';
import { Button } from '@material-ui/core'
import SelectSelfOptions from './components/SelectSelfOptions'
import SelectFamilyOptions from './components/SelectFamilyOptions'

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

  handleClick = (optionKey) => {
    this.setState({mode: optionKey});
  }

  render() {
    const options = this.state.options.map((option) => <div key={option.key}><Button size='large' fullWidth={true} color='primary' variant='outlined' onClick={() => this.handleClick(option.key)}>{option.value}</Button></div>);
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
          <SelectSelfOptions/>
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
  }
}

export default App;