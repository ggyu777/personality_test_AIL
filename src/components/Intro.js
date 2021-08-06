import React from 'react'
import styled from 'styled-components'
import { StartBtn } from '../components/utils/Buttons'
import { IntroCard } from '../components/utils/Cards'
import { fonts, colors } from '../components/utils/_var'
import { media } from '../components/utils/_media-queries'


const imgStyle = {
  height: "100%",  
    width: "100%",
    
   
}
const fontStyle ={
  fontFamily: 'DungGeunMo, sans-serif',
  textAlign: 'center',
  left:'1.8vw',
  fontSize:'3vh',
}

const Wrapper = styled.div`

  position: absolute;
  min-height: 100%;
  max-width: 100%;
  margin: 0 auto;
  left: 0;
  right: 0;
  background: ${colors.$colorBoldRed};


  h1 {
    position: relative;
    font-family: ${fonts.$titleFont};
    font-size: 1.1em;
    color: ${colors.$colorGold};

    padding-top: 7em;  //여기가 판타지 직업 & 포션 테스트 항목



  }
  .list-group {
    padding: 0 2em; // 여기가 12문항~어쩌구 항목
    .list-group-item {
      background: transparent;
      padding: 1em 1.25em;
      font-family: ${fonts.$latoFont};
      border: 0;
      margin-bottom: 0;
      color: ${colors.$colorGold};
 
      text-align: center;
    }
    
  }
`

const Intro = ({ title, _onStartClick }) => {
  return (

    <Wrapper className="container">
      <IntroCard>

      
          <img src="images/startView.png" style={imgStyle} alt="profile"/>
       
        
          
      
        <h1>{title}</h1>
     
        {/* TODO: WILL CHANGE THIS THING DOWN HERE */}
        <ul className="list-group">
        
        <li className="list-group-item"></li>
          <li className="list-group-item"></li>
      
        </ul>
        <StartBtn onClick={_onStartClick}>
          <span style={fontStyle}>모험 시작!</span>
          
          <div className="icon">
            <i className="fa fa-arrow-right" />
          </div>
        </StartBtn>
        
      </IntroCard>
    </Wrapper>
  )
  
}

export default Intro
