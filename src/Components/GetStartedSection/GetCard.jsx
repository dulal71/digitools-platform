import React, { use } from 'react';

const GetCard = ({getPromise}) => {
    const data = use(getPromise)
    console.log(data);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
         {
            data.map(card =>(<div key={card.id} className=' bg-white px-7 py-15 relative rounded-md shadow' >
                <div className='w-8 h-8 rounded-full shadow-md flex items-center justify-center font-bold absolute right-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>{card.id}</div>
              <div className='space-y-5 flex flex-col justify-center items-center mt-10'>
 <div className='w-24 h-24 rounded-full flex justify-center items-center p-3 bg-[#e1e7ffc4]'>
                <img src={card.image} alt="image" />
                </div> 
               <div className='text-center'>
<h3 className='font-bold text-xl'>{card.name} </h3>
<p>{card.description} </p>
               </div>
              </div>
              
                 </div>))
         }   
        </div>
    );
};

export default GetCard;