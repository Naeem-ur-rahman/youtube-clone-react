import React from 'react'

function HomeVideos({ video, getSelectedVideo }) {
     //const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
     const title = video.snippet.title
     const channelTitle = video.snippet.channelTitle
     return (
          <div className='HomeVideos'>
               <div className='up'>
                    <img src={video.snippet.thumbnails.high.url} alt='img'></img>
               </div>
               <div className='down'>
                    <p onClick={() => getSelectedVideo(video, true)} className='title'> {title} </p>
                    <p>{channelTitle}</p>
                    <p></p>
               </div>
          </div>
     )
}

export default HomeVideos