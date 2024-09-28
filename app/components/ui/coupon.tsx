'use client'
import React from 'react'
export const Coupon: React.FC = () => {
 
    return (
        <div className='bg-gray-900 p-4 flex justify-between items-center'>
            <div className="w-2/3 ml-5p">
                <p className="text-2xl text-primary font-bold font-dm">New Here?</p>
                <p className="text-white text-sm mt-1 leading-normal roboto-medium ltr:pr-8 rtl:pl-8">
                    Use coupon{" "}
                    <span className="text-primary font-medium">‘BUYNOW01’</span> and get
                    up to $200 on your first purchase.
                </p>
            </div>
            <div className="w-1/3 px-1 h-full border text-primary flex justify-center items-center text-base font-medium border-dashed border-white rounded">
                <p className="text-center dm-bold capitalize">Get Coupon</p>
            </div>
        </div>
    )
}

 
