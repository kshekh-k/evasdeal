'use client'
import Image from 'next/image' 
import React from 'react'
import { Productcard } from './product-card'  
import Ratings from './ratings'

export const FlashSales: React.FC  = () => {
    return (
        <>
      
        <section className="my-10 md:my-12 space-y-5" >
        
                <h2 className="font-bold text-sm md:text-[22px] text-center text-gray-900 uppercase font-dm">Flash Sale</h2>
           
            <div className="md:flex md:gap-5 gap-0">
                <div className="md:w-322p w-full">
                    <div className="relative bg-gray-100 rounded-md pb-0.5">
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

                            <div className="flex justify-center">
                                <Ratings rating={2.5} />
                            </div>
                            <div className='flex justify-center items-center gap-3'>
                            <p className="text-xl text-gray-700 font-dm font-semibold">
                                $40
                            </p>
                            <p className="text-base font-medium line-through text-gray-400 pl-1">
                                $60
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5 md:mt-0">
                       <Productcard rating={3.5} slider={['/images/product.png', '/images/product.png', '/images/product.png', '/images/product.png', '/images/product.png', ]} categoryName='Home Appliances' thumb="/images/product-1.webp" productName="Waist straight Slouchy jeans" priceRange={true} minimum={40} maximum={100} discription={'Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.'} />
                    </div>
                </div>

            </div>

        </section>
</>
    )
}

 
