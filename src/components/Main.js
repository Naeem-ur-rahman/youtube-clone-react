import React, { Component } from 'react'
import VideosContainer from './VideosContainer'
import NavBar from './NavBar'
import VideoPlayContainer from './VideoPlayContainer'

class Main extends Component {
     constructor(props) {
          super(props)

          this.state = {
               selectedVideo: [],
               selectedVideoClick: false
          }
     }


     render() {
          const getSelectedVideo = (q, click) => {
               console.log('Main SelectVideo')
               console.log(q)
               console.log(click)
               this.setState({
                    selectedVideo: q,
                    selectedVideoClick: click
               })
          }

          const { menuClick, toggleMenuClick, query } = this.props
          const { selectedVideo, selectedVideoClick } = this.state
          console.log(query + ' From Main')
          return (
               <div className='Main'>
                    <NavBar clicked={menuClick} toggleMenuClick={toggleMenuClick} />
                    {!selectedVideoClick && <VideosContainer query={query} getSelectedVideo={getSelectedVideo} />}
                    {selectedVideoClick && <VideoPlayContainer selectedVideo={selectedVideo} />}
               </div>
          )
     }
}

export default Main
