import React from 'react';
import Product from './Product';

const Products = ({data}) => {
    console.log(data);
    return (
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 md:px-4 p-4'>
     {data.map(card => <Product key={card.id} card={card}></Product>)}       
        </div>
    );
};

export default Products;