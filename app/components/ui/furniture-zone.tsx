 'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Productcard } from './product-card';
 
export const FurnitureZone: React.FC = () => {
 
    return (
        <section className=" my-10 md:my-12" >
           
                <div className="flex md:justify-between justify-center items-center mb-2.5 md:mb-5">
                    <h2 className="font-bold text-sm md:text-[22px] text-gray-900 uppercase dm-bold">Furniture ZONE</h2>
                    <Link
                        href="#"
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
                    </Link>
                </div>
                <div className="md:flex md:gap-5 gap-0">
                    <div className="md:w-[335px] lg:w-322p w-full pb-2">
                        <div className="relative h-600p w-full">
                           <Image src="/images/furniture.webp" alt="" width={400} height={600} className="w-full h-full object-cover rounded-md" />
                           
                            <div className="absolute top-0 p-6">
                                <p className="text-xs text-gray-600 font-bold mb-1">Take A Look</p>
                                <p className="text-gray-900 font-medium text-lg uppercase mb-1.5">On Our</p>
                                <p className="text-gray-12 font-bold text-2xl -mt-1.5 uppercase">Furnitures</p>
                                <Link
                                    href="https://demo.martvill.techvill.net/search-products?categories=categories=Home%20Appliances"
                                    className="process-goto hover:bg-gray-12 hover:text-white cursor-pointer relative flex justify-center text-gray-12 rounded-sm text-xs mt-13p items-center py-2 w-29 dm-sans border border-gray-800"
                                >
                                    <span>Shop Now</span>
                                    <svg
                                        className="relative ml-1"
                                        width="10"
                                        height="7"
                                        viewBox="0 0 10 7"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.7344 0L5.75327 1.05155L7.34399 2.75644H0.69376C0.310607 2.75644 0 3.08934 0 3.5C0 3.91066 0.310607 4.24356 0.69376 4.24356H7.34399L5.75327 5.94845L6.7344 7L10 3.5L6.7344 0Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5 md:mt-0">
                            {/* <Productcard /> */}
                            <Productcard thumb="/images/product-2.webp" productName="Waist straight Slouchy jeans" currentPrice="$40" regularPrice="$60" />
                            
 

                        </div>
                    </div>
                </div>
           
        </section>
    );
};

 
