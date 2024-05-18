import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import rightarrow from '../images/arrow-right.svg'
import image1 from '../images/manwithhair.svg'
import image2 from '../images/manwithhead.svg'
import image3 from '../images/skyscraper.svg'
import image11 from '../images/manwithhphones.svg'
import image12 from '../images/whiteman.svg'
import image13 from '../images/easymind.svg'

const TopPodcasts = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }
  return (
    <div className='bg-[#F8F8F8] overflow-hidden'>
        <div className='text-center p-10'>
            <h1 className='text-4xl font-bold mb-3' style={{fontFamily: 'Lato-Black'}}>Top Podcasts:</h1>
            <p>Discover the selection of the most popular podcasts.</p>
        </div>
        <div className='gap-10 p-5'>
          <Slider {...sliderSettings} >
            <div>
              <div className='flex rounded-lg bg-white mx-6 shadow-lg shadow-gray '>
                <img src={image12}/>
                <div className='my-auto px-5 items-center   '>
                  <p className='font-thin'>Episode 7 . Technology</p>
                  <h2 className='font-bold text-3xl'>SRKP selects: open your mind easy</h2>
                  <hr className='h-1 bg-black'></hr>
                  <div className='flex'>
                    <p className='mr-2 mt-3 font-bold'>Episode page</p>
                    <img src={rightarrow}/>
                  </div>
                </div>
              </div>
            </div>
            <div>

              <div className='flex rounded-lg bg-white shadow-lg mx-6 shadow-gray gap-4'>
                <img src={image11}/>
                <div className='my-auto px-5 items-center   '>
                  <p className='font-thin'>Episode 8 . Technology</p>
                  <h2 className='font-bold text-3xl'>SRKP selects: keep your watch</h2>
                  <hr className='h-1 bg-black'></hr>
                  <div className='flex'>
                    <p className='mr-2 mt-3 font-bold'>Episode page</p>
                    <img src={rightarrow}/>
                  </div>
                </div>
              </div>
            </div>
            <div>

              <div className='flex rounded-lg bg-white shadow-lg mx-6 shadow-gray '>
                <img src={image13}/>
                <div className='my-auto px-5 items-center   '>
                  <p className='font-thin'>Episode 8 . Technology</p>
                  <h2 className='font-bold text-3xl'>SRKP selects: keep your watch</h2>
                  <hr className='h-1 bg-black'></hr>
                  <div className='flex'>
                    <p className='mr-2 mt-3 font-bold'>Episode page</p>
                    <img src={rightarrow}/>
                  </div>
                </div>
              </div>
            </div>
        
          </Slider>
        </div>
    </div>
  )
}

export default TopPodcasts