'use client'
import {Crossicon } from '@/app/icons';
import React from 'react'
interface sidepanel {
    onClick?: () => void,
    children: React.ReactNode;
}

const Sidepanel: React.FC<sidepanel> = ({ onClick, children }) => {
    return (
        <div className={`fixed z-50 inset-0 `} >
            <div onClick={onClick} className={`fixed inset-0 bg-black/50 ease-in-out duration-200 `} />
            <section className={`fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-md bg-white ease-in-out duration-200`}  >
                <div className="flex items-center relative z-50">
                    <button onClick={onClick} className="absolute top-0 right-0 p-1 z-10 flex items-center justify-center focus:outline-none text-gray-500 hover:text-red-600 ease-in-out duration-200">
                        <Crossicon className="size-3" />
                    </button>
                </div>
                <div className="relative h-screen flex flex-col gap-4">
                    {children}
                </div>
            </section>
        </div>


    )
}

export default Sidepanel
