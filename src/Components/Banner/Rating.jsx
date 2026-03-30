import React from 'react';

const Rating = () => {
    return (
        <div className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-10'>
        <div className= 'max-w-7xl mx-auto flex  items-center justify-center p-15'>
          <div className='  text-center border-r border-white px-5   md:px-24 '>
            <span className='text-5xl font-bold text-white'>50+</span>
            <p className='font-medium text-6 text-white mt-2'>Active Users</p>
          </div>
          <div  className=' text-center  border-r border-white  px-5  md:px-24'>
            <span className='text-5xl font-bold text-white'>200+</span>
            <p className='font-medium text-6 text-white mt-2'>Premium Tools</p>
          </div>
          <div className='text-center '>
            <span className='text-5xl font-bold text-white px-5 md:px-24'>
             4.9
            </span>
            <p className='font-medium text-6 text-white mt-2'>Rating</p>
          </div>
        </div>
        </div>
    );
};

export default Rating;