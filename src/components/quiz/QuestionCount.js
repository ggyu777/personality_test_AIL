import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fonts, colors } from '../utils/_var'
import { media } from '../utils/_media-queries'

const Wrapper = styled.div`
  margin: 0.2em;
  ${media.largerPhone`margin: .4em;`};
  ${media.tablet`margin: 1em 2.5em;`};
  ${media.laptop`margin: 1em 2.5em;`};
  .row {
    margin: 0;
    .col {
      padding: 0;
      .questionCount {
        position: relative;
        padding: 1em;
        font-size: 1em;ssss
        font-family: ${fonts.$latoFont};
        color: ${colors.$colorBlack}; // 이게 퀴즈 진행도
        ${media.largerPhone`font-size: 1.2em;`};
      }
    }
  }
`

const QuestionCount = props => {
  return (
    <Wrapper>
      <div className="row">
        <div className="col">
          <div className="questionCount">
          </div>
        </div>
      </div>
    </Wrapper>
  )
 
 
} // Question <span>{props.counter}</span> of <span>{props.total}</span> 원래 34번째 줄



QuestionCount.PropTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}

export default QuestionCount
