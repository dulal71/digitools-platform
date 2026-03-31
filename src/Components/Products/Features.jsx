import { Check } from 'lucide-react';
import React from 'react';

const Features = ({text}) => {
    return (
        <p className={`flex gap-1 items-center  text-black`}><Check className='text-green-600'></Check>{text}</p>
    );
};

export default Features;