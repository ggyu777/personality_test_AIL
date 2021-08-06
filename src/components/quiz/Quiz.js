import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Question from './Question'
import QuestionCount from './QuestionCount'
import AnswerOption from './AnswerOption'
import { media } from '../utils/_media-queries'
import {  colors } from '../utils/_var'
const Wrapper = styled.div` // 이게 3가지 선택 하는 질문 항목
  
  z-index: 1; 
  .row { // 이게 질문 전체
    top: 63.5vh;

    display: flex;
    width:90%;
    padding-left:0.3vw;
    font-size: 2.2vh;
    color: ${colors.$colorBlack};
    ul {
     // 요게 질문 밑에 선택지 박스!
      position: absolute;
      top: 60.2vh;
      left:2vw;

      text-align: center;
      display: flex;
      flex-direction:column;
      justify-content: space-around;
      align-items: flex-start;
      flex-grow: 0;
      height:11.5vh;
      width: 26vw;
      @media screen and (min-width: 414px) and (max-width: 768px)
      {
        height:55%; top:20vh; font-size: 1.7vh; height:1vh;    top: 48vh;   width: 95%;   left:1.2vw;

      }

    }
  }
`

const Quiz = props => {
  const renderAnswerOptions = key => {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    )
  }
  return (
    <Wrapper key={props.questionId}>
      <QuestionCount counter={props.questionId} total={props.questionTotal} />
      <div className="w-100" />
      <Question content={props.question} />
      <div className="w-100" />
      <div className="row">
        <ul>{props.answerOptions.map(renderAnswerOptions)}</ul>
      </div>
    </Wrapper>
  )
}

Quiz.PropTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  counter: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
}

export default Quiz
