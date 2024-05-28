import React, { useState } from 'react';
import logo from '../images/logonew1.png.svg';
import searchbutton from '../images/svg.svg';
import dropdown from '../images/span.qodef-m-lines.svg';
import closedown from '../images/icon-menu-close.svg'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  }

  return (
    <div className='absolute top-0 left-0 w-full p-4 shadow-none sm:shadow-md'>
      {isOpen && <div className='overlay' onClick={closeDropdown}></div>}
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
        <div className='sm:hidden mt-4'>
          <div className='dropdown-menu'>
            <div className='flex justify-around ml-24'>
            <img src={closedown} onClick={closeDropdown} className=''/>
            </div>
          
          <div className='flex items-center space-x-3 mt-4 bg-gray-400 p-5 rounded-lg'>
            
            <img className='h-6' src={searchbutton} alt='Search' />
            <p className='font-bold text-white'>Search</p>
          </div>
          <a href='#' className='block font-bold hover:underline my-5 mt-5 px-10 py-3'>Homes</a>
          <a href='#' className='block font-bold hover:underline my-5 px-10 py-3'>Pages</a>
          <a href='#' className='block font-bold hover:underline my-5 px-10 py-3'>Blog</a>
          <a href='#' className='block font-bold hover:underline my-5 px-10 py-3'>Podcast</a>
          <a href='#' className='block font-bold hover:underline my-5 px-10 py-3'>Shop</a>
          
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
