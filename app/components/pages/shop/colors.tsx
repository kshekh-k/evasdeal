'use client'
import { Checkicon } from '@/app/icons'
import React from 'react'
const colorlist = [
    {
        color: '#00f',
        colorName: 'Blue',
        id: 1,
    },
    {
        color: '#ffc0cb',
        colorName: 'Pink',
        id: 2,
    },
    {
        color: '#fff',
        colorName: 'White',
        id: 3,
    },
    {
        color: '#ff0000',
        colorName: 'Red',
        id: 4,
    },
    {
        color: '#093',
        colorName: 'Green',
        id: 5,
    },
    {
        color: '#fcca19',
        colorName: 'Yellow',
        id: 6,
    },
    {
        color: '#ffa500',
        colorName: 'Orange',
        id: 7,
    },
    {
        color: '#808080',
        colorName: 'Gray',
        id: 8,
    },
    {
        color: '#800080',
        colorName: 'Purple',
        id: 9,
    },
    {
        color: '#000',
        colorName: 'Black',
        id: 10,
    },
]
function Colors() {
    const [showless, setShowless] = React.useState(5)
    const toggleNumber = () => {
        setShowless((prevNumber) => (prevNumber === colorlist.length ? 5 : colorlist.length));
    };
    return (
        <div className='space-y-2 divide-y divide-gray-300'>
            <h3 className='text-base font-dm font-semibold text-gray-500'>Colors</h3>
            <div className='space-y-3 pt-4'>
            {colorlist.slice(0, showless).map((item, index) =>
                            <label key={index} htmlFor={`color-${item.id}`} className='relative flex gap-2 items-center'>
                                <input id={`color-${item.id}`} type="checkbox" className='sr-only peer' />
                                <span className={`size-5 rounded-full  flex peer-checked:hidden ${item.colorName === 'White' ? 'border border-gray-300' : ''}`} style={{ backgroundColor: `${item.color}` }} /> 
                                <span className={`size-5 rounded-full justify-center items-center hidden peer-checked:flex ${item.colorName === 'White' ? 'text-gray-600 border border-gray-300' : 'text-white'}`} style={{ backgroundColor: `${item.color}` }}>
                                    <Checkicon className="size-4" />
                                </span>
                                <span className='flex-1 text-left text-sm text-gray-600 font-dm font-medium'>{item.colorName}</span>
                            </label>
                        )}
                {colorlist.length > 5 &&
                <button onClick={toggleNumber} className='py-1 w-full text-left font-semibold font-dm text-sm text-gray-700 hover:text-primary ease-in-out duration-300'>See {showless > 5 ? 'Less' : 'All'}</button>
                }
                </div>
        </div>
    )
}

export default Colors
