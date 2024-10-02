'use client'
import { Arrowicon } from '@/app/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const PromotionalSection: React.FC = () => {
    return (
        <>
            <section className="mb-10 md:mb-12">
                <div className="relative h-full">
                    <div className="flex justify-center items-center" >
                        <Image src={'/images/gadget-town-banner.webp'} alt='gadget-town-banner.webp' height={270} width={1200} className='w-full h-auto object-cover' />

                    </div>
                    <div className="absolute inset-0 p-6 flex items-center font-dm">
                        <div className='space-y-2'>
                            <div className='space-y-1'>
                            <p className="text-lg font-medium text-gray-700">Best in Electronics</p>
                            <h3 className="text-gray-900 font-bold text-2xl -mt-1.5 uppercase">Gadget Town</h3>
                            </div>
                            <p className="text-base">
                                Starting from only <span className="text-primary-2">$9.99</span>
                            </p>
                            <Link
                                className="hover:bg-gray-600 hover:text-white text-gray-800 border-gray-600 relative gap-1 flex justify-center rounded-sm text-xs mt-13p items-center py-2 w-29 font-dm border"
                                href="#"
                                title="Shop Electronic Devices at Gadget Town"
                            >
                                <span>Shop Now</span>
                                <Arrowicon className="size-3" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-10 md:my-12">
                <div className="flex flex-col md:flex-row md:gap-12 gap-4">
                    {/* First Promotional Item */}
                    <div className="md:w-1/2 w-full">
                        <div className="relative">
                            <div className="h-44 flex justify-center items-center" >
                        <Image src={'/images/electrify-banner.webp'} alt='electrify-banner.webp' height={270} width={600} className='w-full h-auto object-cover' />

                               
                            </div>
                            <div className="absolute p-6 inset-0 flex items-center">
                            <div className='space-y-2'>
                                <div className='space-y-1'>
                                    <p className="text-sm text-gray-500">ELECTRONICS</p>
                                    <p className="text-gray-800 font-bold text-lg uppercase">ELECTROFY</p>
                                    </div>
                                    <p className="text-gray-800 font-bold text-2xl -mt-2 uppercase">YOUR LIFE</p>
                                    <Link
                                className="hover:bg-gray-600 hover:text-white text-gray-800 border-gray-600 relative gap-1 flex justify-center rounded-sm text-xs mt-13p items-center py-2 w-29 font-dm border"
                                href="#"
                                title="Shop Electronic Devices at Gadget Town"
                            >
                                <span>Shop Now</span>
                                <Arrowicon className="size-3" />
                            </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Second Promotional Item */}
                    <div className="md:w-1/2 w-full">
                        <div className="relative">
                        <div className="h-44 flex justify-center items-center" >
                        <Image src={'/images/shoes-banner.webp'} alt='shoes-banner.webp' height={270} width={600} className='w-full h-auto object-cover' />

                               
                            </div>
                            <div className="absolute p-6 inset-0 flex items-center">
                            <div className='space-y-2'>
                            <div className='space-y-1'>
                                    <p className="text-sm text-gray-500">SHOES</p>
                                    <p className="text-gray-800 font-bold text-lg uppercase">ADD STYLES TO</p>
                                    </div>
                                    <p className="text-gray-800 font-bold text-2xl -mt-2 uppercase">YOUR FEET</p>
                                    <Link
                                className="hover:bg-gray-600 hover:text-white text-gray-800 border-gray-600 relative gap-1 flex justify-center rounded-sm text-xs mt-13p items-center py-2 w-29 font-dm border"
                                href="#"
                                title="Shop Electronic Devices at Gadget Town"
                            >
                                <span>Shop Now</span>
                                <Arrowicon className="size-3" />
                            </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


