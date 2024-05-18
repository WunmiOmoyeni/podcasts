import React from 'react'
import listenapple from '../images/applelisten.svg'
import soundcloud from '../images/soundcloud.svg'

const NewEpisode = () => {
  return (
    <div className='absolute top-1/4 left-56'>
        <div className='text-6xl w-3/4' style={{fontFamily: "Lato-Bold"}}>
            <h1>New episode available now</h1>
        </div>
        <p>Available on Apple Soundcast and Spotify.</p>
        <div className='flex mt-5'>
            <img className='mr-2' src={listenapple}/>
            <img src={soundcloud}/>
        </div>
    </div>
  )
}

export default NewEpisode