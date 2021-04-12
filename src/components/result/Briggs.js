import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from '../utils/ResultWrapper'
import {
  ISTJ,
  ISFJ,
  INFJ,
  INTJ,
  ISTP,
  ISFP,
  INFP,
  INTP,
  ESTP,
  ESFP,
  ENFP,
  ENTP,
  ESTJ,
  ESFJ,
  ENFJ,
  ENTJ
} from '../definitions/BriggsDef'

import testim from './warrior.png'
import ddd from './ddd.png'

const imgStyle = {
    left: "17vw",
    textAlign: "center",
  position: "absolute",

}
class Briggs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      t1image:ddd,
      t2image:ddd,
      showISTJ: false,
      showISFJ: false,
      showINFJ: false,
      showINTJ: false,
      showISTP: false,
      showISFP: false,
      showINFP: false,
      showINTP: false,
      showESTP: false,
      showESFP: false,
      showENFP: false,
      showENTP: false,
      showESTJ: false,
      showESFJ: false,
      showENFJ: false,
      showENTJ: false
    }
    this.onISTJ_click = this.onISTJ_click.bind(this)
    this.onISFJ_click = this.onISFJ_click.bind(this)
    this.onINFJ_click = this.onINFJ_click.bind(this)
    this.onINTJ_click = this.onINTJ_click.bind(this)
    this.onISTP_click = this.onISTP_click.bind(this)
    this.onISFP_click = this.onISFP_click.bind(this)
    this.onINFP_click = this.onINFP_click.bind(this)
    this.onINTP_click = this.onINTP_click.bind(this)
    this.onESTP_click = this.onESTP_click.bind(this)
    this.onESFP_click = this.onESFP_click.bind(this)
    this.onENFP_click = this.onENFP_click.bind(this)
    this.onENTP_click = this.onENTP_click.bind(this)
    this.onESTJ_click = this.onESTJ_click.bind(this)
    this.onESFJ_click = this.onESFJ_click.bind(this)
    this.onENFJ_click = this.onENFJ_click.bind(this)
    this.onENTJ_click = this.onENTJ_click.bind(this)
  }

  renderISTJ() {
    return (
      <ISTJ
        title={'Introvert | Sensing | Thinking | Judging'}
        content={`You are a type ISTJ, aka The Inspector.
                You tend to be practical and logical above all else.
                You should consider a job in accounting or engineering.`}
        onBackClick={this.onISTJ_click}
      />
    )
  }

  renderISFJ() {
    return (
      <ISFJ
        title={'Introvert | Sensing | Feeling | Judging'}
        content={`You are a type ISFJ, aka The Protector.
                  You tend to be sympathetic and organized above all else.
                  You should consider a job in childcare or bookkeeping.`}
        onBackClick={this.onISFJ_click}
      />
    )
  }

  renderINFJ() {
    return (
      <INFJ
        title={'Introvert | iNtuitive | Feeling | Judging'}
        content={`You are a type INFJ, aka The Counselor.
                You tend to be sensitive and creative above all else.
                You should consider a job in education or the arts.`}
        onBackClick={this.onINFJ_click}
      />
    )
  }

  renderINTJ() {
    return (
      <INTJ
        title={'Introvert | iNtuitive | Thinking | Judging'}
        content={`You are a type INTJ, aka The Mastermind.
                      You tend to be decisive and insightful above all else.
                      You should consider a job in architecture or engineering.`}
        onBackClick={this.onINTJ_click}
      />
    )
  }

  renderISTP() {
    return (
      <ISTP
        title={'Introvert | Sensing | Thinking | Perceiving'}
        content={`You are a type ISTP, aka The Operator.
                  You tend to be analytical and practical above all else.
                  You should consider a job in computer technology or farming.`}
        onBackClick={this.onISTP_click}
      />
    )
  }

  renderISFP() {
    return (
      <ISFP
        title={'Introvert | Sensing | Feeling | Perceiving'}
        content={`You are a type ISFP, aka The Composer.
                  You tend to be loyal and adaptable above all else.
                  You should consider a job in teaching or nursing.`}
        onBackClick={this.onISFP_click}
      />
    )
  }

  renderINFP() {
    return (
      
      <INFP
        title={'Introvert | iNtuitive | Feeling | Perceiving'}
        content={`You are a type INFP, aka The Healer.
                  You tend to be empathetic and inquisitive above all else.
                  You should consider a job in writing or graphic design.`}
        onBackClick={this.onINFP_click}
      />
    )
  }

  renderINTP() {
    return (
      <INTP
        title={'Introvert | iNtuitive | Thinking | Perceiving'}
        content={`You are a type INTP, aka The Architect.
                  You tend to be curious and analytical above all else.
                  You should consider a job in architecture or construction.`}
        onBackClick={this.onINTP_click}
      />
    )
  }

  renderESTP() {
    return (
      <ESTP
        title={'Extravert | Sensing | Thinking | Perceiving'}
        content={`You are a type ESTP, aka The Promoter.
                  You tend to be energetic and realistic above all else.
                  You should consider a job in sales or forestry.`}
        onBackClick={this.onESTP_click}
      />
    )
  }

  renderESFP() {
    return (
      <ESFP
        title={'Extravert | Sensing | Feeling | Perceiving'}
        content={`You are a type ESFP, aka The Performer.
                  You tend to be caring and resourceful above all else.
                  You should consider a job in hospitality or health care.`}
        onBackClick={this.onESFP_click}
      />
    )
  }

  renderENFP() {
    return (
      <ENFP
        title={'Extravert | iNtuitive | Feeling | Perceiving'}
        content={`You are a type ENFP, aka The Champion.
                  You tend to be imaginative and insightful above all else.
                  You should consider a job in therapy or acting.`}
        onBackClick={this.onENFP_click}
      />
    )
  }

  renderENTP() {
    return (
      <ENTP
        title={'Extravert | iNtuitive | Thinking | Perceiving'}
        content={`You are a type ENTP, aka The Inventor.
                  You tend to be enthusiastic and theoretical above all else.
                  You should consider a job in business or sports.`}
        onBackClick={this.onENTP_click}
      />
    )
  }

  renderESTJ() {
    return (
      <ESTJ
        title={'Extravert | Sensing | Thinking | Judging'}
        content={`You are a type ESTJ, aka The Supervisor.
                  You tend to be logical and assertive above all else.
                  You should consider a job in leadership or law.`}
        onBackClick={this.onESTJ_click}
      />
    )
  }

  renderESFJ() {
    return (
      <ESFJ
        title={'Extravert | Sensing | Feeling | Judging'}
        content={`You are a type ESFJ, aka The Provider.
                  You tend to be sociable and caring above all else.
                  You should consider a job in childcare or healthcare.`}
        onBackClick={this.onESFJ_click}
      />
    )
  }

  renderENFJ() {
    return (
      <ENFJ
        title={'Extravert | iNtuitive | Feeling | Judging'}
        content={`You are a type ENFJ, aka The Teacher.
                  You tend to be passionate and imaginative above all else.
                  You should consider a job in teaching or the arts.`}
        onBackClick={this.onENFJ_click}
      />
    )
  }

  renderENTJ() {
    return (
      <ENTJ
        title={'Extravert | iNtuitive | Thinking | Judging'}
        content={`You are a type ENTJ, aka The Field Marshall.
                  You tend to be organized and logical above all else.
                  You should consider a job in law or engineering.`}
        onBackClick={this.onENTJ_click}
      />
    )
  }
  
  componentWillMount(){
    if(this.props.resultBriggs === 'INFP'){	//갖고온 pm10Grade가 1이면 진입
      this.setState({t1image: testim})
    }
   }
  
  render() {
    
    let showISTJ = this.state.showISTJ
    let showISFJ = this.state.showISFJ
    let showINFJ = this.state.showINFJ
    let showINTJ = this.state.showINTJ
    let showISTP = this.state.showISTP
    let showISFP = this.state.showISFP
    let showINFP = this.state.showINFP
    let showINTP = this.state.showINTP
    let showESTP = this.state.showESTP
    let showESFP = this.state.showESFP
    let showENFP = this.state.showENFP
    let showENTP = this.state.showENTP
    let showESTJ = this.state.showESTJ
    let showESFJ = this.state.showESFJ
    let showENFJ = this.state.showENFJ
    let showENTJ = this.state.showENTJ
    if (showISTJ) {
      return this.renderISTJ()
    } else if (showISFJ) {
      return this.renderISFJ()
    } else if (showINFJ) {
      return this.renderINFJ()
    } else if (showINTJ) {
      return this.renderINTJ()
    } else if (showISTP) {
      return this.renderISTP()
    } else if (showISFP) {
      return this.renderISFP()
    } else if (showINFP) {
      return this.renderINFP()
    } else if (showINTP) {
      return this.renderINTP()
    } else if (showESTP) {
      return this.renderESTP()
    } else if (showESFP) {
      return this.renderESFP()
    } else if (showENFP) {
      return this.renderENFP()
    } else if (showENTP) {
      return this.renderENTP()
    } else if (showESTJ) {
      return this.renderESTJ()
    } else if (showESFJ) {
      return this.renderESFJ()
    } else if (showENFJ) {
      return this.renderENFJ()
    } else if (showENTJ) {
      return this.renderENTJ()
    }
    
   
    return (
      <Wrapper>
        <h1 className="display-3 title">MBTI 결과</h1>
        <hr className="my-4" />
        {/* 여기가 결과창 (밑에) */}

        <h2 className="display-6 resultTxt">{this.props.resultBriggs}</h2>  
        <img src={this.state.t1image} id="resultImage" style={imgStyle} alt="profile"/>
        <hr className="my-5" />
       
      </Wrapper>
    )
    
  }

  onISTJ_click() {
    let showISTJ = this.state.showISTJ
    this.setState({ showISTJ: !showISTJ })
  }

  onISFJ_click() {
    let showISFJ = this.state.showISFJ
    this.setState({ showISFJ: !showISFJ })
  }

  onINFJ_click() {
    let showINFJ = this.state.showINFJ
    this.setState({ showINFJ: !showINFJ })
  }

  onINTJ_click() {
    let showINTJ = this.state.showINTJ
    this.setState({ showINTJ: !showINTJ })
  }

  onISTP_click() {
    let showISTP = this.state.showISTP
    this.setState({ showISTP: !showISTP })
  }

  onISFP_click() {
    let showISFP = this.state.showISFP
    this.setState({ showISFP: !showISFP })
  }

  onINFP_click() {
    let showINFP = this.state.showINFP
    this.setState({ showINFP: !showINFP })
  }

  onINTP_click() {
    let showINTP = this.state.showINTP
    this.setState({ showINTP: !showINTP })
  }

  onESTP_click() {
    let showESTP = this.state.showESTP
    this.setState({ showESTP: !showESTP })
  }

  onESFP_click() {
    let showESFP = this.state.showESFP
    this.setState({ showESFP: !showESFP })
  }

  onENFP_click() {
    let showENFP = this.state.showENFP
    this.setState({ showENFP: !showENFP })
  }

  onENTP_click() {
    let showENTP = this.state.showENTP
    this.setState({ showENTP: !showENTP })
  }

  onESTJ_click() {
    let showESTJ = this.state.showESTJ
    this.setState({ showESTJ: !showESTJ })
  }

  onESFJ_click() {
    let showESFJ = this.state.showESFJ
    this.setState({ showESFJ: !showESFJ })
  }

  onENFJ_click() {
    let showENFJ = this.state.showENFJ
    this.setState({ showENFJ: !showENFJ })
  }

  onENTJ_click() {
    let showENTJ = this.state.showENTJ
    this.setState({ showENTJ: !showENTJ })
  } 
}

Briggs.PropTypes = {
  resultBriggs: PropTypes.string.isRequired
}

export default Briggs
