'use client'
import Link from 'next/link'
import React from 'react'
import { HiMiniBars3 } from 'react-icons/hi2'
export const Categories: React.FC  = () => {
 
  return (
    <>
    <button className="relative w-full md:flex items-center border-r border-l cursor-pointer h-16 px-5 hidden bg-gray-50 text-gray-600 gap-4">
                        <HiMiniBars3 className='size-6' />
                        <span className="text-base  ">Categories</span>
                    </button>
                    <div className='bg-white border transform scale-1 z-30 relative h-100 w-full hidden md:block'>
                        <ul className="overflow-hidden divide-y divide-gray-300 height-437p">
                            <li>
                                <Link href="#">
                                    <div className='flex items-center justify-start w-full categories-menu h-12 text-gray-600 font-medium px-5 '>
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

 
