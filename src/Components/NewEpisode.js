import React from 'react'
import listenapple from '../images/applelisten.svg'
import soundcloud from '../images/soundcloud.svg'

const NewEpisode = () => {
  return (
    <div className='flex flex-col items-center lg:items-start absolute top-56 left-1/2 transform -translate-x-1/2 lg:transform-none lg:left-56 w-full px-4 lg:w-auto'>
        <div className='text-3xl lg:text-6xl w-full lg:w-3/4 text-center lg:text-left' style={{fontFamily: "Lato-Bold"}}>
            <h1>New episode available now</h1>
        </div>
        <p className='mt-4 text-center lg:text-left'>Available on Apple Soundcast and Spotify.</p>
        <div className='flex mt-5 justify-center lg:justify-start'>
            <img className='mr-2' src={listenapple}/>
            <img src={soundcloud}/>
        </div>
    </div>
  )
}

export default NewEpisode