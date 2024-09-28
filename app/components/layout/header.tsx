'use client'
import Link from "next/link"

import Image from "next/image"
import { Compassicon, Hearticon, Shoppingbagicon, Usericon } from "@/app/icons"
import { Topbar } from "../ui/top-bar"
import { Search } from "../ui/search"
export const Header: React.FC = () => {

    return (
        <header>
            {/* Top bar */}
            <Topbar />
            <div className="sticky top-0 z-40 md:bg-white bg-gray-12 max-h-24">
                <div className="container p-4 xl:px-5 flex justify-between">
                    <div className="hidden md:block ">
                        <div className="h-9 3xl:w-63 pt-1p">
                            <Link href="#">
                                <Image width={180} height={80} className="h-11 neg-transition-scale mt-2" src="/images/logo.png" alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <Search />

                    <div className="flex items-end rev justify-end ml-10">
                        <ul className="flex -mt-1.5">
                            <li className="hidden md:block ml-5">
                                {/* unauthenticated */}
                                <div className="flex flex-col gap-1 justify-center items-center cursor-pointer mt-2">
                                    <Usericon className="size-5" />
                                    <p className="text-xs font-medium text-center " >
                                        Account
                                    </p>
                                </div>
                            </li>


                            <li className="hidden md:block ml-5">
                                <div className="flex flex-col justify-center items-center">
                                    <button
                                        className="md:px-2 lg:px-0 py-2 flex flex-col gap-1 w-fill justify-center items-center"
                                    >
                                        <Hearticon className="size-5" />

                                        <p className="text-xs font-medium text-center " >
                                            Wishlist
                                        </p>

                                    </button>
                                </div>
                            </li>

                            <li className="absolute md:relative ml-5">
                                <div className="flex flex-col justify-center gap-1 items-center md:px-2 lg:px-0 py-2 ">
                                    <Shoppingbagicon className="size-5" />
                                    <p className="text-xs font-medium text-center whitespace-nowrap" > 
                                   
                                        Your Cart
                                    </p>
                                </div>
                            </li>
                            <li className=" ml-5">
                                <div slot="icon" className="relative flex flex-col justify-center items-center md:px-2 lg:px-0 py-2 gap-1">
                                    <Compassicon className="size-5"  />

                                    <p className="text-xs font-medium text-center whitespace-nowrap" > 
                                        Track Order
                                    </p>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

