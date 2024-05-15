import React from 'react'
import timmy from '../images/timmymike.svg'
import rightarr from '../images/arrow-right.svg'

const TimmyMike = () => {
  return (
    <div className='flex absolute timmy '>
        <img src={timmy}/>
        <div className='bg-white p-5 w-1000 timmy-side'>
            <div className='flex'>
                <h1 className='text-2xl font-bold'>Timmy Mike: the nature of design</h1>
                
                
            </div>
        </div>
    </div>
  )
}

export default TimmyMike