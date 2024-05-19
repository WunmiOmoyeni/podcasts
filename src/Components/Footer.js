import React from 'react'
import logo from '../images/logonew7.png.svg'
import youtube from '../images/youtube-footer.svg'
import twitter from '../images/twitter-footer.svg'
import instagram from '../images/instagram-footer.svg'
import facebook from '../images/facebook-footer.svg'

const Footer = () => {
  return (
    <div className='bg-black'>
        <div className='flex flex-col lg:flex-row justify-center lg:justify-between p-6 lg:p-20 collaborate'>
            <div className='text-center lg:text-left'>
                <img src={logo}></img>
                <p className='text-gray-600'>The great connection.</p>
            </div>

            <div className='text-center lg:text-left mt-6 lg:mt-0'>
                <p className='text-white text-2xl' style={{fontFamily:"Lato-Bold"}}>We collaborate with ambitious brands and people; let’s build something great together.</p>
            </div>
        </div>

        <div className='text-gray-600 flex flex-col lg:flex-row justify-center lg:justify-between p-6 lg:pl-20 lg:pb-20'>
            <div className='mb-6 lg:mb-0 lg:mr-20'>
                <p>Start a conversation:</p>
                <p>podcast@example.com +2 969 866 7033</p>
                <p className='mt-6 lg:mt-10'>Terms & Conditions</p>
            </div>

            <div className='mb-6 lg:mb-0 lg:mr-20'>
                <p>Find us here:</p>
                <p>Brooklyn, NY 11201 United States</p>
                <p className='mt-6 lg:mt-10'>Privacy Policy</p>
            </div>

            <div className='text-center lg:text-left'>
                <p>Follow us on:</p>
                <div className='flex justify-center lg:justify-start mt-3'>
                    <img className='mr-2' src={facebook}/>
                    <img className='mr-2' src={twitter}/>
                    <img className='mr-2' src={instagram}/>
                    <img src={youtube}/>
                </div>
                <p className='mt-6 lg:mt-10'>© 2021 Qode Interactive. All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer