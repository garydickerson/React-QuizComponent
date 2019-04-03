import React, { Component } from 'react'

class QuizQuestionButton extends Component {
  rendor() {
    return (
      <li><button>{this.props.button_text}</button></li>
    )
  }
}

export default QuizQuestionButton
