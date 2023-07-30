import React, { Component } from 'react'
import SearchIcon from '../img/search.png'

export class SearchBar extends Component {

     constructor(props) {
          super(props)

          this.state = {

          }
     }


     searchHandler = () => {

     }

     render() {
          return (
               <div className='SearchBar' title='Search'>
                    <input type='text' placeholder='Search' />
                    <button onClick={this.searchHandler}><img src={SearchIcon} alt='SearchIcon'></img></button>
               </div>
          )
     }
}

export default SearchBar
