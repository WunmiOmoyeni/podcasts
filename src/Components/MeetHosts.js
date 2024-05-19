import React from 'react'
import rightarrow from '../images/arrow-right.svg'
import bella from '../images/Bella.svg'
import edwin from '../images/Edwin.svg'
import caitlyn from '../images/Caitlyn.svg'
import twittericon from '../images/twitter-icon.svg'
import linkedin from '../images/linkedin-icon.svg'
import facebook from '../images/facebook-icon.svg'

export const MeetHosts = () => {
  return (
    <div className='flex justify-center'>
    <div className='content-center w-full max-w-6xl my-20'>
        <div className='justify-between items-center mx-6'>
            <h1 className='text-3xl' style={{fontFamily: "Lato-Black"}}>Meet your hosts:</h1>
            <div className='flex items-center mt-3'>
                <p className='mr-2' style={{fontFamily: "Lato-Regular"}}>View all of them</p>
                <img src={rightarrow}/>
            </div>
        </div>

        <div className='my-5 grid sm:grid-cols-3'>
            <div className='flex flex-col rounded-lg bg-white mx-6 shadow-lg shadow-gray my-10'>
                <img src={bella}/>
                <div className='p-5'>
                    <h1 className='text-3xl' style={{fontFamily: "Lato-Bold"}}>Bella Jimenez</h1>
                    <p className='pt-2'>Creative strategist</p>
                    <div className='flex pt-5'>
                        <img className='mr-2' src={facebook}/>
                        <img className='mr-2' src={linkedin}/>
                        <img src={twittericon}/>
                    </div>
                </div>
            </div>

            <div className='flex flex-col rounded-lg bg-white mx-6 shadow-lg shadow-gray my-10'>
                <img src={edwin}/>
                <div className='p-5'>
                    <h1 className='text-3xl' style={{fontFamily: "Lato-Bold"}}>Edwin Watson</h1>
                    <p className='pt-2'>Creative strategist</p>
                    <div className='flex pt-5'>
                        <img className='mr-2' src={facebook}/>
                        <img className='mr-2' src={linkedin}/>
                        <img src={twittericon}/>
                    </div>
                </div>
            </div>

            <div className='flex flex-col rounded-lg bg-white mx-6 shadow-lg shadow-gray my-10'>
                <img src={caitlyn}/>
                <div className='p-5'>
                    <h1 className='text-3xl' style={{fontFamily: "Lato-Bold"}}>Caitlin Henderson</h1>
                    <p className='pt-2'>Creative strategist</p>
                    <div className='flex pt-5'>
                        <img className='mr-2' src={facebook}/>
                        <img className='mr-2' src={linkedin}/>
                        <img src={twittericon}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}


export default MeetHosts;