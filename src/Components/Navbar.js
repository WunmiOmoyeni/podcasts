import React, { useState } from 'react';
import logo from '../images/logonew1.png.svg';
import searchbutton from '../images/svg.svg';
import dropdown from '../images/span.qodef-m-lines.svg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='absolute top-0 left-0 w-full p-4 shadow-none sm:shadow-md'>
      <div className='flex items-center justify-between'>
        <img className='h-4 sm:h-8' src={logo} alt='Logo' />

        {/* Desktop Menu */}
        <div className='hidden sm:flex space-x-10'>
          <a href='#' className='font-bold hover:underline'>Homes</a>
          <a href='#' className='font-bold hover:underline'>Pages</a>
          <a href='#' className='font-bold hover:underline'>Blog</a>
          <a href='#' className='font-bold hover:underline'>Podcast</a>
          <a href='#' className='font-bold hover:underline'>Shop</a>
        </div>

        <div className='hidden sm:flex items-center space-x-3'>
          <img className='h-6' src={searchbutton} alt='Search' />
          <p className='font-bold'>Search</p>
        </div>

        {/* Mobile Menu Button */}
        <button className='sm:hidden' onClick={toggleMenu}>
          <img className='h-6' src={dropdown} alt='Menu' />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='sm:hidden mt-4 bg-white'>
          <a href='#' className='block font-bold hover:underline py-2'>Homes</a>
          <a href='#' className='block font-bold hover:underline py-2'>Pages</a>
          <a href='#' className='block font-bold hover:underline py-2'>Blog</a>
          <a href='#' className='block font-bold hover:underline py-2'>Podcast</a>
          <a href='#' className='block font-bold hover:underline py-2'>Shop</a>
          <div className='flex items-center space-x-3 mt-4'>
            <img className='h-6' src={searchbutton} alt='Search' />
            <p className='font-bold'>Search</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
