import React from 'react';
import InstaPng from '../../assets/footerIcon/Instagram.png'
import Facebook from '../../assets/footerIcon/Facebook.png'
import Twitter from '../../assets/footerIcon/Twitter.png'
const Footer = () => {
    return (
        <div className='bg-[#101727] p-10  '>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10'>
         <div className=''>
            <h3 className='text-3xl font-bold text-white'>DigiTools</h3>
            <p className='text-gray-300 leading-7'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
            </div>   
         <div>
            <h4 className='text-gray-300 font-bold text-xl'>Product</h4>
            <ul className='text-gray-300 leading-7'>
                <li><a href="">Features</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Templates</a></li>
                <li><a href="">Integrations</a></li>
                </ul>
            </div>   
         <div>

<h4 className='text-gray-300 font-bold text-xl'>Company</h4>
            <ul   className='text-gray-300 leading-7'>
                <li><a href="">About</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Press</a></li>
                </ul>

            </div>   
         <div>
            <h4 className='text-gray-300 font-bold text-xl'>Resources</h4>
           <ul className='text-gray-300 leading-7'>
                <li><a href="">Documentation</a></li>
                <li><a href="">Help Center</a></li>
                <li><a href="">Community</a></li>
                <li><a href="">Contact</a></li>
                </ul> 
            </div>   
         <div>
<h4 className='text-gray-300 font-bold text-xl'>Social Links</h4>
<ul className=' flex gap-2 items-center'>
    <li><img src={InstaPng} alt="" /></li>
    <li><img src={Facebook} alt="" /></li>
    <li><img src={Twitter} alt="" /></li>
</ul>
            </div>   
            </div>    
        <div className='max-w-7xl mx-auto flex justify-between items-center mt-5 border-t-2 border-gray-100 p-3'>
         <div>
            <p className='text-gray-300 leading-7'>© 2026 Digitools. All rights reserved.</p>
            </div>   
         <ul className='text-gray-300 leading-7 flex gap-5'>
         
         <li><a href="">Privacy Policy</a></li>   
         <li><a href="">Terms of Service </a></li>   
         <li><a href="">Cookies</a></li>   
            
            </ul>   
            
            </div>    
        </div>
    );
};

export default Footer;