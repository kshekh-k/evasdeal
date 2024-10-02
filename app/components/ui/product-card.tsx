'use client'
import { Compareicon, Hearticon, Shoppingbagicon, Staricon } from '@/app/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface ProductCard {
    thumb?: string,
    productName?: string,
    currentPrice?: string,
    regularPrice?: string,

}
export const Productcard: React.FC<ProductCard> = ({
    thumb, productName, currentPrice, regularPrice
}) => {
    return (
        <div className='flex flex-col group'>
            <div className="border rounded-md relative ">
                <div className="h-48 flex justify-center items-center">
                    <Link href="#" className="w-full h-full">
                        <Image className="w-full h-full object-cover rounded-md neg-transition-scale" src={`${thumb}`} alt="Image" width={200} height={200} />
                    </Link>
                </div>
                <div className="flex flex-col gap-1 w-16 absolute top-2.5 left-2.5 right-2.5">
                    <p className="bg-primary text-center relative z-10 justify-center text-white p-1 font-dm leading-none flex items-center rounded-sm font-medium text-[10px] whitespace-nowrap">
                        Featured
                    </p>
                    <p className="bg-primary-2 flex leading-none text-center relative text-white p-1 font-dm items-center justify-center rounded-sm font-medium z-10 text-[10px] whitespace-nowrap uppercase">
                        33.33% off
                    </p>
                </div>
                <div className='invisible group-hover:visible absolute inset-0 p-1 z-20 ease-in-out duration-300'>

                    <div className="w-full h-full flex justify-end cursor-pointer pt-15p ">
                        <div className="relative flex flex-col gap-2">
                            <button className="h-6 w-6 flex justify-center items-center p-1 text-gray-12 border border-gray-2 rounded-full hover:bg-primary bg-white"  >

                                <Shoppingbagicon className="size-3" />

                            </button>

                            <button className="h-6 w-6 flex justify-center items-center p-1  text-gray-12 relative hover:bg-primary border border-gray-2 rounded-full bg-white">
                                <Hearticon className="size-3" />
                            </button>

                            <button className="h-6 w-6 flex justify-center items-center p-1 text-gray-12 bg-white hover:bg-primary border border-gray-2 rounded-full">
                                <Compareicon className="size-3" />
                            </button>
                        </div>
                        <div className="flex gap-2 absolute bottom-0 inset-x-0 p-1">
                            <button className="text-white font-medium py-1 px-3 rounded flex-1 text-center text-xs bg-primary hover:bg-primary-2 ease-in-out duration-200 z-20">
                            Quick View

                            </button>
                            <button className="text-white font-medium py-1 px-3 rounded flex-1 text-center text-xs bg-primary hover:bg-primary-2 ease-in-out duration-200 z-20">
                               Buy Now

                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="sm:text-center flex flex-col">
                <Link href="#">
                    <p className="text-13 md:text-sm text-gray-12 md:mt-2 dm-regular line-clamp">{productName}</p>
                </Link>
                <div className="item-rating order-first md:order-none md:mt-0 mt-2">
                    <div className="flex gap-2 items-center justify-center">
                        <ul className="flex flex-wrap sm:justify-center items-center gap-1">
                            <li>
                                <Staricon className="size-2" />
                            </li>

                            <li>
                                <Staricon className="size-2" />
                            </li>

                            <li>
                                <Staricon className="size-2" />
                            </li>

                            <li>
                                <Staricon className="size-2" />
                            </li>

                            <li>
                                <Staricon className="size-2" />
                            </li>
                        </ul>
                        <p className="text-gray-400 text-xs font-dm">
                            (3 Reviews)
                        </p>

                    </div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <p className="text-gray-700 font-dm font-semibold">
                        {currentPrice}
                    </p>
                    <p className="text-sm font-medium line-through text-gray-400 pl-1 ">
                        {regularPrice}
                    </p>
                </div>
            </div>
        </div>
    )
}


