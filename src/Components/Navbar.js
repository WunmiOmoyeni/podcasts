import React from 'react'
import logo from '../images/logonew1.png.svg'
import searchbutton from '../images/svg.svg'
import dropdown from '../images/span.qodef-m-lines.svg'


export const Navbar = () => {
  return (
    <div className='flex p-10 absolute top-0'>
      <img className='resonator' src={logo}></img>
      <div className="ml-20">
        <a href='#' className='ml-20 mr-10 font-bold hover:underline relative'>
          <span className='hover:absolute hover:bottom-0 hover:left-0 hover:w-full hover:h-1'></span>Homes</a>
        <a href='#' className='mr-10 font-bold hover:underline'>Pages</a>
        <a href='#' className='mr-10 font-bold hover:underline'>Blog</a>
        <a href='#' className='mr-10 font-bold hover:underline'>Podcast</a>
        <a href='#' className='mr-20 font-bold hover:underline'>Shop</a>
      </div>

      <div className='flex mr-10 search'>
         <img className='mr-3' src={searchbutton}></img>
         <p className='font-bold'>Search</p>
      </div>

      <img src={dropdown}></img>

      
    </div>
  )
}

export default Navbar;
