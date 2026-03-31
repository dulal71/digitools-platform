import { Check } from 'lucide-react';
import React from 'react';


const TransparentPricing = () => {
  
  
    return (
        <div 
        className='max-w-7xl mx-auto p-10 mt-10 '>
            <div className='text-center'>
                <h2 className='font-bold text-4xl'>Simple, Transparent Pricing</h2>
                <p className='leading-7 mt-3 text-zinc-600'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
        <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10  lg:px-0'>
       
{/* card-one       */}
      <div className='bg-base-200  p-5 space-y-5 rounded-lg relative shadow'>
 <div className='space-y-3'>
          <h3 className='font-bold text-2xl'>Starter</h3>  
          <p>Perfect for getting started</p>
          <p><span className='text-3xl font-bold'> $0/</span><span>month</span> </p>
    </div> 
    <div className='space-y-3'>
        <p className='flex gap-1 items-center  text-black'><Check className='text-green-600'></Check>Access to 10 free tools</p>
       <p className='flex gap-1 items-center  text-black'><Check className='text-green-600'></Check>Basic templates</p>
       <p className='flex gap-1 items-center  text-black'><Check className='text-green-600'></Check>Community support</p>
       <p className='flex gap-1 items-center  text-black'><Check className='text-green-600'></Check>1 project per month</p>
         <p className='flex gap-1 items-center  text-black'><Check className='text-green-600'></Check>SLA guarantee</p>
       <p className='flex gap-1 items-center  text-black'><Check className='text-green-600'></Check>Custom branding</p>
        </div>  
         <button className= 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full py-2'>Get Started Free</button>   
        </div>
         
 {/* cart-two      */}
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-5 space-y-5 rounded-lg relative shadow'>
        <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-200 px-2 rounded-full'>Most Popular</div>
         <div className='space-y-3'>
          <h3 className='font-bold text-2xl text-white'>Pro</h3>  
          <p className='text-white'>Best for professionals</p>
          <p><span className='text-3xl font-bold text-white'>$29/</span><span className='text-white'>month</span> </p>
    </div> 
    <div className='space-y-3'>
       <p className='flex gap-1 items-center  text-white'><Check className='text-green-600'></Check>Access to 10 free tools</p>
       <p className='flex gap-1 items-center  text-white'><Check className='text-green-600'></Check>Basic templates</p>
       <p className='flex gap-1 items-center  text-white'><Check className='text-green-600'></Check>Community support</p>
       <p className='flex gap-1 items-center  text-white'><Check className='text-green-600'></Check>1 project per month</p>
       <p className='flex gap-1 items-center  text-white'><Check className='text-green-600'></Check>Cloud sync</p>
       <p className='flex gap-1 items-center  text-white'><Check className='text-green-600'></Check>Advanced analytics</p>
        </div>  
         <button className= 'bg-white text-black w-full rounded-full py-2'>Start Pro Trial</button>   
        </div>
       
  {/* card-three      */}
       
        <div className='bg-base-200  p-5 space-y-5 rounded-lg relative shadow'>
 <div className='space-y-3'>
          <h3 className='font-bold text-2xl'>Enterprise</h3>  
          <p>For teams and businesses</p>
          <p><span className='text-3xl font-bold'> $99/ </span><span>month</span> </p>
    </div> 
    <div className='space-y-3'>
        <p className='flex gap-1 items-center  text-black'><Check className='text-green-600'></Check>Everything in Pro</p>
       <p className='flex gap-1 items-center  text-black'><Check className='text-green-600'></Check>Team collaboration</p>
       <p className='flex gap-1 items-center  text-black'><Check className='text-green-600'></Check>Custom integrations</p>
       <p className='flex gap-1 items-center  text-black'><Check className='text-green-600'></Check>Dedicated support</p>
       <p className='flex gap-1 items-center  text-black'><Check className='text-green-600'></Check>SLA guarantee</p>
       <p className='flex gap-1 items-center  text-black'><Check className='text-green-600'></Check>Custom branding</p>
        </div>  
         <button className= 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full py-2'>Contact Sales</button>   
        </div>
          
        </div>
  </div>
    );
};

export default TransparentPricing;