'use client'
import React from 'react' 
import Productsdetails from './products-deatils'
import { Cardicon } from '@/app/icons'
 
const Productscomponent: React.FC  = ()  => {
     
    return (
        <div className='pt-2 flex flex-col'>
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5">
                <Productsdetails rating={3.5} categoryName='Home Appliances' SKU={123456} productName="Waist straight Slouchy jeans" regularPrice={150} discount={20}  />
                <div className='flex flex-col gap-3'>
                <button className="text-gray-900 font-medium flex gap-2 justify-start items-center py-3 px-5 rounded w-full text-center font-dm border border-gray-300 hover:bg-gray-100 ease-in-out duration-200 z-20">
                        <Cardicon className="size-5" /><span>Secure Online Payment</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Productscomponent
