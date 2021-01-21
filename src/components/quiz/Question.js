import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fonts } from '../utils/_var'

const Wrapper = styled.div`
  .row {
    margin: rem 0;
    .col {
      position: relative;
      padding-top: 5em; // 이게 질문
      h1 {
        
        font-size: 1.3rem;
        font-family: ${fonts.$mainFont};
        text-align: center;
      }
    }
  }
`

const Question = props => {
  return (
    <Wrapper>
      <div className="row">
        <div className="col">
          <h1>{props.content}</h1>
        </div>
      </div>
    </Wrapper>
  )
}

Question.PropTypes = {
  content: PropTypes.string.isRequired
}

export default Question
