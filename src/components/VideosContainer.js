import React, { Component } from 'react'
import youtube from '../api/youtube'
import HomeVideos from './HomeVideos'

export class VideosContainer extends Component {

     constructor(props) {
          super(props)

          this.state = {
               videos: []
          }
     }

     componentDidMount = async () => {
          const response = await youtube.get('search',
               {
                    params: {
                         part: 'snippet',
                         maxResults: 10,
                         key: 'AIzaSyBMfJXOe8LSXJoO9JQiC8lgpMlfWbJKeTA',
                         q: 'songs'
                    }
               })
          console.log(response.data.items)
          this.setState({ videos: response.data.items })
     }


     render() {
          return (
               <div className='VideosContainer'>
                    {
                         this.state.videos.map(video => <HomeVideos key={`https://www.youtube.com/embed/${video.id.videoId}`} video={video} />)
                    }
               </div>
          )
     }
}

export default VideosContainer
