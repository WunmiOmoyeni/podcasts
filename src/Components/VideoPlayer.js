import React from 'react'
import playvideo from '../images/h1-video-paralax-img-2048x758.jpg.svg'
import playbutton from '../images/div.qodef-m-play-holder.svg'

const VideoPlayer = () => {
  return (
    <div className='relative flex justify-center items-center'>
        <img src={playvideo}/>
        <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={playbutton}/>
    </div>
  )
}

export default VideoPlayer