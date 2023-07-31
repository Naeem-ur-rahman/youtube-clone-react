import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Menu from './Menu'
import Logo from './Logo'
import MicroPhone from './MicroPhone'
import Create from './Create'
import Notification from './Notification'
import Profile from './Profile'

class HEADER extends Component {
     render() {
          const { toggleMenuClick, getQuery } = this.props
          const getQueryM = (q) => {
               console.log('From Header')
               getQuery(q)
          }

          return (
               <header className='header'>
                    <div className='flex-center'>
                         <Menu toggleMenuClick={toggleMenuClick} />
                         <Logo />
                    </div>
                    <div className='flex-center'>
                         <SearchBar getQueryM={getQueryM} />
                         <MicroPhone />
                    </div>
                    <div className='flex-center'>
                         <Create />
                         <Notification />
                         <Profile />
                    </div>
               </header>
          )
     }
}

export default HEADER