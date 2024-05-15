import React from 'react'
import listenapple from '../images/applelisten.svg'
import soundcloud from '../images/soundcloud.svg'

const NewEpisode = () => {
  return (
    <div className='new-episode'>
        <div className='new-episode-heading'>
            <h1>New episode available now</h1>
        </div>
        <p>Available on Apple Soundcast and Spotify.</p>
        <div className='flex mt-10'>
            <img className='mr-2' src={listenapple}/>
            <img src={soundcloud}/>
        </div>
    </div>
  )
}

export default NewEpisode