import React from 'react';
import ShowProduct from './ShowProduct';
import { toast } from 'react-toastify';

const CartProduct = ({selected,setSelected}) => {
   const total= selected.reduce((sum,item)=> sum + item.price,0)
 const payment = ()=>{
    setSelected([])
    toast.success('Payment Successfully')
 }  
    return (
        <div className=' space-y-5 p-5'>

    {selected.map(product=> <ShowProduct key={product.id} product={product} setSelected={setSelected} selected={selected}></ShowProduct>)}  
       <div>
    <div className='flex justify-between'>
  <p className='text-xl font-bold'>Total :</p>
  <p className='font-bold text-2xl text-red-700'>${total}</p>
    </div>
    <div>
 <button onClick={()=>payment()} className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full text-white py-2 rounded-full'>Proceed to Checkout</button>
  </div>
   </div>      
        </div>
    );
};

export default CartProduct;