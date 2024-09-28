'use client'
import { Compareicon, Hearticon, Shoppingbagicon, Staricon } from '@/app/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface ProductCard {
    thumb?: string[],
    productName?: string,
    currentPrice?: string,
    regularPrice?: string,

}
export const Productcard: React.FC<ProductCard> = ({
    thumb, productName, currentPrice, regularPrice
}) => {
    return (
        <div className='flex flex-col group'>
            <div className="border rev-img mainflash-1 rounded-md relative ">
                <div className="h-48 flex justify-center items-center">

                    <Link href="#" className="w-full h-full z-10">
                        <Image className="w-full h-full object-cover rounded-md neg-transition-scale" src={`/${thumb}`} alt="Image" width={200} height={200} />
                    </Link>
                </div>
                <div className=" absolute top-2.5 left-2.5 right-2.5">
                    <p className="bg-primary relative z-30 h-18p w-max justify-center text-white px-2 flex items-center rounded-sm mb-2.5 leading-3 roboto-medium font-medium text-xss whitespace-nowrap">
                        Featured
                    </p>
                    <p className="bg-primary-2 h-4 w-max relative text-white mb-2.5 px-2 py-1 flex items-center justify-center rounded-sm leading-3 roboto-medium font-medium z-30 text-8 whitespace-nowrap uppercase">
                        33.33% off
                    </p>
                </div>
                <div className='invisible group-hover:visible absolute inset-0 z-20 ease-in-out duration-200'>

                    <div className="w-full h-full flex justify-end cursor-pointer pt-15p ">
                        <div className="relative flex flex-col gap-1">
                            <button className="h-6 w-6 p-1 mb-2 text-gray-12 border border-gray-2 rounded-full hover:bg-primary bg-white"  >

                               <Shoppingbagicon className="size-4" />

                            </button>

                            <button className="h-6 w-6 p-1 mb-2 text-gray-12 relative hover:bg-primary border border-gray-2 rounded-full bg-white">
                                <Hearticon className="size-4"/>
                            </button>

                            <button className="h-6 w-6 p-1 mb-2 text-gray-12 bg-white hover:bg-primary border border-gray-2 rounded-full">
                                <Compareicon className="size-4" />
                            </button>
                        </div>
                        <div className="flex gap-2 absolute bottom-0 inset-x-0 p-1">
                            <button className="text-gray-12 font-medium py-1 px-3 rounded flex-1 text-center text-11 bg-primary hover:bg-primary-2 ease-in-out duration-200 z-20">
                                Quick View

                            </button>
                            <button className="text-gray-12 font-medium py-1 px-3 rounded flex-1 text-center text-11 bg-primary hover:bg-primary-2 ease-in-out duration-200 z-20">
                                Add to cart

                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="sm:text-center flex flex-col">
                <a href="https://demo.martvill.techvill.net/products/waist-straight-slouchy-jeans">
                    <p className="text-13 md:text-sm text-gray-12 md:mt-2 dm-regular line-clamp">{productName}</p>
                </a>
                <div className="item-rating order-first md:order-none md:mt-0 mt-2">
                    <div className="self-top">
                        <ul className="flex flex-wrap sm:justify-center ltr:-space-x-1">
                            <li className="mt-1">
                                <Staricon className="size-4" />
                            </li>

                            <li className="mt-1">
                            <Staricon className="size-4" />
                            </li>

                            <li className="mt-1">
                            <Staricon className="size-4" />
                            </li>

                            <li className="mt-5p pr-2">
                            <Staricon className="size-4" />
                            </li>

                            <li className="mt-5p">
                            <Staricon className="size-4" />
                            </li>

                            <li className="mt-0.5 text-gray-10 text-xss dm-sans rtl:pr-2">
                                (3 Reviews)
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <p className="text-13 md:text-sm text-gray-12 dm-sans">
                        {currentPrice}
                    </p>
                    <p className=" md:mt-0 text-11 font-medium line-through text-gray-10 pl-1 mt-0.5">
                        {regularPrice}
                    </p>
                </div>
            </div>
        </div>
    )
}


