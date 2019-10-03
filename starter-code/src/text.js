import React, {Component} from 'react'
import './text.css'

class Text extends Component {
  render(){
    const hello = 'Say hello to ReactJS'
    const lema = 'You will learn a Frontend framework from scratch, to became a Ninja Developer'

    return (
      <div class='hello' >
      {hello}
        <div class='lema' >
        {lema}
        </div>
      </div>
      
    )
  }
}

export default Text;