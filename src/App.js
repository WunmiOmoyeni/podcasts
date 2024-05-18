import React from 'react'
import './index.css'
import NavbarImage from './Components/NavbarImage'
import BestDesignInspo from './Components/BestDesignInspo'
import TopPodcasts from './Components/TopPodcasts'
import EssentialEpisodes from './Components/EssentialEpisodes'
import VideoPlayer from './Components/VideoPlayer'
import MeetHosts from './Components/MeetHosts'
import Footer from './Components/Footer'

export const App = () => {
  return (
    <div className='overflow-hidden'>
      <NavbarImage/>
      <BestDesignInspo/>
      <TopPodcasts/>
      <EssentialEpisodes/>
      <VideoPlayer/>
      <MeetHosts/>
      <Footer/>
    </div>
  )
}

export default App
