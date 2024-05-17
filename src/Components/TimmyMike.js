import React from 'react'
import timmy from '../images/timmymike.svg'
import rightarr from '../images/arrow-right.svg'

const TimmyMike = () => {
  return (
    <div className='flex absolute timmy '>
        <img src={timmy}/>
        <div className='bg-white pl-8 pt-10 w-1000 timmy-side'>
            <div className='flex justify-between'>
              <div className='heading-timmy'>
                <h1 className='text-3xl' style={{fontFamily: "Lato-Bold"}}>Timmy Mike: the nature of design</h1>
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
        </div>
    </div>
  )
}

export default TimmyMike