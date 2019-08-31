import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';

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

function NextQuestionButton(props) {
  return (
    <button onClick={props.onClick}>Next</button>
  );
}

class SelectOptionsForSelf extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      questions: [
        {
          question: 'How much data do you need?',
          selectionMode: 'slider',
          sliderValues: {
            min: 5,
            max: 15,
          },
          unit: 'GB',
          step: 1,
          defaultSliderMin: 0,
          defaultSliderMax: 20,
        },
        {
          question: 'How much talktime do you need?',
          selectionMode: 'slider',
          sliderValues: {
            min: 100,
            max: 400,
          },
          unit: 'min',
          step: 10,
          defaultSliderMin: 0,
          defaultSliderMax: 500,
        },
      ],
      questionNumber: 0,
      optionsSelected: [],
    }
  }
  
  handleOptionClick(optionKey) {
    const newOptionsSelected = this.state.optionsSelected.slice();
    newOptionsSelected.push(optionKey);
    this.setState(
      {
        questionNumber: this.state.questionNumber + 1,
        optionsSelected: newOptionsSelected,
      }
    );
    alert(newOptionsSelected);
  }

  handleSliderChange(newSliderValues) {
    const newQuestionsState = this.state.questions.slice();
    newQuestionsState[this.state.questionNumber].sliderValues = newSliderValues;
    this.setState({
      questions: newQuestionsState,
    });
  }

  handleNextButtonClick() {
    const newOptionsSelected = this.state.optionsSelected.slice();
    newOptionsSelected.push(this.state.questions[this.state.questionNumber].sliderValues);
    this.setState({optionsSelected: newOptionsSelected});
    if (this.state.questionNumber < 1) {
      this.setState({questionNumber: this.state.questionNumber + 1});
    }
    else {
      this.props.onClick('Comparison Page'); //change mode to comparison page
    }
    alert("Min:" + newOptionsSelected[this.state.questionNumber].min + ". Max:" + newOptionsSelected[this.state.questionNumber].max);
  }

  render() {
    const currentQuestion = this.state.questions[this.state.questionNumber];

    if (currentQuestion.selectionMode === 'slider') {
      return (
        <div>
          <Question question={currentQuestion.question}/>
          <InputRange
            draggableTrack
            minValue={currentQuestion.defaultSliderMin}
            maxValue={currentQuestion.defaultSliderMax}
            value={currentQuestion.sliderValues} 
            formatLabel={value => `${value} ${currentQuestion.unit}`}
            step={currentQuestion.step}
            onChange={newSliderValues => this.handleSliderChange(newSliderValues)}
          />
          <NextQuestionButton onClick={() => this.handleNextButtonClick()}/>
        </div>
      );
    }
    else if (currentQuestion.selectionMode === 'options') {
      const options = currentQuestion.options.map((option) => <Option key={option.key} value={option.value} onClick={() => this.handleOptionClick(option.key)}/>);
      return (
        <div>
          <Question question={currentQuestion.question}/>
          <ul className="options">{options}</ul>
        </div>
      );
    }
  }
}

class SelectOptionsForFamily extends React.Component {
  render() {
    return (<h1>SelectOptionsForFamily</h1>);    
  }
}

class ComparisonPage extends React.Component {
  render() {
    return (<h1>ComparisonPage</h1>);    
  }
}

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

ReactDOM.render(<App />, document.getElementById('root'));