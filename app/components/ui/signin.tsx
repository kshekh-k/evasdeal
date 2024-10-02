'use client'
import React from 'react'
import { Eyeicon, Eyeofficon, Facebookicon, Googleicon, Lockfillicon, Userfillicon } from '@/app/icons'
import Link from 'next/link'
import Input from './input'
const Signin: React.FC = () => {
    const [hide, setHide] = React.useState(false)
    return (
        <div className='relative'>
            <form >

                <div className="space-y-4 py-5">
                    <Input type='email' name='email' placeholder='Email Address' className='pl-14' Icon={Userfillicon} required={true} iconClass='left-0' />
                    <div className="relative">
                        <Input type={`${hide ? 'text' : 'password'}`} name='password' placeholder='Password' className='px-14' Icon={Lockfillicon} required={true} iconClass='left-0' />
                        <button onClick={() => setHide(!hide)} className='absolute right-0 inset-y-0 w-12 text-gray-400 flex justify-center items-center'>
                            {hide ? <Eyeofficon className="size-4" /> : <Eyeicon className="size-4" />}
                        </button>
                    </div>


                    <div className="flex justify-between w-full items-center relative">
                        <div className="flex gap-2 items-center relative">

                            <input id='rememberMe'
                                className="md:-mt-0.5 size-4 border text-primary border-gray-300 cursor-pointer"
                                type="checkbox" />
                            <label
                                className="text-sm font-medium font-dm text-gray-600 cursor-pointer"
                                htmlFor="rememberMe"
                            >
                                Remember Me
                            </label>
                        </div>

                        <Link href={'#'} className="font-medium font-dm text-gray-600 hover:text-primary text-sm ease-in-out duration-200">
                            Forgot password?
                        </Link>


                    </div>

                    <div className="relative">
                        <button className="flex justify-center items-center w-full h-14 px-4 py-2 font-medium cursor-pointer font-dm text-lg bg-gray-700 text-white rounded hover:bg-primary ease-in-out duration-200">
                            <span className="signin-text"> SIGN IN</span>
                        </button>
                    </div>
                    <div className="text-lg flex items-center">
                        <hr className="border border-gray-2 w-full" />
                        <p className="font-dm font-medium text-gray-400 text-center text-sm px-3 whitespace-nowrap">
                            Sign in with demo account
                        </p>
                        <hr className="border border-gray-2 w-full" />
                    </div>
                    <div className="flex gap-2.5 justify-center md:justify-between md:my-5 my-4">
                        <Link href="#"
                            className="flex justify-center items-center w-full h-12 px-4 py-2 font-medium cursor-pointer font-dm bg-gray-700 text-white rounded hover:bg-gray-900 ease-in-out duration-200"  >
                            Admin
                        </Link>
                        <Link href="#"
                            className="flex justify-center items-center w-full h-12 px-4 py-2 font-medium cursor-pointer font-dm bg-gray-700 text-white rounded hover:bg-gray-900 ease-in-out duration-200"  >
                            Customer
                        </Link>
                        <Link href="#"
                            className="flex justify-center items-center w-full h-12 px-4 py-2 font-medium cursor-pointer font-dm bg-gray-700 text-white rounded hover:bg-gray-900 ease-in-out duration-200"  >
                            Vendor
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <hr className="border border-gray-2 w-full" />
                        <p className="font-dm font-medium text-gray-400 text-center text-sm px-3 whitespace-nowrap">
                            Sign in with other account
                        </p>
                        <hr className="border border-gray-2 w-full" />
                    </div>
                    <div className="flex  gap-x-2.5 md:gap-x-5 justify-center md:justify-between md:mt-5 mt-4">
                        <Link
                            href="#"
                            className="flex flex-1 font-dm font-medium gap-1 justify-center items-center rounded p-2 md:text-lg text-white md:py-3 relative ease-in-out duration-200 bg-red hover:bg-red-1"
                        >
                            <Googleicon className="size-4" />
                            <span>
                                Google
                            </span>
                        </Link>
                        <Link
                            href="#"
                            className="flex flex-1 font-dm font-medium gap-1 justify-center items-center rounded p-2 md:text-lg text-white md:py-3 relative  ease-in-out duration-200 bg-blue hover:bg-blue-1"
                        >
                            <Facebookicon className="size-4" />
                            <span>
                                Facebook
                            </span>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signin