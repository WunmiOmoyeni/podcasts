import React from 'react'
import './index.css'
import NavbarImage from './Components/NavbarImage'
import BestDesignInspo from './Components/BestDesignInspo'
import TopPodcasts from './Components/TopPodcasts'
import EssentialEpisodes from './Components/EssentialEpisodes'

export const App = () => {
  return (
    <div>
      <NavbarImage/>
      <BestDesignInspo/>
      <TopPodcasts/>
      <EssentialEpisodes/>
    </div>
  )
}

export default App
