import React from 'react'
import logo from '../img/hamburg.png'
function Menu({ toggleMenuClick }) {
     return (
          <span onClick={toggleMenuClick} id='menu'><img src={logo} alt='logo'></img></span>
     )
}

export default Menu
