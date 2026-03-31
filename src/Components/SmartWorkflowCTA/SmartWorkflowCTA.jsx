import React from 'react';

const SmartWorkflowCTA = () => {
    return (
        <div className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
        <div className='max-w-5xl mx-auto p-10'>
          <div className='text-center'>
           <h3 className='text-4xl font-bold text-white leading-tight tracking-tight '>Ready to Transform Your Workflow?</h3> 
           <p className='mt-5 text-gray-300 leading-7'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
            </div>  
          <div className='mt-5 flex flex-col md:flex-row gap-5 justify-center items-center'>
<button className='btn rounded-full  text-[#4F39F6]'>Explore Products</button>
<button className='btn rounded-full bg-transparent text-white'>View Pricing</button>

          </div>
          <p  className='mt-5 text-gray-300 leading-7 text-center'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
        </div>
    );
};

export default SmartWorkflowCTA;