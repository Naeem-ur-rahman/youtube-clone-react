import React, { Component } from 'react'
import SearchIcon from '../img/search.png'

export class SearchBar extends Component {

     constructor(props) {
          super(props)

          this.state = {
               query: ''
          }
     }

     changeHandler = (e) => {
          this.setState({
               query: e.target.value
          })
          console.log(e.target.value)
     }

     searchSubmitHandler = (e) => {
          const { getQueryM } = this.props
          const { query } = this.state
          console.log('From SearchBar')
          getQueryM(query)
          e.preventDefault()
     }

     render() {
          const { query } = this.state
          return (
               <form className='SearchBar' title='Search' onSubmit={this.searchSubmitHandler}>
                    <input type='text' placeholder='Search' value={query} onChange={this.changeHandler} />
                    <button type='button' ><img src={SearchIcon} alt='SearchIcon' onClick={this.searchSubmitHandler}></img></button>
               </form>
          )
     }
}

export default SearchBar
