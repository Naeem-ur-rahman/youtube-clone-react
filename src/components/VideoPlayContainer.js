import React from 'react'
import VideoFrame from './VideoFrame'

function VideoPlayContainer({ selectedVideo }) {
     return (
          <div className='VideoPlayContainer'>
               <VideoFrame selectedVideo={selectedVideo} />
          </div>
     )
}

export default VideoPlayContainer
