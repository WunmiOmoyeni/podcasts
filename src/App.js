import React from 'react'
import './index.css'
import NavbarImage from './Components/NavbarImage'
import BestDesignInspo from './Components/BestDesignInspo'
import TopPodcasts from './Components/TopPodcasts'

export const App = () => {
  return (
    <div>
      <NavbarImage/>
      <BestDesignInspo/>
      <TopPodcasts/>
    </div>
  )
}

export default App
