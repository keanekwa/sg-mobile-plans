import React from 'react';
import Question from './Question.js'
import Option from './Option.js'
import { Slider } from '@material-ui/core';
import NextQuestionButton from './NextQuestionButton.js'

class SelectOptionsForSelf extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      questions: [
        {
          question: 'How much data do you need?',
          selectionMode: 'slider',
          sliderValues: [5,15],
          unit: 'GB',
          step: 1,
          defaultSliderMin: 0,
          defaultSliderMax: 20,
        },
        {
          question: 'How much talktime do you need?',
          selectionMode: 'slider',
          sliderValues: [100,400],
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
  }

  render() {
    const currentQuestion = this.state.questions[this.state.questionNumber];

    if (currentQuestion.selectionMode === 'slider') {
      return (
        <div>
          <Question question={currentQuestion.question}/>
          <Slider
            min={currentQuestion.defaultSliderMin}
            max={currentQuestion.defaultSliderMax}
            value={currentQuestion.sliderValues}
            valueLabelDisplay='on'
            valueLabelFormat={value => `${value} ${currentQuestion.unit}`}
            step={currentQuestion.step}
            onChange={(e, newSliderValues) => this.handleSliderChange(newSliderValues)}
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

export default SelectOptionsForSelf;