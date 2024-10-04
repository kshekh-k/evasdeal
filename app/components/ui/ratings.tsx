'use client'
import { Starhalficon, Staricon, Starlineicon } from '@/app/icons';
import React from 'react'
interface ratings {
    rating?: number,
    className?:string,
    reviewtext?:string,
}
const Ratings: React.FC<ratings> = ({rating = 0, className,reviewtext}) => {   
  

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
       
         
            <div className={`flex gap-1 items-center justify-between w-48 ${className}`} aria-colcount={rating}>               
                   <div className='w-24 items-center justify-between flex'> {renderStars()} </div>                 
                <p className='text-sm font-medium font-dm text-gray-500'>({rating} <span className={reviewtext}>{rating > 1 ? 'Reviews' : 'Review'}</span>)</p>
            </div>
    
    )
}

export default Ratings
