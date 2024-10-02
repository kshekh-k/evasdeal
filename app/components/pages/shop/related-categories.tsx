'use client'
import React from 'react'
const categories = [
    'Mobile Accessories',
    'Jackets & Coats',
    'Clothing',
    'Tshirts',
    'Woman Fashion',
    'Clothing & Accessories',
    'Fashion',
    'Electronic Accessories',
    'Kid Fashion',
]
function Relatedcategories() {
    const [showless, setShowless] = React.useState(false)
    return (
        <div className='space-y-2 divide-y divide-gray-300'>
            <h3 className='text-base font-dm font-semibold text-gray-500'>Related Categories</h3>
            <ul className='space-y-1 pt-2'>
                {showless ? (
                    <>
                        {categories.map((item, index) =>
                            <li key={index}>
                                <button className='py-1 w-full text-left font-medium font-dm text-sm text-gray-500 hover:text-primary ease-in-out duration-300'>{item}</button>
                            </li>
                        )}
                    </>
                ) : (
                    <>
                        {categories.slice(0, 5).map((item, index) =>
                            <li key={index}>
                                <button className='py-1 w-full text-left font-medium font-dm text-sm text-gray-500 hover:text-primary ease-in-out duration-300'>{item}</button>
                            </li>
                        )}
                    </>

                )}
                <li><button onClick={() => setShowless(!showless)} className='py-1 w-full text-left font-semibold font-dm text-sm text-gray-700 hover:text-primary ease-in-out duration-300'>See {showless ? 'Less' : 'All'}</button></li>
            </ul>
        </div>
    )
}

export default Relatedcategories
