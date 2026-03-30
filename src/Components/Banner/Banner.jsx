import React from 'react';
import Group from '../../assets/products/Group 5.png'
import Play from '../../assets/play.png'
import BannerImage from '../../assets/banner.png'
const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 mt-20 p-4'>
            {/* left-content */}
         <div className='space-y-8 '>
          <div className='max-w-72 flex items-center justify-center gap-1 bg-[#E1E7FF] rounded-full px-3 py-1 '>
         <img className='w-3 h-3' src={Group} alt="" />   
          <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p> 
            </div> 
            <h1 className='text-2xl md:text-5xl font-bold leading-tight tracking-tight bg-linear-to-r from-black to-gray-500 bg-clip-text text-transparent'>Supercharge Your <br />
            Digital Workflow</h1> 
            <p className='text-zinc-600 leading-7'>Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today. <br />

Explore Products
</p>
<div className='flex gap-4'>
    <button className='btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Explore Products</button>
    <button className='btn border  border-[#4F39F6] rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text'> <img src={Play} alt="play image" />Watch Demo</button>
</div>
            </div>   
          {/* right-content */}
         <div>
<img src={BannerImage} alt="banner-image" />
         </div>
        </div>
    );
};

export default Banner;