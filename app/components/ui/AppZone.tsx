// components/FurnitureZone.js
'use client'
import Image from 'next/image'; 
import React from 'react';
export const AppZone: React.FC = () => {
 
    return (
        <section className="layout-wrapper px-4 xl:px-0 md:my-12 my-10" style={{ marginTop: '100px', marginBottom: '0' }}>
            <div className="flex flex-col max-w-screen-xl mx-auto md:flex-row md:gap-[30px] gap-[15px]">
                {[
                    {
                        title: 'CUSTOMIZED',
                        subtitle: 'MOBILE',
                        description: 'IOS APPS',
                        imgSrc: '/extra/app-1.webp',
                    },
                    {
                        title: 'DECORATE YOUR',
                        subtitle: 'DESIGN',
                        description: 'SYSTEM',
                        imgSrc: '/extra/app-2.webp'
                    },
                    {
                        title: 'HEART WINNING',
                        subtitle: 'AWARDS',
                        description: 'PRODUCTS',
                        imgSrc: '/extra/app-3.webp'
                    },
                ].map((item, index) => (
                    <div key={index} className="md:w-1/3 w-full">
                        <div className="block relative">
                            <div className="h-44" style={{ height: '284px' }}>
                                <Image
                                    className="h-full w-full object-fit neg-transition-scale rounded-md"
                                    src={item.imgSrc}
                                    alt={item.description}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="absolute p-6 top-0 right-0 bottom-0 left-0 flex items-center">
                                <div>
                                    <p className="text-gray-700  font-regular">
                                        <span style={{ color: '#fff' }}>{item.subtitle}</span>
                                    </p>
                                    <p className="text-gray-900 font-bold text-lg uppercase">
                                        <span style={{ color: '#fff' }}>{item.title}</span>
                                    </p>
                                    <p className="text-gray-900 font-bold text-[33px] -mt-3 uppercase">
                                        <span style={{ color: '#fff' }}>{item.description}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

 
