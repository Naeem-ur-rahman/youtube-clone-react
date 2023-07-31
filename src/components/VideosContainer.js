import React, { Component } from 'react'
import youtube from '../api/youtube'
import HomeVideos from './HomeVideos'

export class VideosContainer extends Component {

     constructor(props) {
          super(props)

          this.state = {
               videos: [],
               q: 'popular videos'
          }
     }

     componentDidMount = async () => {
          const response = await youtube.get('search',
               {
                    params: {
                         part: 'snippet',
                         maxResults: 10,
                         key: 'AIzaSyCKZXldwH1a_Bceg1u4ECMXbsxcrzoQJDY',
                         q: this.state.q
                    }
               }).catch(err => {
                    console.log('Error in mount')
                    console.log(this.state.q)
                    console.log(this.props.query)
                    console.log(err)
               })
          console.log(response.data.items)
          this.setState({ videos: response.data.items })
          console.log('In mount')
          console.log(this.state.q)
          console.log(this.props.query)
     }

     componentDidUpdate = async (prevProps) => {
          if (prevProps.query !== this.props.query) {

               this.setState({
                    q: this.props.query
               })

               const response = await youtube.get('search',
                    {
                         params: {
                              part: 'snippet',
                              maxResults: 10,
                              key: 'AIzaSyCKZXldwH1a_Bceg1u4ECMXbsxcrzoQJDY',
                              q: this.props.query
                         }
                    }).catch(err => {
                         console.log('Error in Update')
                         console.log(this.state.q)
                         console.log(this.props.query)
                         console.log(err)
                    })
               console.log(response.data.items)
               this.setState({ videos: response.data.items })
               console.log('In Update')
               console.log(this.state.q)
               console.log(this.props.query)

          }
     }

     render() {
          if (this.state.videos) {
               return (
                    <div className='VideosContainer'>
                         {
                              this.state.videos.map((video, index) => <HomeVideos key={`${video.id.videoId}${index}`} video={video} />)
                         }
                    </div>
               )
          }
     }
}

export default VideosContainer
