import React from 'react';
import Product from '../Products/Product';
import { Heading1 } from 'lucide-react';
import EmptyMessage from '../EmptyMessage/EmptyMessage';
import CartProduct from './CartProduct';

const Cart = ({selected,setSelected}) => {
   
    return (
        <div className='mt-10 max-w-5xl mx-auto'>
   {selected.length===0 ? <EmptyMessage></EmptyMessage>:<CartProduct selected={selected} setSelected={setSelected}></CartProduct> }
        </div>
    );
};

export default Cart;