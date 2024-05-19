import React from 'react';
import rightarrow from '../images/arrow-right.svg';
import picture1 from '../images/manwithhead.svg';
import picture2 from '../images/flowers.svg';
import picture3 from '../images/skyscraper.svg';
import picture4 from '../images/cartyre.svg';
import picture5 from '../images/manwithhair.svg';
import picture6 from '../images/thinkagain.svg';
import share from '../images/share.svg';
import play from '../images/span.qodef-e-media-icon.svg';

const EssentialEpisodes = () => {
  return (
    <div className='flex justify-center'>
      <div className='content-center w-full max-w-6xl my-20 px-4'>
        <div className='justify-between items-center mx-6'>
          <h1 className='text-3xl font-black'>Essential episodes:</h1>
          <div className='flex items-center mt-3'>
            <p className='mr-2 font-regular'>View all episodes</p>
            <img src={rightarrow} alt='Right Arrow' />
          </div>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
          {[picture1, picture2, picture3, picture4, picture5, picture6].map((picture, index) => (
            <div className='relative flex flex-col rounded-lg bg-white mx-6 shadow-lg shadow-gray' key={index}>
              <img src={picture} alt={`Episode ${index + 1}`} />
              
              <div className='py-7 px-7 rounded-lg bg-white shadow-lg mt-3'>
                <p>Episode {index + 1} • Technology</p>
                <h2 className='text-2xl mt-2 font-black'>SRKP selects: how the new ages work</h2>
                <hr className='h-1 bg-black'></hr>
                <div className='flex items-center mt-5'>
                  <p className='mr-2'>Share</p>
                  <img src={share} alt='Share Icon' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EssentialEpisodes;
