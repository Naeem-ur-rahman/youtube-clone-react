import React from 'react'
import homeIcon from '../img/home.png'
import shortsIcon from '../img/shorts.png'
import subscriptionIcon from '../img/subscription.png'
import libraryIcon from '../img/library.png'

function NavbarUnclicked() {
     return (
          <nav className='navbar'>
               <div className='first-nav'>
                    <span className='nav-link'>
                         <img src={homeIcon} alt='icon'></img>
                         <span>Home</span>
                    </span>
                    <span className='nav-link'>
                         <img src={shortsIcon} alt='icon'></img>
                         <span>Shorts</span>
                    </span>
                    <span className='nav-link'>
                         <img src={subscriptionIcon} alt='icon'></img>
                         <span>Subscription</span>
                    </span>
                    <span className='nav-link'>
                         <img src={libraryIcon} alt='icon'></img>
                         <span>Library</span>
                    </span>
               </div>
          </nav>
     )
}

export default NavbarUnclicked
