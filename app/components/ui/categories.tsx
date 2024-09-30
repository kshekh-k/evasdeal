'use client'
import { Baricon } from '@/app/icons'
import Link from 'next/link'
import React from 'react'
 
export const Categories: React.FC  = () => {
 
  return (
    <>
    <button className="relative w-full md:flex items-center border-r border-l cursor-pointer h-16 px-5 hidden bg-gray-50 text-gray-600 gap-4">
                        <Baricon className='size-6' />
                        <span className="text-base  ">Categories</span>
                    </button>
                    <div className='bg-white border transform scale-1 z-30 relative h-100 w-full hidden md:block'>
                        <ul className="overflow-hidden divide-y divide-gray-300 height-437p">
                            <li className='group'>
                                <Link href="#">
                                    <div className='flex items-center justify-start w-full categories-menu h-12 text-gray-600 group-hover:text-primary ease-in-out duration-200 font-medium px-5 '>
                                        <div className='size-5'></div>
                                        <span className='text-sm cursor-pointer text-one '>Electronic Devices</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
      
    </>
  )
}

 
