import React, {Component} from 'react'
import './button.css'

class Button extends Component{
  render() {

    let buttonText = 'Awesome!'

    function clickButton(){
     buttonText='Fucking Awesome!!!'
    }

    return(
      <div class='button'>
      <h4 >{buttonText}</h4>
      </div>
    )
  }
}

export default Button;