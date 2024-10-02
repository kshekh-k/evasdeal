'use client'
import Image from 'next/image'
import React from 'react'
import { Arrowicon, Emptyicon, Shoppingbagicon, Staricon, Trashicon } from '@/app/icons'
import Link from 'next/link'

interface cart {
    onClick?: () => void,

}

export const Shoppingcart: React.FC<cart> = ({ onClick }) => {
    return (
        <>
            <div className={`fixed z-50 inset-0 `} >
                <div onClick={onClick} className={`fixed inset-0 bg-black/50 ease-in-out duration-200 `} />
                <section className={`fixed inset-y-0 right-0 w-full max-w-md bg-white ease-in-out duration-200`}  >
                    <div className="relative h-screen flex flex-col gap-4">

                        {/* Header */}
                        <div className="w-full px-4 flex justify-between items-center relative border-b border-gray-2">
                            <div className="flex items-center gap-1">
                                <span className="text-gray-gray-900">
                                    <Shoppingbagicon className="size-7" />
                                </span>
                                <h3 className="font-dm font-bold leading-none text-xl text-gray-900 uppercase">Shopping Cart</h3>
                            </div>
                            <div className="flex items-center relative z-50">
                                <button onClick={onClick} className="flex items-center justify-center gap-1 ml-2 py-6 lg:py-7 focus:outline-none text-gray-500 hover:text-red-600 ease-in-out duration-200">
                                    <span className="font-dm font-medium text-base">Close</span>
                                    <Arrowicon className="size-3" />
                                </button>
                            </div>
                        </div>



                        <div className="w-full flex flex-col flex-1 " >

                            {/* Empty Card */}
                            <div className='hidden justify-center items-center flex-1 px-4'>
                                <div className="flex flex-col items-center justify-center " >
                                    <div className="flex justify-center items-center rounded-full">
                                        <span className="text-gray-500 block">
                                            <Emptyicon className="size-14" />
                                        </span>
                                    </div>
                                    <h3 className="font-dm font-medium text-gray-600 text-xl pt-2">
                                        Your cart is empty
                                    </h3>
                                    <p className="px-12 text-center font-normal text-sm text-gray-400 pt-2">
                                        No items added in your cart. Please add product to your cart list.
                                    </p>
                                </div>
                            </div>
                            {/* Empty Card End */}


                            <div className="flex-1 overflow-auto max-h-[calc(100vh-330px)] px-4">
                                <div className='flex flex-col gap-4'>
                                    <div className="flex cursor-pointer border-gray-100 " >
                                        <div className="size-24 flex justify-center items-center border border-gray-2 rounded mr-5">
                                            <Image width={50} height={50}
                                                className="h-auto w-auto p-0.5 object-cover"
                                                src="/images/pennant-1.jpg"
                                                alt="img product"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-center text-sm flex-1">

                                            <div className="font-dm font-medium text-gray-600 hover:text-primary text-lg truncate pb-2 ease-in-out duration-200">
                                                <Link href="#"> Album... </Link>
                                            </div>

                                            <div className="font-dm font-medium text-gray-400 text-base">
                                                1 × 15.00
                                            </div>
                                        </div>

                                        <button className="ml-5 cursor-pointer text-gray-400 hover:text-red-600 ease-in-out duration-200" >
                                            <Trashicon className="size-4" />
                                        </button>

                                    </div>
                                </div>
                            </div>



                            <div className="justify-center bg-white flex flex-col p-4 ">
                                <div className="border-t border-gray-2 space-y-4">
                                    <div className="pt-4 flex justify-between font-dm font-medium text-gray-800 text-xl">
                                        <p>Subtotal:</p>
                                        <p id="cart-item-total-price">$0</p>
                                    </div>

                                    <Link href="javascript:void(0)" className="hidden justify-center px-4 py-2 font-bold cursor-pointer font-dm text-lg text-gray-400 bg-gray-200 rounded" >
                                        Go to Checkout
                                    </Link>

                                    <Link href="#" className="flex justify-center px-4 py-2 rounded font-bold cursor-pointer font-dm text-lg border border-gray-300  ease-in-out duration-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white" >
                                        View Cart
                                    </Link>

                                    <Link href="javascript:void(0)" className="flex justify-center px-4 py-2 font-bold cursor-pointer font-dm text-lg bg-gray-700 text-white rounded hover:bg-gray-900 ease-in-out duration-200" >
                                        Go to Checkout
                                    </Link>

                                    <button className="flex w-full justify-center items-center cursor-pointer text-gray-400 hover:text-red-600 ease-in-out duration-200" >
                                        <span className="mr-2 leading-none font-dm font-medium ">
                                            Clear All
                                        </span>
                                        <Trashicon className="size-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}


