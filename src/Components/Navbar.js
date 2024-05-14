import React from 'react'
import logo from '../images/logonew1.png.svg'
import searchbutton from '../images/svg.svg'
import dropdown from '../images/span.qodef-m-lines.svg'

export const Navbar = () => {
  return (
    <div className='flex p-10 justify-items-center'>
      <img className='mr-20' src={logo}></img>
      <div className="ml-20">
        <a href='#' className='ml-20 mr-10'>Home</a>
        <a href='#' className='mr-10'>Pages</a>
        <a href='#' className='mr-10'>Blog</a>
        <a href='#' className='mr-10'>Podcast</a>
        <a href='#' className='mr-20'>Shop</a>
      </div>

      <div className='flex mr-20 ml-20'>
         <img className='mr-3' src={searchbutton}></img>
         <p>Search</p>
      </div>

      <img src={dropdown}></img>
    </div>
  )
}

export default Navbar;
