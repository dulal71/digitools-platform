import { Bold, Menu, ShoppingCart, X } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = ({count}) => {
    const [open,setOpen]=useState(false)
    return (
        <div className='border-b border-gray-300  overflow-x-hidden fixed left-0 right-0  '>
          <nav className='max-w-7xl mx-auto  flex justify-between items-center p-4'>

<div>
  <h1 className='font-bold text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h1>  
</div>
<div className=''>
 <ul className='hidden  md:flex items-center gap-5 font-medium'>
 <li className='hover:text-[#4F39F6] transition'><a href="/Products">Products</a></li>   
 <li className='hover:text-[#4F39F6] transition'><a href="/Features">Features</a></li>   
 <li className='hover:text-[#4F39F6] transition'><a href="/Pricing">Pricing</a></li>   
 <li className='hover:text-[#4F39F6] transition'><a href="/Testimonials">Testimonials</a></li>   
 <li className='hover:text-[#4F39F6] transition'><a href="/FAQ">FAQ</a></li>   
 </ul>   
</div>


<div className='hidden md:flex items-center gap-5'>
    <div className='relative transform hover:scale-150 transition duration-300'>
 <span className='text-red-700 font-bold text-xl absolute right-0 -top-5  rounded-full  '>{count}</span>
<ShoppingCart className=''></ShoppingCart>
    </div>
   <span className= ' font-bold hover:text-[#4F39F6] transition'>Login</span>
<button className='btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Get Started</button>
</div>

<div className='md:hidden flex'>
    <div>
        {open?<X onClick={()=>setOpen(!open)} size={30}></X>  : <Menu onClick={()=>setOpen(!open)} size={30} ></Menu> }
     </div>
    <div className={ ` mx-auto fixed bg-white shadow-xl p-6 transform transition-transform duration-1000 ease-out  right-0 left-0 w-80 ${open? 'translate-y-14 opacity-100 ': '-translate-y-100 '}`}>
        <ul className='flex flex-col justify-start  gap-5 font-bold'>
 <li className=' '><a href="/Products">Products</a></li>   
 <li><a href="/Features">Features</a></li>   
 <li><a href="/Pricing">Pricing</a></li>   
 <li><a href="/Testimonials">Testimonials</a></li>   
 <li><a href="/FAQ">FAQ</a></li>   
 </ul> </div>
</div>
            </nav>  
        </div>
    );
};

export default Navbar;