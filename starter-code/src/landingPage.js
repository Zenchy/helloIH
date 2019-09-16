import React, {Component} from "react"
import "./landingPage.css"

class landingPage extends Component {
  render(){
    const title = 'Say hello to ReactJS'

    const elemTitle = (<h1>{title}</h1>)

    return(
      <div className="landingPage">
        {title}
      </div>
    )

  }
}

export default landingPage