import React, { Component } from 'react'
import VideosContainer from './VideosContainer'
import NavBar from './NavBar'

export class Main extends Component {
     render() {
          const { menuClick, toggleMenuClick } = this.props
          return (
               <div className='Main'>
                    <NavBar clicked={menuClick} toggleMenuClick={toggleMenuClick} />
                    <VideosContainer />
               </div>
          )
     }
}

export default Main
