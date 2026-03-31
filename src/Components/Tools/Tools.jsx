import React, { use, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
const Tools = ({getPromise,setCount}) => {
    const data = use(getPromise)
   const [selected,setSelected] = useState([])
    const [open,setOpen]=useState('Products')
    setCount(selected.length)
    return (
        <div className='max-w-7xl mx-auto mt-15'>
            <div className=''>
<div className='text-center'>
    <h2 className='text-4xl font-bold leading-tight tracking-tight bg-linear-to-r from-black to-gray-500 bg-clip-text text-transparent '>Premium Digital Tools</h2>
<p className='mt-3 text-zinc-500 font-semibold'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
</div>
<div className='flex justify-center mt-3'>
{/* name of each tab group should be unique */}
<div className="tabs tabs-box flex gap-5">
  <input onClick={()=>setOpen('Products')} type="radio" name="my_tabs_1" className={`tab ${open ==='Products'?'rounded-full px-12 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white':'text-gray-600'} `} aria-label="Products" defaultChecked />
  <input onClick={()=>setOpen('cart')} type="radio" name="my_tabs_1" className={`tab ${open==='cart' ?'rounded-full px-12 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white':'text-gray-600'} `} aria-label={`Cart (${selected.length})`} />
</div>
</div>
            </div>
         {open === 'Products'? <Products data={data} selected={selected} setSelected={setSelected} ></Products> : <Cart selected={selected} setSelected={setSelected}></Cart>}   
        </div>
    );
};

export default Tools;