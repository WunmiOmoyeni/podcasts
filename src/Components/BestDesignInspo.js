import React from 'react'
import bestdesign from '../images/best-design-inspo.svg'
import playy from '../images/Play.svg'
import rightarrow from '../images/arrow-right.svg'

const BestDesignInspo = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center my-20 lg:my-56 px-4 lg:px-0'>
        <div className='lg:w-1/2 mb-10 lg:mb-0 lg:mr-10'>
            <div className='best-design-heading'>
                <h1 className='text-2xl lg:text-4xl font-bold' style={{fontFamily: 'Lato-Regular'}}>Best places to find design inspiration</h1>
            </div>
            
            <div className='flex mt-5 mb-5 w-full items-center'>
                <img className='mr-5' src={playy}/>
                <div className='mt-2'>
                    <p style={{fontFamily: 'Lato-Bold'}}>Episode 1</p>
                    <p>Category . 0:13</p>
                </div>
            </div>
            
            <p className='text-sm lg:text-base leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            <br/> <br/>Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <br/>

            <div className='flex items-center'>
                <p style={{fontFamily: 'Lato-Bold'}} className='mr-3 font-bold'>Episode Page</p>
                <img src={rightarrow}/>
            </div>
            
            
            
        </div>
        <img src={bestdesign} className=''/>
        
    </div>
  )
}

export default BestDesignInspo