import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';
import update from 'immutability-helper';

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

function Slider(props) {
  return (
    <form className="form">      
      <InputRange
        draggableTrack
        minValue={props.minValue}
        maxValue={props.maxValue}
        value={props.value} 
        formatLabel={value => `${value} GB`}
        onChange={newSliderValues => props.onChange(newSliderValues)}
        //onChangeComplete={value => console.log(value)}
        />
    </form>
  );
}

class Self extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      questions: [
        {
          question: 'How much data do you need?',
          selectionMode: 'slider',
          sliderValues: {
            min: 0,
            max: 20,
          },
          defaultSliderMin: 0,
          defaultSliderMax: 20,
        },
        {
          question: 'How much talktime do you need?',
          selectionMode: 'options',
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

  handleSlide(newSliderValues) {
    this.setState({
      questions: update(this.state.questions, {0: {sliderValues: {$set: newSliderValues}}})
    });
  }

  render() {
    const currentQuestion = this.state.questions[this.state.questionNumber];

    if (currentQuestion.selectionMode == 'slider') {
      return (
        <div>
          <Question question={currentQuestion.question}/>
          <Slider
            minValue={currentQuestion.defaultSliderMin}
            maxValue={currentQuestion.defaultSliderMax}
            value={currentQuestion.sliderValues}
            onChange={(newSliderValues) => this.handleSlide(newSliderValues)}
          />
        </div>
      );
    }
    else if (currentQuestion.selectionMode == 'options') {
      const options = currentQuestion.options.map((option) => <Option key={option.key} value={option.value} onClick={() => this.handleClick(option.key)}/>);
      return (
        <div>
          <Question question={currentQuestion.question}/>
          <ul className="options">{options}</ul>
        </div>
      );
    }
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