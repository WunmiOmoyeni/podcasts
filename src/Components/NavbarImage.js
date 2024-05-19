import React from 'react'
import navbarimage from '../images/image.svg'
import Navbar from '../Components/Navbar'
import NewEpisode from './NewEpisode'
import TimmyMike from './TimmyMike'

export const NavbarImage = () => {
  return (
    <div className='relative'>
        <img 
        className='object-cover w-full h-full'
        src={navbarimage}
        />

        <Navbar/>
        <TimmyMike/>
        <NewEpisode/>
    </div>
  )
}

export default NavbarImage;
