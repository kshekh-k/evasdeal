'use client'
import Image from 'next/image'
import React from 'react'
import { Productcard } from './product-card'
import { Arrowicon, Staricon } from '@/app/icons'
import Link from 'next/link'

export const Weekdeals: React.FC = () => {
    return (
        <>

            <section className="my-10 md:my-12 space-y-5" >
                <h2 className="font-bold text-sm md:text-[22px] text-center text-gray-900 uppercase font-dm">Best deals of the week</h2>
                <div className="md:flex md:gap-5 gap-0">
                    <div className="w-full">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5 md:mt-0">
                            <Productcard thumb="/images/pennant-1.jpg" productName="Waist straight Slouchy jeans" currentPrice="$40" regularPrice="$60" />
                        </div>
                    </div>

                    <div className="md:w-322p w-full">
                        <div className="relative h-600p w-full builder_slider fade">
                            <Image width={700} height={200} alt=''
                                className="w-full h-full object-cover rounded-md"
                                src="/images/week-deals-offers.webp"
                            />
                            <div className="absolute bottom-0 p-6">
                                <p className="text-11 text-white dm-regular font-normal">ORGANIC</p>
                                <p className="text-white text-lg uppercase font-bold dm-bold">
                                    <span style={{ color: "#F81B4D" }}>HEALTHY</span> LIFE
                                </p>
                                <p className="text-white text-2.5xl -mt-1.5 uppercase font-bold dm-bold">
                                    ADVENTURES
                                </p>
                                <Link
                                    href="#"
                                    className="hover:bg-gray-600 hover:text-white text-white border-white relative gap-1 flex justify-center rounded-sm text-xs mt-13p items-center py-2 w-29 font-dm border"
                                >
                                    <span>Visit</span>
                                   <Arrowicon className="size-3" />
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}


