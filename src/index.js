import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Option(props) {
  return (
    <li className="option">
      <button onClick={props.onClick}>{props.value}</button>
    </li>
  );
}

function Question(props) {
  return (
    <h1>{props.question}</h1>
  );
}

class Self extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      questions: [
        {
          question: 'How much data do you need?',
          options: [
            {
              key: '10gb',
              value: '10gb',
            },
            {
              key: '20gb',
              value: '20gb',
            },
          ],
        },
        {
          question: 'How much talktime do you need?',
          options: [
            {
              key: '100min',
              value: '100min',
            },
            {
              key: '200min',
              value: '200min',
            },
          ],
        },
      ],
      questionNumber: 0,
      optionsSelected: [],
    }
  }
  
  handleClick(option) {
    const newOptionsSelected = this.state.optionsSelected.slice();
    newOptionsSelected.push(option);
    this.setState(
      {
        questionNumber: this.state.questionNumber + 1,
        optionsSelected: newOptionsSelected,
      }
    );
    alert(newOptionsSelected);
  }

  render() {
    const options = this.state.questions[this.state.questionNumber].options.map((option) => <Option key={option.key} value={option.value} onClick={() => this.handleClick(option.key)}/>);

    return (
      <div>
        <Question question={this.state.questions[this.state.questionNumber].question}/>
        <ul className="options">{options}</ul>
      </div>
    );
  }
}

class Family extends React.Component {
  render() {
    return (<h1>Family</h1>);    
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      question: 'What are you looking for?',
      options: [
        {
          key: 'self',
          value: 'Mobile Plan for Myself',
        },
        {
          key: 'family',
          value: 'Plans for Family (e.g. mobile, fiber, cable TV, etc.)',
        },
      ],
      selfOrFamily: null,
    }
	}

  handleClick(optionKey) {
    this.setState({selfOrFamily: optionKey});
  }

  render() {
    const options = this.state.options.map((option) => <Option key={option.key} value={option.value} onClick={() => this.handleClick(option.key)}/>);

    if (this.state.selfOrFamily === null) {
      return (
        <div>
          <Question question={this.state.question}/>
          <ul className="options">{options}</ul>
        </div>
      );
    }
    else if (this.state.selfOrFamily === 'self') {
      return (
        <div> 
          <Self/>
        </div>
      );
    }
    else if (this.state.selfOrFamily === 'family') {
      return (
        <div> 
          <Family/>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'));