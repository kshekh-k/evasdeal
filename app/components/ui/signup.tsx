'use client'
import React from 'react'
import { Emailicon, Eyeicon, Eyeofficon, Facebookicon, Googleicon, Lockfillicon, Phoneicon, Userfillicon } from '@/app/icons'
import Link from 'next/link'
import Input from './input'
const Signup: React.FC = () => {
    const [hide, setHide] = React.useState(false)
    const [chide, setChide] = React.useState(false)
    return (
        <div className='relative'>
            <form >

                <div className="space-y-4 py-5">
                    <Input type='text' name='name' placeholder='Your Name' className='pl-14' Icon={Userfillicon} required={true} iconClass='left-0' />
                    <Input type='email' name='email' placeholder='Email Address' className='pl-14' Icon={Emailicon} required={true} iconClass='left-0' />
                    <Input type='tel' name='phone' placeholder='Phone Number' className='pl-14' Icon={Phoneicon} required={true} iconClass='left-0' />
                    <div className="relative">
                        <Input type={`${hide ? 'text' : 'password'}`} name='password' placeholder='Password' className='px-14' Icon={Lockfillicon} required={true} iconClass='left-0' />
                        <button onClick={() => setHide(!hide)} className='absolute right-0 inset-y-0 w-12 text-gray-400 flex justify-center items-center'>
                            {hide ? <Eyeofficon className="size-4" /> : <Eyeicon className="size-4" />}
                        </button>
                    </div>
                    <div className="relative">
                        <Input type={`${chide ? 'text' : 'password'}`} name='confirmPassword' placeholder='Confirm Password' className='px-14' Icon={Lockfillicon} required={true} iconClass='left-0' />
                        <button onClick={() => setChide(!chide)} className='absolute right-0 inset-y-0 w-12 text-gray-400 flex justify-center items-center'>
                            {chide ? <Eyeofficon className="size-4" /> : <Eyeicon className="size-4" />}
                        </button>
                    </div>


                    <div className="relative">
                         

                            
                            <p className="text-sm font-medium text-center font-dm text-gray-600 cursor-pointer">
                            By creating an account you agree to our  <Link href={'#'} className="font-medium font-dm text-primary hover:text-primary-2 text-sm ease-in-out duration-200">
                            terms & conditions.
                        </Link>
                            </p>
                         

                       


                    </div>

                    <div className="relative">
                        <button className="flex justify-center items-center w-full h-14 px-4 py-2 font-medium cursor-pointer font-dm text-lg bg-gray-700 text-white rounded hover:bg-primary ease-in-out duration-200">
                            <span className="signin-text">Create Account</span>
                        </button>
                    </div>
                     
                    <div className="flex items-center">
                        <hr className="border border-gray-2 w-full" />
                        <p className="font-dm font-medium text-gray-400 text-center text-sm px-3 whitespace-nowrap">
                            or create account with
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

export default Signup