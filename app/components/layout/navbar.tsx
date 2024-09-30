'use client'
import Link from 'next/link'
import React from 'react'
import { Categories } from '../ui/categories'
import { Mobileicon } from '@/app/icons'
const menus = [
    {
        label: 'Home',
        url: '#'
    },
    {
        label: 'Shop',
        url: '#'
    },
    {
        label: 'Coupon',
        url: '#'
    },
    {
        label: 'Blogs',
        url: '#'
    },
    {
        label: 'Pages',
        url: '#'
    },
]
export const Navbar: React.FC = () => {
    return (
        <div className='border-y border-gray-300'>
            <div className='container px-4 xl:px-5 flex justify-between w-full'>
                <div className='group relative font-dm lg:w-23% md:w-25% h-16 hidden md:block'>
                    <Categories />
                </div>
                <div className='md:ml-5 lg:ml-0 ml-0 md:w-3/4 w-full gap-2 flex justify-between items-stretch'>

                    <ul className='flex text-white md:text-black items-stretch'>
                        {menus.map((item, index) =>
                            <li key={index} className='relative flex items-center'>
                                <Link href={item.url} className='border-r border-gray-300 px-4 hover:text-primary ease-in-out duration-200'>
                                    {item.label}
                                </Link>
                            </li>
                        )}
                    </ul>



                    <div className="flex justify-end">
                        <button className='inline-flex gap-1 justify-center items-center w-full bg-white text-13 font-medium text-gray-700 hover:text-primary ease-in-out duration-200 cursor-pointer test-click height-63px'>
                            <Mobileicon className='size-7' />
                            <p className="text-sm 2xl:text-base font-dm font-medium">
                                Download Our App</p>
                        </button>
                    </div>


                </div>

            </div>
        </div>
    )
}


