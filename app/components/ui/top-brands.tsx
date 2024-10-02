'use client'
// components/TopBrands.js

import Image from 'next/image';
import Link from 'next/link';
const brands = [
    {
        name: 'Aarong',
        imgSrc: '/extra/brands-1.webp',
        link: '#',
    },
    {
        name: 'Samsung',
        imgSrc: '/extra/brands-3.webp',
        link: '#',
    },
    {
        name: 'Huawei',
        imgSrc: '/extra/brands-4.webp',
        link: '#',
    },
    {
        name: 'Richman',
        imgSrc: '/extra/brands-5.webp',
        link: '#',
    },
    {
        name: 'Yellow',
        imgSrc: '/extra/brands-6.webp',
        link: '#',
    },
    {
        name: 'DorjiBari',
        imgSrc: '/extra/brands-7.webp',
        link: '#',
    },
    {
        name: 'KayKraft',
        imgSrc: '/extra/brands-8.webp',
        link: '#',
    },
    {
        name: 'Smartex',
        imgSrc: '/extra/brands-1.webp',
        link: '#',
    },
    {
        name: 'Sailor',
        imgSrc: '/extra/brands-10.webp',
        link: '#',
    },
]
export const TopBrands: React.FC = () => {

    return (
        <section className="my-10 md:my-12 space-y-5" >

            <h2 className="font-bold text-sm md:text-[22px] text-left text-gray-900 uppercase font-dm">
                TOP BRANDS
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 grid-rows-2 gap-5 md:gap-7">
                {brands.map((brand, index) => (
                    <>
                        {index == 0 ? (
                            <Link key={`first-col-${index}`} href={brand.link} className="row-span-2 col-span-2 border rounded-md group flex justify-center items-center">
                                <div className="grow p-6 flex flex-row h-36 justify-center items-center  ">
                                    <Image
                                        className="w-32 h-auto object-cover group-hover:scale-110 ease-in-out duration-200"
                                        src={brand.imgSrc}
                                        alt={brand.name}
                                        width={1000} // Set appropriate width for the image
                                        height={500} // Set appropriate height for the image
                                    />
                                </div>

                            </Link>
                        ) : (
                            <Link key={`cols-${index}`} href={brand.link} className="border rounded-md group flex justify-center items-center">
                                <div className="grow p-6 flex flex-row h-36 justify-center items-center ">
                                    <Image
                                        className="w-24 h-auto object-cover group-hover:scale-110 ease-in-out duration-200"
                                        src={brand.imgSrc}
                                        alt={brand.name}
                                        width={1000} // Set appropriate width for the image
                                        height={500} // Set appropriate height for the image
                                    />
                                </div>

                            </Link>
                        )}
                    </>
                ))}
            </div>


        </section>
    );
};


