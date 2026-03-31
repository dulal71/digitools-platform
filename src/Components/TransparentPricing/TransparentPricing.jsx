import React, { use } from 'react';
import TransparentPricingCard from './TransparentPricingCard';

const TransparentPricing = ({ dataPromise}) => {
   const data = use(dataPromise);
   console.log(data);
    return (
        <div 
        className='max-w-7xl mx-auto p-10 mt-10 '>
            <div className='text-center'>
                <h2 className='font-bold text-4xl'>Simple, Transparent Pricing</h2>
                <p className='leading-7 mt-3 text-zinc-600'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
        <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10  lg:px-0'>
          {
            data.map(card => <TransparentPricingCard key={card.id} card={card}></TransparentPricingCard>)
          }  
        </div>
  </div>
    );
};

export default TransparentPricing;