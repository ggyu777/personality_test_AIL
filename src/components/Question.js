import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../components/utils/_var'
import Quiz from '../components/quiz/Quiz'
import Results from '../components/result/Results'
import quizQuestions from '../api/quizQuestions'
import { QuestionCard } from '../components/utils/Cards'


const Wrapper = styled.div`
  position: fixed;
  min-height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.$colorBoldRed};
`

const imgStyle = {
  height: "80vh",  
    width: "29.85vw",
    textAlign: "center",
  position: "absolute",

}

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
       /* Colors: {
          Green: 10,
          Brown: 10,
          Blue: 10,
          Red: 10
        },
        Letters: {
          A: 10,
          B: 10,
          C: 10,
          D: 10
        },*/
        Briggs: {
          E: 5,
          I: 5,
          S: 5,
          N: 5,
          T: 5,
          F: 5,
          J: 5,
          P: 5
        }
      },
      resultBriggs: '',
      resultColors: '',
      resultLetters: ''
    }
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this)
  }

  // populate app’s state using the componentWillMount life cycle event
  componentWillMount() {
    const answerOptions = quizQuestions.map(question => question.answers)
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: answerOptions[0]
    })
  }

  // setting the answer based on the user’s selection
  setUserAnswer(answer) {
    const answersCount = this.state.answersCount
    let applyAnswer = answer => {
      const answer_array = answer.split(',')
      let briggsAnswer = answer_array[0]
     /* let colorsAnswer = answer_array[1]
      let lettersAnswer = answer_array[2]*/
      if (answer_array.length === 1) {
        answersCount['Briggs'][briggsAnswer] += 1
      /*  answersCount['Colors'][colorsAnswer] += 1
        answersCount['Letters'][lettersAnswer] += 1*/
      } else if (answer_array.length === 2) {
        answersCount['Briggs'][briggsAnswer] -= 1
      /*  answersCount['Colors'][colorsAnswer] -= 1
        answersCount['Letters'][lettersAnswer] -= 1*/
      }
      return answersCount
    }
    this.setState({
      answersCount: applyAnswer(answer),
      answer: answer
    })
  }

  // increment the counter and questionId state
  setNextQuestion() {
    const counter = this.state.counter + 1
    const questionId = this.state.questionId + 1
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    })
 
  }

  // setting the answer and then setting the next question
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value)
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 800)
    } else {
      setTimeout(() => this.setResults(/*this.getColorsResults(), this.getLettersResults(), */this.getBriggsResults()), 800)
    }
  }

  // ===========================================================================
  //                        get results
  // ===========================================================================
  getBriggsResults() {
    const answerCount = this.state.answersCount
    const briggsAnswer = answerCount['Briggs']
//  const answersCountKeysBriggs = Object.keys(briggsAnswer)
  // const answersCountValuesBriggs = answersCountKeysBriggs.map(key => briggsAnswer[key])
    let briggsType = ''
    if (briggsAnswer.E >= briggsAnswer.I) {
      briggsType += 'E'
    } else briggsType += 'I'
    if (briggsAnswer.S >= briggsAnswer.N) {
      briggsType += 'S'
    } else briggsType += 'N'
    if (briggsAnswer.T >= briggsAnswer.F) {
      briggsType += 'T'
    } else briggsType += 'F'
    if (briggsAnswer.J >= briggsAnswer.P) {
      briggsType += 'J'
    } else briggsType += 'P'
    return briggsType
  }

/*  getColorsResults() {
    const answersCount = this.state.answersCount
    const colorsAnswer = answersCount['Colors']
    const answersCountKeysColors = Object.keys(colorsAnswer)
    const answersCountValuesColors = answersCountKeysColors.map(key => colorsAnswer[key])
    const maxAnswerCountColors = Math.max.apply(null, answersCountValuesColors)
    return answersCountKeysColors.filter(key => colorsAnswer[key] === maxAnswerCountColors)
  }

  getLettersResults() {
    const answersCount = this.state.answersCount
    const lettersAnswer = answersCount['Letters']
    const answersCountKeysLetters = Object.keys(lettersAnswer)
    const answersCountValuesLetters = answersCountKeysLetters.map(key => lettersAnswer[key])
    const maxAnswerCountLetters = Math.max.apply(null, answersCountValuesLetters)
    return answersCountKeysLetters.filter(key => lettersAnswer[key] === maxAnswerCountLetters)
  }*/

  // ===========================================================================
  //                        set results
  // ===========================================================================
  setResults(/*resultColors, resultLetters,*/ resultBriggs) {
  /*  if (resultColors.length >= 1) {
      this.setState({ resultColors: resultColors[0] })
    }
    if (resultLetters.length >= 1) {
      this.setState({ resultLetters: resultLetters[0] })
    }*/
    if (resultBriggs.length >= 1){
      this.setState ({ resultBriggs: resultBriggs })
    }
  }

  // ===========================================================================
  //                    functions to render quiz
  // ===========================================================================
  renderQuiz() {
    
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        
      />
      
    )
  }

  // ===========================================================================
  //                    functions to render result
  // ===========================================================================
  renderResult() {
    return (
      <Results
        //resultColors={this.state.resultColors}
        //resultLetters={this.state.resultLetters}
        resultBriggs={this.state.resultBriggs}
      />
    )
  }

  // ===========================================================================
  //                       render this question page
  // ===========================================================================
  render() {
    let resultBriggs = this.state.resultBriggs
    if (resultBriggs) {
      return this.renderResult()
    }

      if(this.state.counter===1)
      {
    document.getElementById("testimg").src = "images/qustion2.jpg";
  
      }
      if(this.state.counter===2)
      {
    document.getElementById("testimg").src = "images/qustion3.jpg";
  
      }
      if(this.state.counter===3)
      {
    document.getElementById("testimg").src = "images/qustion4.jpg";
  
      }
      if(this.state.counter===4)
      {
    document.getElementById("testimg").src = "images/qustion5.jpg";
  
      }
      if(this.state.counter===5)
      {
    document.getElementById("testimg").src = "images/qustion6.jpg";
  
      }
      if(this.state.counter===6)
      {
    document.getElementById("testimg").src = "images/qustion7.jpg";
  
      }
      if(this.state.counter===7)
      {
    document.getElementById("testimg").src = "images/qustion8.jpg";
  
      }
      if(this.state.counter===8)
      {
    document.getElementById("testimg").src = "images/qustion9.jpg";
  
      }
      if(this.state.counter===9)
      {
    document.getElementById("testimg").src = "images/qustion10.jpg";
  
      }
      if(this.state.counter===10)
      {
    document.getElementById("testimg").src = "images/qustion11.jpg";
  
      }

      if(this.state.counter===11)
      {
    document.getElementById("testimg").src = "images/qustion12.jpg";
  
      }
        
    return (
      
      <Wrapper className="container">
        <QuestionCard>
      
      <img src="images/qustion1.jpg" id="testimg" style={imgStyle} alt="profile"/>
  
       
          {this.renderQuiz()}
        </QuestionCard>
      </Wrapper>
    )
    
  }
}

export default Question
