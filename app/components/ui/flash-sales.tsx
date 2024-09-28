'use client'
import Image from 'next/image' 
import React from 'react'
import { Productcard } from './product-card' 

export const FlashSales: React.FC  = () => {
    return (
        <>
      
        <section className="max-w-screen-xl mx-auto px-4 xl:px-0 my-10 md:my-12 mt-[100px] mb-[0px]" >
            <div className="flex md:justify-center justify- items-center mb-2.5 md:mb-5">
                <p className="font-bold text-sm md:text-[22px] center text-gray-12 uppercase dm-bold">Flash Sale</p>
            </div>
            <div className="md:flex md:gap-5 gap-0">
                <div className="md:w-322p w-full">
                    <div className="relative bg-gray-11 rounded-md pb-0.5">
                        <div className="p-4">
                            <p className="text-xs rounded-sm font-medium text-gray-12 text-center px-1.5 py-1 bg-primary inline">
                                Deal Of The Day
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <Image width={180} height={160} src="/images/deal-of-the-day.webp" alt="Image" />
                        </div>

                        <div className="text-center bg-white mx-4 mb-4 mt-8 py-4 rounded">
                            <p className="text-lg text-gray-12 mt-2 px-5 dm-regular font-normal">
                                Waist straight Slouchy jeans
                            </p>

                            <div className="item-rating">
                                <div className="self-top">
                                    <ul className="flex justify-center mt-2">
                                        <li className="mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M6.23333 0L7.6328 4.30712H12.1616L8.49772 6.96907L9.89719 11.2762L6.23333 8.61425L2.56947 11.2762L3.96894 6.96907L0.305081 4.30712H4.83386L6.23333 0Z" fill="currentColor"></path>
                                            </svg>
                                        </li>

                                        <li className="mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M6.23333 0L7.6328 4.30712H12.1616L8.49772 6.96907L9.89719 11.2762L6.23333 8.61425L2.56947 11.2762L3.96894 6.96907L0.305081 4.30712H4.83386L6.23333 0Z" fill="currentColor"></path>
                                            </svg>
                                        </li>

                                        <li className="mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M6.23333 0L7.6328 4.30712H12.1616L8.49772 6.96907L9.89719 11.2762L6.23333 8.61425L2.56947 11.2762L3.96894 6.96907L0.305081 4.30712H4.83386L6.23333 0Z" fill="currentColor"></path>
                                            </svg>
                                        </li>

                                        <li className="mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M6.23333 0L7.6328 4.30712H12.1616L8.49772 6.96907L9.89719 11.2762L6.23333 8.61425L2.56947 11.2762L3.96894 6.96907L0.305081 4.30712H4.83386L6.23333 0Z" fill="currentColor"></path>
                                            </svg>
                                        </li>

                                        <li className="mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M6.23333 0L7.6328 4.30712H12.1616L8.49772 6.96907L9.89719 11.2762L6.23333 8.61425L2.56947 11.2762L3.96894 6.96907L0.305081 4.30712H4.83386L6.23333 0Z" fill="currentColor"></path>
                                            </svg>
                                        </li>
                                    </ul>

                                    <p className="ltr:ml-1.5 rtl:mr-1.5 text-gray-10 text-sm dm-sans mt-1.5">
                                        ( Review)
                                    </p>
                                </div>
                            </div>

                            <p className="text-xl text-gray-12 dm-bold mt-3 pb-4">
                                $40
                            </p>
                            <p className="text-12 font-medium line-through text-gray-10 pl-1 mt-0.5">
                                $60
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5 md:mt-0">
                       <Productcard  productName="Waist straight Slouchy jeans" currentPrice="$40" regularPrice="$60" />
 

                    </div>
                </div>

            </div>

        </section>
</>
    )
}

 
