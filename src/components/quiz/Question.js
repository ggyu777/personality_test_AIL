import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fonts } from '../utils/_var'

const Wrapper = styled.div`

  .row {
    margin: 2vw;
    .col {
      position: absolute;
      max-width: 85%;

      top: 24.2vh; // 이게 질문
      @media screen and (min-width: 414px) and (max-width: 768px)
      {
        top: 20vh;   left: 6vw;
      }  
    }
      h1 {
        line-height: 5vh;

        font-size: 2.8vh;
        font-family: ${fonts.$mainFont};
        text-align: center;

        @media screen and (min-width: 414px) and (max-width: 768px)
        {
         font-size: 1.8vh; line-height: 3vh; 

  
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
