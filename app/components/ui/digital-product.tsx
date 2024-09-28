// components/FurnitureZone.js
'use client'
import { Compareicon, Hearticon, Shoppingbagicon, Staricon } from '@/app/icons';
import React from 'react';
import { Productcard } from './product-card';
import Link from 'next/link';
export const DigitalProduct: React.FC = () => {

    return (
        <section className="layout-wrapper px-4 xl:px-0 my-10 md:my-12" style={{ marginTop: '100px', marginBottom: '0px' }}>
            <div className='max-w-screen-xl mx-auto'>
                <div className="flex md:justify-between justify-center items-center mb-2.5 md:mb-5">
                    <p className="font-bold text-sm md:text-[22px] text-gray-900 uppercase dm-bold"> DIGITAL PRODUCTS </p>
                    <a
                        href="https://demo.martvill.techvill.net/search-products?categories=categories=Home%20Appliances"
                        className="process-goto relative justify-center text-gray-600 font-medium text-base dm-sans items-center md:inline-flex hover:text-gray-12 transition duration-200"
                    >
                        <span className="mr-2">See More</span>
                        <svg
                            className="relative ltr:ml-2 neg-transition-scale"
                            width="15"
                            height="10"
                            viewBox="0 0 15 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.70696 0L8.29274 1.41421L10.5856 3.70711H0.999849C0.447564 3.70711 -0.000150681 4.15482 -0.000150681 4.70711C-0.000150681 5.25939 0.447564 5.70711 0.999849 5.70711H10.5856L8.29274 8L9.70696 9.41421L14.4141 4.70711L9.70696 0Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </a>
                </div>
                <div className="md:flex md:gap-5 gap-0">

                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 md:mt-0">

                        <div className='flex flex-col group'>
                                <div className="border rev-img mainflash-1 rounded-md relative product-hover">
                                    <div className="h-96flex justify-center items-center">

                                        <a href="#" className="w-full h-full z-10">
                                            <img className="w-full h-full object-cover rounded-md neg-transition-scale" src="https://demo.martvill.techvill.net/public/uploads/sizes/medium/20221129/12188c61b8ef38c7dedc52e4cb70739b.webp" alt="Image" />
                                        </a>
                                    </div>
                                    <div className="flex flex-col gap-1 w-24 absolute top-2.5 left-2.5 right-2.5">
                                        <p className="bg-primary text-center relative z-30 justify-center text-white px-2 py-1 items-center rounded-sm font-medium text-xs whitespace-nowrap">
                                            Featured
                                        </p>
                                        <p className="bg-primary-2 text-center relative text-white  px-2 py-1  items-center justify-center rounded-sm font-medium z-30 text-xs whitespace-nowrap uppercase">
                                            33.33% off
                                        </p>
                                    </div>
                                    <div className='invisible group-hover:visible absolute inset-0 p-1 z-20 ease-in-out duration-300'>

                                        
                                            <div className="w-full h-full flex justify-end cursor-pointer pt-15p ">
                                                <div className="relative space-y-3">
                                                    <button className="h-6 w-6 flex justify-center items-center p-1 text-gray-12 border border-gray-2 rounded-full hover:bg-primary bg-white"  >

                                                        <Shoppingbagicon className="size-3" />

                                                    </button>
                                                    <button className="h-6 w-6 flex justify-center items-center p-1  text-gray-12 relative hover:bg-primary border border-gray-2 rounded-full bg-white">
                                                        <Compareicon className="size-3" />
                                                    </button>

                                                    
                                                </div>
                                                <div className="flex gap-2 absolute bottom-0 inset-x-0 p-1">
                            <button className="text-white font-medium py-1 px-3 rounded flex-1 text-center text-xs bg-primary hover:bg-primary-2 ease-in-out duration-200 z-20">
                                Quick View

                            </button>
                            <button className="text-white font-medium py-1 px-3 rounded flex-1 text-center text-xs bg-primary hover:bg-primary-2 ease-in-out duration-200 z-20">
                                Add to cart

                            </button>
                        </div>
                                            </div>
                                     
                                    </div>
                                </div>
                                <div className="sm:text-center flex flex-col">
                                    <Link href="#">
                                        <p className="text-gray-600 md:mt-2 ine-clamp">Waist straight Slouchy jeans</p>
                                    </Link>
                                    <div className="item-rating order-first md:order-none md:mt-0 mt-2">
                                        <div className="self-top">
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
                                    </div>
                                    <div className='flex justify-center items-center gap-3'>
                    <p className="text-gray-700 font-dm font-semibold">
                    $40
                    </p>
                    <p className="text-sm font-medium line-through text-gray-400 pl-1 ">
                    $60
                    </p>
                </div>
 
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


