import React from 'react'
import rightarrow from '../images/arrow-right.svg'
import picture1 from '../images/manwithhead.svg'
import picture2 from '../images/flowers.svg'
import picture3 from '../images/skyscraper.svg'
import picture4 from '../images/cartyre.svg'
import picture5 from '../images/manwithhair.svg'
import picture6 from '../images/thinkagain.svg'
import share from '../images/share.svg'

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
            <div>
                <img src={picture1}/>
                <div className='pl-5 pr-5 my-5 episodes'>
                    <p>Episode 1 • Technology</p>
                    <h2 className='text-2xl' style={{fontFamily: "Lato-Black"}} >SRKP selects: how the new ages work</h2>
                    <div className='flex'>
                        <p className='mr-2'>Share</p>
                        <img src={share}/>
                    </div>
                    
                </div>
                
            </div>  

            <div>
                <img src={picture2}></img>
                <div className='pl-5 pr-5 my-5 episodes'>
                    <p>Episode 2 • Technology</p>
                    <h2 className='text-2xl' style={{fontFamily: "Lato-Black"}} >SRKP selects: how the new ages work</h2>
                    <div className='flex'>
                        <p className='mr-2'>Share</p>
                        <img src={share}/>
                    </div>
                    
                </div>
            </div>

             <div>
                <img src={picture3}></img>
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
            <div>
                <img src={picture4}/>
                <div className='pl-5 pr-5 my-5 episodes'>
                    <p>Episode 4 • Technology</p>
                    <h2 className='text-2xl' style={{fontFamily: "Lato-Black"}} >SRKP selects: how the new ages work</h2>
                    <div className='flex'>
                        <p className='mr-2'>Share</p>
                        <img src={share}/>
                    </div>
                    
                </div>
            </div>  

            <div>
                <img src={picture5}></img>
                <div className='pl-5 pr-5 my-5 episodes'>
                    <p>Episode 5 • Technology</p>
                    <h2 className='text-2xl' style={{fontFamily: "Lato-Black"}} >SRKP selects: how the new ages work</h2>
                    <div className='flex'>
                        <p className='mr-2'>Share</p>
                        <img src={share}/>
                    </div>
                    
                </div>
            </div>

             <div>
                <img src={picture6}></img>
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