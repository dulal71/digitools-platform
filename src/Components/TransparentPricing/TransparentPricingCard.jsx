import React from 'react';
import Features from '../Products/Features';

const TransparentPricingCard = ({card}) => {
  console.log(card);
  const {name,description,price,period,tag,buttonText,features
} = card
    return (
        <div className={`${tag==='most popular'? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]':'bg-base-200' } p-5 space-y-5 rounded-lg relative shadow`}>
        <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-200 px-2 rounded-full'>{tag}</div>
         <div className='space-y-3'>
          <h3 className='font-bold text-2xl'>{name}</h3>  
          <p>{description}</p>
          <p><span className='text-3xl font-bold'>{price} </span>/ <span>{period} </span> </p>
    </div> 
    <div>
        {features.map((text,index)=> <Features key={index} text={text}></Features>)}
        </div>  
         <button className={`${buttonText==='Start Pro Trial'? 'bg-base-200 ': 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white '} w-full rounded-full py-2 `}>{buttonText}</button>   
        </div>
    );
};

export default TransparentPricingCard;