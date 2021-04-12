import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Question from './Question'
import QuestionCount from './QuestionCount'
import AnswerOption from './AnswerOption'
import { media } from '../utils/_media-queries'
import {  colors } from '../utils/_var'
const Wrapper = styled.div` // 이게 3가지 선택 하는 질문 항목
  margin-top: 5vh;
  
  z-index: 1; 
  .row { // 이게 질문 전체
      

    top: 50vh;
    display: flex;
    width:90%;
    left:15px;
    font-size: 2.2vh;
    color: ${colors.$colorBlack};
    text-align: center;
    ul {
     // 요게 질문 밑에 선택지 박스!
      left: 1.5vw;
      position: relative;
      top: 48.6vh;
      justify-content: space-around;
      align-items: flex-start;
      flex-grow: 1;
      ${media.largerPhone` width:100%;`};
      ${media.tablet`flex-direction: row; padding-right: 1.5em;`};
      ${media.laptop`padding-bottom: 1vh;`};
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
