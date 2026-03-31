import React from 'react';
import { toast } from 'react-toastify';

const ShowProduct = ({product,setSelected,selected}) => {
   
    const {name,price,image}=product
    const deleteProduct =(item)=>{     
const filterProduct =selected.filter(card=> card.id !== item.id)
console.log(filterProduct);
  setSelected(filterProduct) 
  toast.success('Delete Successfully')
}
    return (
        <>
        <div className='flex justify-between items-center p-5  bg-zinc-100 rounded-lg'>
          <div className='flex gap-3 items-center'>
            <div className='border border-gray-300 p-2 rounded-full'>
         <img src={image} alt="product image" />   
        </div> 
          <div>
          <h3 className='text-sm md:text-2xl font-bold'>{name}</h3>
          <p  className='text-xl font-bold'>${price}</p> 
            </div>
          </div>
            <button onClick={()=>deleteProduct(product)} className='btn text-red-600'>Remove</button> 
        </div>

    </>
    );
};

export default ShowProduct;