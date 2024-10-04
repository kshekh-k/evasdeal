'use client'
import Image from 'next/image'
import React from 'react'
import { Arrowicon, Compassicon, Crossicon, Emptyicon, Homeicon, Loginicon, Shoppingbagicon, Trashicon, Usericon } from '@/app/icons'
import Link from 'next/link'
import Responsivecategories from '../ui/responsive-categories'

interface cart {
    onClick?: () => void,

}

export const Mobilesidebar: React.FC<cart> = ({ onClick }) => {
    return (
        <>
            <div className={`fixed z-50 inset-0 `} >
                <div onClick={onClick} className={`fixed inset-0 bg-black/50 ease-in-out duration-200 `} />
                <section className={`fixed inset-y-0 left-0 w-full max-w-xs bg-gray-800 ease-in-out duration-200`}  >
                    <div className="relative h-screen flex flex-col gap-4">

                        {/* Header */}
                        <div className="w-full px-4 flex justify-between items-center relative  ">
                            <div className="flex items-center gap-1">


                                <Link href="/" className='pt-6 pb-4 flex'>
                                    <Image width={180} height={80} className="h-8 w-auto" src="/images/logo.png" alt="logo" />
                                </Link>

                            </div>
                            <div className="flex items-center relative z-50">
                                <button onClick={onClick} className="flex items-center justify-center gap-1 ml-2 py-6 lg:py-7 focus:outline-none text-white hover:text-red-600 ease-in-out duration-200">
                                    <Crossicon className="size-3" />
                                </button>
                            </div>
                        </div>



                        <div className="w-full flex flex-col flex-1 " >

                        <div className='mx-4 pb-5 items-center text-white flex gap-4'>
                        {/* unauthenticated */}
                        <div className="flex shrink-0 gap-1 justify-center items-center cursor-pointer size-14 rounded-full bg-white/10">
                            <Usericon className="size-6" />
                        </div>
                        <div className='space-y-0.5'>
                        <h3 className='text-lg font-dm font-medium truncate max-w-52'>No Account</h3>
                        <p className='text-sm font-dm font-medium'>Register or Login</p>
                        </div>
                    </div>


                            <div className='flex flex-col gap-1 mx-4 border-b border-gray-500 pb-3 font-dm font-medium'>
                                <Link href='/' className='flex items-center gap-2 py-1 text-sm text-white'>
                                <Homeicon className="size-4"/> Home
                                </Link>
                                <Link href='/track-order' className='flex items-center gap-2 py-1 text-sm text-white'>
                                <Compassicon className="size-4"/> Track Order
                                </Link>
                            </div>
                            <div className="flex-1 overflow-auto max-h-[calc(100vh-305px)] px-4">
                                <div className='flex flex-col gap-4'>
                                  <Responsivecategories />
                                </div>
                            </div>
                            <div className='mx-4 border-t border-gray-500'>
                                <button className='text-white flex gap-2 items-center w-full py-4'>
                                    <Loginicon className="size-4" /> <span>Login</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}


