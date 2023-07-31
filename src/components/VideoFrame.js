import React from 'react'

function VideoFrame({ selectedVideo = { selectedVideo } }) {
     const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
     const title = selectedVideo.snippet.title
     const channelTitle = selectedVideo.snippet.channelTitle
     const description = selectedVideo.snippet.description
     return (
          <div className='VideoFrame'>
               <iframe src={videoSrc}
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                    controls
               ></iframe>
               <h3 className='title'>{title}</h3>
               <p className='channel'>{channelTitle}</p>
               <p>{description}</p>
          </div>
     )
}

export default VideoFrame
