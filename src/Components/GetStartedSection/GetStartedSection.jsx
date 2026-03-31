import React, { Suspense } from 'react';
import GetCard from './GetCard';
const fetchPromise = async()=>{
    const res =await fetch('/GetStartedData.json')
return res.json();
}
const GetStartedSection = () => {
    const getPromise = fetchPromise()
    return (
        <div className='bg-base-200 mt-10 p-10'>
            <div className='max-w-7xl mx-auto'>
            <div className='text-center'>
               <h2 className='font-bold text-4xl'>Get Started in 3 Steps</h2>
               <p className='leading-7 mt-3 text-zinc-600'>Start using premium digital tools in minutes, not hours.</p> 
            </div>
       <Suspense fallback={<div className='text-center'>
  <span className="loading loading-dots loading-xl"></span>
</div>}>
       <GetCard getPromise={getPromise}></GetCard> 
       </Suspense>
       </div>
       </div>
    );
};

export default GetStartedSection;