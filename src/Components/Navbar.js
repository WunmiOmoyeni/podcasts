import React from 'react';
import logo from '../images/logonew1.png.svg';
import searchbutton from '../images/svg.svg';
import dropdown from '../images/span.qodef-m-lines.svg';

export const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full p-4'>
    <div className='flex items-center justify-between'>
      <img className='h-8' src={logo} alt='Logo' />

      <div className='flex space-x-10'>
        <a href='#' className='font-bold hover:underline relative'>
          <span className='hover:absolute hover:bottom-0 hover:left-0 hover:w-full hover:h-1'></span>Homes
        </a>
        <a href='#' className='font-bold hover:underline'>Pages</a>
        <a href='#' className='font-bold hover:underline'>Blog</a>
        <a href='#' className='font-bold hover:underline'>Podcast</a>
        <a href='#' className='font-bold hover:underline'>Shop</a>
      </div>

      <div className='flex items-center space-x-3'>
        <img className='h-6' src={searchbutton} alt='Search' />
        <p className='font-bold'>Search</p>
      </div>

      <img className='h-6' src={dropdown} alt='Menu' />
    </div>
    </div>
  );
};

export default Navbar;
