'use client'
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Compassicon, Hearticon, Shoppingbagicon, Usericon } from "@/app/icons"
import { Topbar } from "../ui/top-bar"
import { Search } from "../ui/search"
import { Shoppingcart } from '../ui/shopping-cart'
import { Shigninsignup } from '../ui/singin-signup'
import { useRouter, usePathname } from 'next/navigation'
export const Header: React.FC = () => {
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
                <Topbar />
                <div className="sticky top-0 z-40 md:bg-white bg-gray-12 max-h-24">
                    <div className="container p-4 xl:px-5 flex justify-between">
                        <div className="hidden md:block ">
                            <div className="h-9 3xl:w-63 pt-1p">
                                <Link href="/">
                                    <Image width={180} height={80} className="h-11 neg-transition-scale mt-2" src="/images/logo.png" alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <Search />

                        <div className="flex items-end rev justify-end ml-10">
                            <ul className="flex -mt-1.5">
                                <li className="hidden md:block ml-5">
                                    {/* unauthenticated */}
                                    <button onClick={() => setSigninup(!signinup)} className="flex flex-col gap-1 justify-center items-center cursor-pointer mt-2 hover:text-primary ease-in-out duration-200">
                                        <Usericon className="size-5" />
                                        <span className="text-xs font-medium text-center " >
                                            Account
                                        </span>
                                    </button>
                                </li>


                                <li className="hidden md:block ml-5">
                                    <div className="flex flex-col justify-center items-center">
                                        <button onClick={() => setSigninup(!signinup)}
                                            className="md:px-2 lg:px-0 py-2 text-gray-600 flex flex-col gap-1 w-fill justify-center items-center hover:text-primary ease-in-out duration-200"
                                        >
                                            <Hearticon className="size-5" />

                                            <span className="text-xs font-medium text-center " >
                                                Wishlist
                                            </span>

                                        </button>
                                    </div>
                                </li>

                                <li className="absolute md:relative ml-5">
                                    {itemsincart > 0 && 
                                    <span className='absolute right-0 font-medium font-dm text-[10px] flex items-center justify-center rounded-full h-4 min-w-4 bg-primary text-white'>
                                        1
                                    </span>
                                    }
                                    <button onClick={() => setCartPanel(!cartPanel)} className="flex flex-col text-gray-600 justify-center gap-1 items-center md:px-2 lg:px-0 py-2 hover:text-primary ease-in-out duration-200 ">
                                        <Shoppingbagicon className="size-5" />
                                        <span className="text-xs font-medium text-center whitespace-nowrap" >
                                            Your Cart
                                        </span>
                                    </button>
                                </li>
                                <li className=" ml-5">
                                    <Link href={'/track-order'} className="relative flex flex-col text-gray-600 justify-center items-center md:px-2 lg:px-0 py-2 gap-1 hover:text-primary ease-in-out duration-200">
                                        <Compassicon className="size-5" />
                                        <span className="text-xs font-medium text-center whitespace-nowrap" >
                                            Track Order
                                        </span>
                                    </Link>
                                </li>

                            </ul>
                        </div>
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

