import React, {Component} from "react"
import "./landingPage.css"
import Text from './text.js'
import Images from './images.js'
import Button from './button.js'

class LandingPage extends Component {
  render(){ 
    return(
      <div class="landingPage">
      <div><Images/></div>
        <div>
          <Text/>
          <Button/>
        </div>
      </div>
    )

  }
}

export default LandingPage
