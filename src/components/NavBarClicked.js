import React from 'react'
import homeIcon from '../img/home.png'
import shortsIcon from '../img/shorts.png'
import subscriptionIcon from '../img/subscription.png'
import libraryIcon from '../img/library.png'
import videoIcon from '../img/video.png'
import historyIcon from '../img/history.png'
import watchIcon from '../img/watch.png'
import likeIcon from '../img/like.png'
import settingsIcon from '../img/settings.png'

function NavBarClicked({ toggleMenuClick }) {
     return (
          <nav className='NavBarClicked' >
               <div className='second-nav'>
                    <span className='nav-link active' >
                         <img src={homeIcon} alt='icon'></img>
                         <span>Home</span>
                    </span>
                    <span className='nav-link' onClick={toggleMenuClick}>
                         <img src={shortsIcon} alt='icon'></img>
                         <span>Shorts</span>
                    </span>
                    <span className='nav-link' onClick={toggleMenuClick}>
                         <img src={subscriptionIcon} alt='icon'></img>
                         <span>Subscription</span>
                    </span>
                    <span className='nav-link' onClick={toggleMenuClick}>
                         <img src={libraryIcon} alt='icon'></img>
                         <span>Library</span>
                    </span>
               </div>
               <div className='second-nav'>
                    <span className='nav-link' onClick={toggleMenuClick}>
                         <img src={videoIcon} alt='icon'></img>
                         <span>Your Videos</span>
                    </span>
                    <span className='nav-link' onClick={toggleMenuClick}>
                         <img src={historyIcon} alt='icon'></img>
                         <span>History</span>
                    </span>
                    <span className='nav-link' onClick={toggleMenuClick}>
                         <img src={watchIcon} alt='icon'></img>
                         <span>Watch later</span>
                    </span>
                    <span className='nav-link' onClick={toggleMenuClick}>
                         <img src={likeIcon} alt='icon'></img>
                         <span>Liked videos</span>
                    </span>
                    <span className='nav-link' onClick={toggleMenuClick}>
                         <img src={settingsIcon} alt='icon'></img>
                         <span>Settings</span>
                    </span>
               </div>
          </nav>
     )
}

export default NavBarClicked
