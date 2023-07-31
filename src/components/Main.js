import React, { Component } from 'react'
import VideosContainer from './VideosContainer'
import NavBar from './NavBar'

export class Main extends Component {
     render() {
          const { menuClick, toggleMenuClick, query } = this.props
          console.log(query + ' From Main')
          return (
               <div className='Main'>
                    <NavBar clicked={menuClick} toggleMenuClick={toggleMenuClick} />
                    <VideosContainer query={query} />
               </div>
          )
     }
}

export default Main
