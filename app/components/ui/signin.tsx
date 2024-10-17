'use client'
import React from 'react'
import { Eyeicon, Eyeofficon, Facebookicon, Googleicon, Lockfillicon, Userfillicon } from '@/app/icons'
import Link from 'next/link'
import Input from './input'
import { useForm, SubmitHandler } from "react-hook-form";
import { server } from '@/utils/server';
import { postData } from '@/utils/services';
type LoginMail = {
    email: string;
    password: string;
}
const Signin: React.FC = () => {
    const [hide, setHide] = React.useState(false)
    const [rememberMe, setRememberMe] = React.useState(false);
    const { register, handleSubmit, setValue } = useForm<LoginMail>();


    React.useEffect(() => {
        const savedEmail = localStorage.getItem("email");
        const savedPassword = localStorage.getItem("password");

        if (savedEmail && savedPassword) {
            setValue("email", savedEmail);
            setValue("password", savedPassword);
            setRememberMe(true);
        }
    }, [setValue]);



    const onSubmit = async (data: LoginMail) => {
        const res = await postData(`${server}/api/login`, {
            email: data.email,
            password: data.password
        });

        if (rememberMe) {
            // Save email and password in localStorage
            localStorage.setItem("email", data.email);
            localStorage.setItem("password", data.password);
        } else {
            // Clear localStorage if remember me is unchecked
            localStorage.removeItem("email");
            localStorage.removeItem("password");
        }

        console.log(res);
    };

    const handleGoogleSignIn = async () => {};

    return (
        <div className='relative'>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="space-y-4 py-5">
                    <Input type='email' placeholder='Email Address' className='pl-14' Icon={Userfillicon} required={true} iconClass='left-0'
                        {...register("email")} />


                    <div className="relative">
                        <Input type={`${hide ? 'text' : 'password'}`} placeholder='Password' className='px-14' Icon={Lockfillicon} required={true} iconClass='left-0'  {...register("password")} />
                        <button type="button" onClick={() => setHide(!hide)} className='absolute right-0 inset-y-0 w-12 text-gray-400 flex justify-center items-center'>
                            {hide ? <Eyeofficon className="size-4" /> : <Eyeicon className="size-4" />}
                        </button>
                    </div>


                    <div className="flex justify-between w-full items-center relative">
                        <div className="flex gap-2 items-center relative">

                            <input id='rememberMe'
                                className="md:-mt-0.5 outline-none ring-0 focus:ring-0 size-4 border text-primary border-gray-300 cursor-pointer"
                                type="checkbox" checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)} />
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
                            <span>SIGN IN</span>
                        </button>
                    </div>

                    <div className="text-lg hidden items-center">
                        <hr className="border border-gray-2 w-full" />
                        <p className="font-dm font-medium text-gray-400 text-center text-sm px-3 whitespace-nowrap">
                            Sign in with demo account
                        </p>
                        <hr className="border border-gray-2 w-full" />
                    </div>
                    <div className="hidden gap-2.5 justify-center md:justify-between md:my-5 my-4">
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
                        <button type='button' onClick={() => handleGoogleSignIn()}
                            className="flex flex-1 font-dm font-medium gap-1 justify-center items-center rounded p-2 md:text-lg text-white md:py-3 relative ease-in-out duration-200 bg-red hover:bg-red-1"
                        >
                            <Googleicon className="size-4" />
                            <span>
                                Google
                            </span>
                        </button>
                        <Link
                            href="#" onClick={() => handleGoogleSignIn()}
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