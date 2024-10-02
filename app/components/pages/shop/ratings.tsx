import { Starhalficon, Staricon, Starlineicon } from '@/app/icons';
import React from 'react'
interface RatingProps {
    rating: number; // The rating out of 5
}

const Ratings: React.FC<RatingProps> = ({ rating }) => {
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
                <div className='flex gap-1 items-center'>
                    {renderStars()}
                </div>
                <p className='text-sm font-medium font-dm text-gray-500'>{rating} {rating > 1 ? 'Stars' : 'Star'}</p>
            </div>
        </div>
    )
}

export default Ratings
