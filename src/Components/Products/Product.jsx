import React, { useState } from 'react';
import Features from './Features';
import { toast } from 'react-toastify';

const Product = ({card,setSelected,selected}) => {
    console.log(card);
 const {name,description,
features,image,period,price,tag} =card
const [add,setAdd]=useState(false)
const addCart=(product)=>{
const exist =selected.find(item => item.id === product.id)
if(exist){
  toast.warning('Already added to cart')
return;
}else{
toast.success('Added to card successfully')
setSelected([...selected,product])
setAdd(true)
}

}
    return (
        <div className='space-y-4 border-2 border-gray-200 rounded-2xl  p-4 transition-transform duration-300 hover:scale-105'>
         <div className='flex justify-between items-center'>
          <div className='border border-gray-300 p-2 rounded-full'>
            <img src={image} alt="" /> 
            </div>
          <span className={`px-3 py-0.5 rounded-full ${tag === 'new' ? 'bg-[#DBFCE7] text-green-800':
            tag === 'popular'? 'bg-[#E1E7FF] text-violet-600':
            tag === 'best seller'?'bg-[#FEF3C6] text-yellow-900':'bg-amber-100'
          }`}>{tag}</span> 
            </div>  
         <div className='space-y-3'>
          <h3 className='font-bold text-2xl'>{name}</h3>  
          <p className='text-zinc-500'>{description}</p>
          <p><span className='font-bold text-3xl'>${price}</span><span className='text-zinc-500'>/{period}</span></p>
            </div> 
         <div>
{features.map((text ,index) => <Features key={index} text={text}></Features>)}
         </div>
         <button onClick={()=>addCart(card)} className={`w-full rounded-full py-2 text-white ${add ? 'bg-linear-to-r from-green-900 to-green-500':'bg-linear-to-r from-[#4F39F6] to-[#9514FA]  '} `}>{add?'Added to Cart':'Buy Now'} </button>
        </div>
    );
};

export default Product;