import { ShoppingBag, ShoppingCart } from 'lucide-react';
import React from 'react';

const EmptyMessage = () => {
    return (
        <div className=' bg-white shadow-lg border-2 border-gray-100 p-5'>
         <p className='font-bold text-2xl'>Your Cart</p> 
         <div className='flex flex-col justify-center items-center'>
         <ShoppingCart className='text-zinc-300' size={200}></ShoppingCart> 
         <p className='text-zinc-500 text-xl'>Your Cart is empty</p>
            </div>  
        </div>
    );
};

export default EmptyMessage;