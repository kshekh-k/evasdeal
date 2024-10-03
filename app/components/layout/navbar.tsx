'use client'
import Link from 'next/link'
import React from 'react'
import { Categories } from '../ui/categories'
import { Mobileicon } from '@/app/icons' 
import { useRouter, usePathname } from 'next/navigation'
interface categories {
    show?:boolean
}
const menus = [
    {
        label: 'Home',
        url: '/',
        level1:[
            {
                label: 'Level 1 Item',
                url: '#',                 
            },
            {
                label: 'Level 1 Item',
                url: '#',                 
            },
            {
                label: 'Level 1 Item',
                url: '#',                 
            },
            {
                label: 'Level 1 Item',
                url: '#',                 
            },
        ]
    },
    {
        label: 'Shop',
        url: '/shop'
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
export const Navbar: React.FC<categories> = ({show=false}) => {
    const active = usePathname();
    const router = useRouter();
 
      const handleNavLink = (routerName:any) =>{
        router.push(routerName)
    }
    return (
        <div className='border-y border-gray-300 '>
            <div className='container px-4 xl:px-5 flex justify-between w-full'>
                <div className='relative font-dm lg:w-23% md:w-25% h-16 hidden md:block'>
                    <Categories show={show} />
                </div>
                <div className='md:ml-5 lg:ml-0 ml-0 md:w-3/4 w-full gap-2 flex justify-between items-stretch'>
       
                    <ul className='flex text-white md:text-black items-stretch -mx-4'>
                        {menus.map((item, index) =>
                            <li key={index} className={`relative flex items-center group px-4 after:border-r after:border-gray-300 after:absolute after:right-0 after:h-5 ${index === menus.length - 1 && 'after:hidden'}`}>
                                <button onClick={() => handleNavLink(item.url)} className={`outline-none focus:ring-0 underline-offset-8 decoration-3 ease-in-out duration-200  ${active === item.url ? 'text-primary underline':'text-gray-600 group-hover:text-primary group-hover:underline'}`}>
                                    {item.label}
                                </button>
                                {item.level1 && 
                                <ul className='text-sm bg-white font-dm absolute rounded-b-md border border-gray-300 shadow-1 w-52 divide-y divide-gray-300  ease-in-out duration-200 z-20 left-auto top-full hidden group-hover:block '>
                                    {item.level1?.map((itemLevel1, i)=>
                                    <li key={i} className='relative'>
                                        <Link href= {itemLevel1.url} className={`py-3 px-5 block ease-in-out duration-200 hover:bg-primary hover:text-white ${i === item.level1.length -1 && 'rounded-b-md'}`}>
                                            {itemLevel1.label}
                                        </Link>
                                        
                                    </li>
                                    )}
                                </ul>
                                }
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


