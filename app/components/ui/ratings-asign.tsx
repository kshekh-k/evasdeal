'use client'
import { Starhalficon, Staricon, Starlineicon } from '@/app/icons';
import React from 'react'
const Ratings: React.FC = () => {
    const [rating, setRating] = React.useState(3.5)
 
    const handleRangeChange = (event:any) => {
        setRating(event.target.value);       
    };

    const handleTextChange = (event:any) => {        
        const inputValue = event.target.value; 
        if (/^-?\d*\.?\d*$/.test(inputValue) && (inputValue === '' || parseFloat(inputValue) <= 5)) {
            setRating(inputValue);
          }    
    };

    const renderStars = () => {
        return [...Array(5)].map((_, index) => {
            const starValue = index + 1;
            if (rating >= starValue) {
                return <Staricon key={index} className="text-yellow-500 size-4" />;
            } else if (rating >= starValue - 0.5) {
                return <Starhalficon key={index} className="text-yellow-500 size-4" />;
            } else {
                return <Starlineicon key={index} className="text-gray-400 size-4" />;
            }
        });
    };
    return (
        <div className='space-y-2 divide-y divide-gray-300'>
            <h3 className='text-base font-dm font-semibold text-gray-500'>Ratings</h3>
            <div className='pt-4 flex gap-1 items-center justify-between'>
                <div className='flex gap-1 items-center relative'>
                    {renderStars()}
                    <input type='range' className='w-full absolute inset-0 opacity-0' min={0} max={5} value={rating} step={0.5} onChange={handleRangeChange} />
                </div>
                <p className='text-sm font-medium font-dm text-gray-500'><input type='text' min={0} max={5} value={rating} onChange={handleTextChange} className='p-1 size-8 text-center appearance-none outline-none focus:ring-0 rounded border border-transparent hover:border-gray-300 focus:border-gray-300 ease-in-out duration-200' /> {rating > 1 ? 'Stars' : 'Star'}</p>
            </div>
        </div>
    )
}

export default Ratings
