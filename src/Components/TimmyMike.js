import React from 'react'
import timmy from '../images/timmymike.svg'
import rightarr from '../images/arrow-right.svg'
import playy from '../images/Play.svg'
import timeslider from '../images/Time Slider.svg'

const TimmyMike = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center lg:absolute lg:top-3/4 lg:left-56 w-full lg:w-3/4 p-4 lg:p-0 mt-48 lg:mt-0'>
        <img src={timmy} alt='Timmy Mike' className='w-full lg:w-auto mb-4 lg:mb-0'/>
        <div className='bg-white p-6 lg:py-20 lg:pl-8 lg:pt-10 rounded-lg shadow-lg shadow-gray w-full lg:w-8/12 overflow-hidden'>
            <div className='flex flex-col lg:flex-row justify-between'>
                <h1 className='text-2xl lg:text-3xl' style={{fontFamily: "Lato-Bold"}}>Timmy Mike: the nature of design</h1>
                
                <div className='flex items-center mt-4 lg:mt-0'>
                  <p>Episode Page</p>
                  <img className='ml-2' src={rightarr}></img>
                </div>    
            </div>

            <div className='flex text-gray-600 mt-5'>
              <p className='mr-2'>Episode 1 •</p>
              <p className='mr-2'>Microphone •</p>
              <p>0:13</p>
            </div>

            <div className='flex items-center mt-4'>
             <img src={playy} className='flex-shrink-0'/>
             <img src={timeslider} className='flex-grow max-w-full mx-4'/>
             <p>00:00 / 00:00</p>
            </div>
        </div>

        
    </div>
  )
}

export default TimmyMike