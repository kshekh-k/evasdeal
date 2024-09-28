'use client'
import Link from 'next/link'
import React from 'react' 
import { IoPhonePortraitOutline } from "react-icons/io5"
import {Categories} from '../ui/categories'
export const Navbar: React.FC = () => {
 
    return (
        <div className='border-y border-gray-300'>
            <div className='container px-4 xl:px-5 flex justify-between w-full'>
                <div className='group relative dm-sans lg:w-23% md:w-25% h-16 hidden md:block'>
                    <Categories />
                </div>
                <div className='md:ml-5 lg:ml-0 ml-0 md:w-3/4 w-full gap-2 flex justify-between items-center'>

                    <div className='flex justify-between'>
                        <div className="w-full md:w-5/6 lg:w-72% ">
                            <ul className='header-menu-nav text-white md:text-black mx-1 custom-border'>
                                <li>
                                    <Link href="#">
                                        Home
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button className='inline-flex gap-1 justify-center items-center w-full bg-white text-13 font-medium text-gray-700 cursor-pointer test-click height-63px'>
                            <IoPhonePortraitOutline className='size-7' />
                            <p className="text-sm 2xl:text-base dm-sans font-medium">
                                Download Our App</p>
                        </button>
                    </div>


                </div>

            </div>
        </div>
    )
}

 
