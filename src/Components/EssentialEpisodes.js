import React from 'react'
import rightarrow from '../images/arrow-right.svg'
import picture1 from '../images/manwithhead.svg'
import picture2 from '../images/flowers.svg'
import picture3 from '../images/skyscraper.svg'
import picture4 from '../images/cartyre.svg'
import picture5 from '../images/manwithhair.svg'
import picture6 from '../images/thinkagain.svg'
import share from '../images/share.svg'
import play from '../images/span.qodef-e-media-icon.svg'

const EssentialEpisodes = () => {
  return (
    <div className='mx-56 my-48'>
        <div className='flex justify-between'>
            <h1 className='text-3xl' style={{fontFamily: "Lato-Black"}}>Essential episodes:</h1>
            <div className='flex items-center'>
                <p className='mr-2' style={{fontFamily: "Lato-Regular"}}>View all episodes</p>
                <img src={rightarrow}/>
            </div>

            
        </div>
        
        <div className='flex justify-between my-10'>
            <div className='relative'>
                <img src={picture1}/>
                <img className='absolute right-12 top-3' src={play}/>
                <div className='pl-5 pr-5 my-5 episodes'>
                    <p>Episode 1 • Technology</p>
                    <h2 className='text-2xl' style={{fontFamily: "Lato-Black"}} >SRKP selects: how the new ages work</h2>
                    <div className='flex'>
                        <p className='mr-2'>Share</p>
                        <img src={share}/>
                    </div>
                    
                </div>
                
            </div>  

            <div className='relative'>
                <img src={picture2}></img>
                <img className='absolute right-12 top-3' src={play}/>
                <div className='pl-5 pr-5 my-5 episodes'>
                    <p>Episode 2 • Technology</p>
                    <h2 className='text-2xl' style={{fontFamily: "Lato-Black"}} >SRKP selects: how the new ages work</h2>
                    <div className='flex'>
                        <p className='mr-2'>Share</p>
                        <img src={share}/>
                    </div>
                    
                </div>
            </div>

             <div className='relative'>
                <img src={picture3}></img>
                <img className='absolute right-12 top-3' src={play}/>
                <div className='pl-5 pr-5 my-5 episodes'>
                    <p>Episode 3 • Technology</p>
                    <h2 className='text-2xl' style={{fontFamily: "Lato-Black"}} >SRKP selects: how the new ages work</h2>
                    <div className='flex'>
                        <p className='mr-2'>Share</p>
                        <img src={share}/>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className='flex justify-between'>
            <div className='relative'>
                <img src={picture4}/>
                <img className='absolute right-12 top-3' src={play}/>
                <div className='pl-5 pr-5 my-5 episodes'>
                    <p>Episode 4 • Technology</p>
                    <h2 className='text-2xl' style={{fontFamily: "Lato-Black"}} >SRKP selects: how the new ages work</h2>
                    <hr></hr>
                    <div className='flex'>
                        <p className='mr-2'>Share</p>
                        <img src={share}/>
                    </div>
                    
                </div>
            </div>  

            <div className='relative'>
                <img src={picture5}></img>
                <img className='absolute right-12 top-3' src={play}/>
                <div className='pl-5 pr-5 my-5 episodes'>
                    <p>Episode 5 • Technology</p>
                    <h2 className='text-2xl' style={{fontFamily: "Lato-Black"}} >SRKP selects: how the new ages work</h2>
                    <div className='flex'>
                        <p className='mr-2'>Share</p>
                        <img src={share}/>
                    </div>
                    
                </div>
            </div>

             <div className='relative'>
                <img src={picture6}></img>
                <img className='absolute right-12 top-3' src={play}/>
                <div className='pl-5 pr-5 my-5 episodes'>
                    <p>Episode 6 • Technology</p>
                    <h2 className='text-2xl' style={{fontFamily: "Lato-Black"}} >SRKP selects: how the new ages work</h2>
                    <div className='flex'>
                        <p className='mr-2'>Share</p>
                        <img src={share}/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default EssentialEpisodes