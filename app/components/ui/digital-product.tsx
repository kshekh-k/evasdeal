// components/FurnitureZone.js
'use client' 
import { Shoppingbagicon } from '@/app/icons';
import React from 'react';
import { Productcard } from './product-card';
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
                        <Productcard thumb="/images/product-1.webp" productName="Waist straight Slouchy jeans" currentPrice="$40" regularPrice="$60" />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

 
