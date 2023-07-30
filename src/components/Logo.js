import React from 'react'
import icon from '../img/youtube.png'
function Logo() {
     return (
          <div className='logo'>
               <span >
                    <img src={icon} alt='icon'></img>
                    <span>YouTube <sup>PK</sup> </span>
               </span>
          </div>
     )
}

export default Logo
