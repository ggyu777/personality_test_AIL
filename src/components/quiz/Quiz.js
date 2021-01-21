import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Question from './Question'
import QuestionCount from './QuestionCount'
import AnswerOption from './AnswerOption'
import { media } from '../utils/_media-queries'

const Wrapper = styled.div` // 이게 3가지 선택 하는 질문 항목
  margin: 1em 1em;
  
  z-index: 1;
  .row {
    position: relative;
    padding-top: 5em;
    margin: 0;
    display: flex;
    flex-direction: column;
    
    text-align: center;
    ul {
     
   
      position: relative;
      justify-content: space-around;
      align-items: flex-start;
      flex-grow: 1;
      ${media.largerPhone`margin: 0 .8em;`};
      ${media.tablet`flex-direction: row; padding-right: 1.5em;`};
      ${media.laptop`margin-top: 7rem; padding-right: 4em;`};
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
