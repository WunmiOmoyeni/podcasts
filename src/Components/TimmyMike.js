import React from 'react'
import timmy from '../images/timmymike.svg'
import rightarr from '../images/arrow-right.svg'
import playy from '../images/Play.svg'
import timeslider from '../images/Time Slider.svg'

const TimmyMike = () => {
  return (
    <div className='flex absolute top-3/4 left-56 w-3/4'>
        <img src={timmy}/>
        <div className='bg-white pl-8 pt-10 rounded-lg shadow-lg shadow-gray w-8/12 overflow-hidden'>
            <div className='flex justify-between'>
              <div className=''>
                <h1 className='text-3xl w-3/4' style={{fontFamily: "Lato-Bold"}}>Timmy Mike: the nature of design</h1>
              </div>
                
                <div className='flex items-center mr-3'>
                  <p>Episode Page</p>
                  <img className='ml-2' src={rightarr}></img>
                </div>    
            </div>

            <div className='flex text-gray-600 mt-5'>
              <p className='mr-2'>Episode 1 •</p>
              <p className='mr-2'>Microphone •</p>
              <p>0:13</p>
            </div>

            <div className='flex items-center w-full'>
             <img src={playy} className='flex-shrink-0'/>
             <img src={timeslider} className='flex-grow max-w-full'/>
             <p>00:00 / 00:00</p>
            </div>
        </div>

        
    </div>
  )
}

export default TimmyMike