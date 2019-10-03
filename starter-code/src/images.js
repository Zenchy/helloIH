import React, {Component} from 'react';
import './images.css'

class Images extends Component{
  render(){
    const logoIronHack = './images/ironhack-logo.svg'
    const logoMenu= './images/menu-top.svg'
    return(
      <div class='images' >
        <img src={logoIronHack} class = 'logoIronHack' />
        <img src={logoMenu} class = 'logoMenu' />
      </div>
    )
  }
}

export default Images;