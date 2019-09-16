import React, {Component} from "react"
import "./landingPage.css"

class LandingPage extends Component {
  render(){
    const title = 'Say hello to ReactJS'

    const elemTitle = (<h1>{title}</h1>)

    return(
      <div className="landingPage">
        <h1>HOLAAAAA</h1>
        {elemTitle}
      </div>
    )

  }
}

export default LandingPage