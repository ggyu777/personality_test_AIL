import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fonts, colors } from '../utils/_var'

const Wrapper = styled.div`
  li {
    list-style-type: "\\25b6";
    left:1vw;

    
    input {
      position: absolute;
      opacity: 0;
    
      z-index: -1;
      & + label::before {
        border-radius: 18px; // 이게 네모를 동그라미로 깎음
      }
      &:checked + label {
        padding-left: 2rem;
        color: #fff;
      }
         &:checked + label::before {
          top: 0;
          width: 100%;
          height: 100%;
          background: ${colors.$colorGold};
        }
        color: #fff;
      }
     
    }
    label {
      position: relative;
      padding-left: 1.5rem;
      line-height: 1rem; // 줄 간격

      @media screen and (min-width: 414px) and (max-width: 768px)  // 화살표랑 선택지 간격
      {
        line-height: 1.5vh; right:3vw;
      }
      
      cursor: pointer;
      font-family: ${fonts.$mainFont};
      color: ${colors.$colorBlack};   // 이부분이 선택지
      &::before {
        content: '';
        position: absolute;
        left: 1.4rem;
        display: block;
        width: 15px;
        height: 15px;
        
      
        z-index: -1;
     
      }
      &,
      &::before {
        transition: 0.5s all ease;
      }
    }
  }
`

const AnswerOption = props => {
  return (
    <Wrapper>
      <li>
        <input
          checked={props.answerType === props.answer}
          id={props.answerType}
          value={props.answerType}
          name={props.answerType}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
          type="radio"
        />
        <label className="radioCustomLabel" htmlFor={props.answerType}>
          {props.answerContent}
        </label>
      </li>
    </Wrapper>
  )
}

AnswerOption.PropTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
}

export default AnswerOption
