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

class App extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      questions: [
        {
          question: 'Question 1',
          options: ['Option A', 'Option B', 'Option C', 'Option Deeee']
        },
        {
          question: 'Question 2',
          options: ['Option A', 'Option B', 'Option C',]
        },
        {
          question: 'Question 3',
          options: ['Option A', 'Option B', 'Option C',]
        },
      ],
      questionNumber: 0,
		}
  }

  handleClick() {
    this.setState(
      {
        questionNumber: this.state.questionNumber + 1,
      }
    );
    console.log(this.state.questionNumber);
  }

  render() {
    const options = this.state.questions[this.state.questionNumber].options.map((option) => <Option key={option} value={option} onClick={() => this.handleClick()}/>);

    return (
      <div>
        <Question question={this.state.questions[this.state.questionNumber].question}/>
        <ul className="options">{options}</ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));