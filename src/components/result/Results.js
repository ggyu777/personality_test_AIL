import React, { Component } from 'react'
//import Colors from '../result/Colors'
//import Letters from '../result/Letters'
import Briggs from '../result/Briggs'

class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
     
      showBriggsResult: true
    }
    this._onNextClick = this._onNextClick.bind(this)
  }

/*  renderResultColors() {
    return <Colors resultColors={this.props.resultColors} _onNextClick={this._onNextClick} />
  }

  renderResultLetters() {
    return <Letters resultLetters={this.props.resultLetters} _onNextClick={this._onNextClick} />
  }
*/
  renderBriggsResult() {
    return <Briggs resultBriggs={this.props.resultBriggs} />
  }

  render() {
    /*let showColorsResult = this.state.showColorsResult
    let showLettersResult = this.state.showLettersResult*/
    let showBriggsResult = this.state.showBriggsResult
   
    if (showBriggsResult) {
      return this.renderBriggsResult()
    }
  }

  _onNextClick() {
   /* let showColorsResult = this.state.showColorsResult
    let showLettersResult = this.state.showLettersResult
    let showBriggsResult = this.state.showBriggsResulty*/

  
  }
}

export default Results
