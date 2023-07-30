import React from 'react'
import NavbarUnclicked from './NavbarUnclicked'
import NavBarClicked from './NavBarClicked'

function NavBar({ clicked, toggleMenuClick }) {

     return (<>
          {clicked && <NavbarUnclicked />}
          {!clicked && <NavBarClicked toggleMenuClick={toggleMenuClick} />}
     </>
     )
}

export default NavBar
