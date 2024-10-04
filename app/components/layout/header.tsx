'use client'
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Compassicon, Hearticon, Shoppingbagicon, Usericon } from "@/app/icons"
import { Topbar } from "./top-bar"
import { Search } from "../ui/search"
import { Shoppingcart } from '../ui/shopping-cart'
import { Shigninsignup } from '../ui/singin-signup'
import useViewportWidth from '../../hooks/use-viewport-width';
export const Header: React.FC = () => {
    const viewportWidth = useViewportWidth();
    const [cartPanel, setCartPanel] = React.useState(false)
    const [signinup, setSigninup] = React.useState(false)
    const [itemsincart, setItemsincart] = React.useState(0)
    React.useEffect(() => {
        if (cartPanel) {
            document.body.classList.add('overflow-hidden');
        }
        else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [cartPanel]);

    React.useEffect(() => {
        if (signinup) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [signinup]);
    return (
        <>
            <header>
                {/* Top bar */}
                <Topbar>
                    <li>
                        {/* unauthenticated */}
                        <button onClick={() => setSigninup(!signinup)} className="flex flex-col text-white gap-1 justify-center items-center cursor-pointer   ease-in-out duration-200">
                            <Usericon className="size-6" />

                        </button>
                    </li>
                    <li className='relative'>
                        {itemsincart > 0 &&
                            <span className='absolute right-0 font-medium font-dm text-[10px] flex items-center justify-center rounded-xl px-1 h-4 min-w-4 bg-white text-gray-900'>
                                1
                            </span>
                        }
                        <button onClick={() => setCartPanel(!cartPanel)} className="flex flex-col text-white justify-center gap-1 items-center  ease-in-out duration-200 ">
                            <Shoppingbagicon className="size-6" />
                        </button>
                    </li>
                </Topbar>
                <div className="sticky top-0 z-40 md:bg-white bg-gray-12 max-h-24">
                    <div className="container p-4 xl:px-5 flex justify-between">
                        {viewportWidth >= 768 &&
                            <div className="h-9 3xl:w-63 pt-1p">
                                <Link href="/">
                                    <Image width={180} height={80} className="h-11 w-auto" src="/images/logo.png" alt="logo" />
                                </Link>
                            </div>
                        }
                        <div className="md:w-46% w-full md:ml-10 lg:ml-20 xl:ml-32">
                            <Search />
                        </div>
                        {viewportWidth >= 768 &&
                            <div className="flex items-end rev justify-end ml-4 lg:ml-10">
                                <ul className="flex -mt-1.5 space-x-3 lg:space-x-5">
                                    <li className="hidden md:block">
                                        {/* unauthenticated */}
                                        <button onClick={() => setSigninup(!signinup)} className="flex flex-col text-gray-600 gap-1 justify-center items-center cursor-pointer  hover:text-primary ease-in-out duration-200">
                                            <Usericon className="size-5" />
                                            <span className="text-xs font-medium text-center " >
                                                Account
                                            </span>
                                        </button>
                                    </li>


                                    <li className="hidden md:block">
                                        <div className="flex flex-col justify-center items-center">
                                            <button onClick={() => setSigninup(!signinup)}
                                                className="text-gray-600 flex flex-col gap-1 w-fill justify-center items-center hover:text-primary ease-in-out duration-200"
                                            >
                                                <Hearticon className="size-5" />

                                                <span className="text-xs font-medium text-center " >
                                                    Wishlist
                                                </span>

                                            </button>
                                        </div>
                                    </li>

                                    <li className="absolute md:relative">
                                        {itemsincart > 0 &&
                                            <span className='absolute right-0 font-medium font-dm text-[10px] flex items-center justify-center rounded-xl px-1 h-4 min-w-4 bg-primary text-white'>
                                                1
                                            </span>
                                        }
                                        <button onClick={() => setCartPanel(!cartPanel)} className="flex flex-col text-gray-600 justify-center gap-1 items-center hover:text-primary ease-in-out duration-200 ">
                                            <Shoppingbagicon className="size-5" />
                                            <span className="text-xs font-medium text-center whitespace-nowrap" >
                                                Your Cart
                                            </span>
                                        </button>
                                    </li>
                                    <li className="">
                                        <Link href={'/track-order'} className="relative flex flex-col text-gray-600 justify-center items-center gap-1 hover:text-primary ease-in-out duration-200">
                                            <Compassicon className="size-5" />
                                            <span className="text-xs font-medium text-center whitespace-nowrap" >
                                                Track Order
                                            </span>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </header>

            {/* Signin/Signup */}
            {signinup &&
                <Shigninsignup onClick={() => setSigninup(!signinup)} />
            }

            {/* Cart Side Panel */}
            {cartPanel &&
                <Shoppingcart onClick={() => setCartPanel(!cartPanel)} />
            }

        </>
    )
}

