'use client'
import Image from 'next/image'
import React from 'react'
const usp = [
    {
    img:'/images/usp-1.webp',
    us:'Free Shipping Worldwide',
    condition:'For all orders over $350'
},
    {
    img:'/images/usp-2.webp',
    us:'Secured Online Payment',
    condition:'Payment protection guaranteed'
},
    {
    img:'/images/usp-3.webp',
    us:'Money Back Guarantee',
    condition:'If goods have problems'
},
]
export const Usp: React.FC = () => {
 
    return (
        <>
            <div className="border border-dashed border-gray-400 p-3 grid grid-cols-3 divide-x divide-gray-200">
                {usp.map((item, index)=>
                <div key={index} className="my-6 px-6  ">
                    <div className="flex items-center">
                        <div className='size-24 flex justify-center items-center'>
                            <Image width={50} height={50}
                                src={item.img}
                                className="w-24 h-auto"
                                alt={item.us}
                            />
                        </div>
                        <p className="text-sm pl-3 text-gray-700 font-dm font-bold">
                        {item.us}
                        </p>
                    </div>
                    <p className="text-xs mt-3.5 text-gray-400 font-medium">
                    {item.condition}
                    </p>
                </div>
            )}
            </div>
        </>
    )
}

 
