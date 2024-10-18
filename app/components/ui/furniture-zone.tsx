'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Productcard } from './product-card';
import { Arrowicon } from '@/app/icons';
import useSwr from "swr";
import ProductsLoading from "./loading";
import { ProductTypeList } from "@/types";
export const FurnitureZone: React.FC = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error } = useSwr('/api/products', fetcher);
    return (
        <section className="my-10 md:my-12" >
            <div className="flex md:justify-between justify-center items-center mb-2.5 md:mb-5">
                <h2 className="font-bold text-sm md:text-[22px] text-gray-900 uppercase dm-bold">Furniture ZONE</h2>
                <Link
                    href="#"
                    className="process-goto relative justify-center text-gray-600 font-medium text-base font-dm items-center md:inline-flex hover:text-gray-12 transition duration-200"
                >
                    <span className="mr-2">See More</span>
                    <Arrowicon className="size-3" />
                </Link>
            </div>
            <div className="md:flex md:gap-5 gap-0">
                <div className="md:w-[335px] lg:w-322p w-full pb-2">
                    <div className="relative h-600p w-full">
                        <Image src="/images/furniture.webp" alt="" width={400} height={600} className="w-full h-full object-cover rounded-md" />
                        <div className="absolute top-0 p-6">
                            <div className='space-y-2'>
                                <div className='space-y-1'>
                                    <p className="text-xs text-gray-600 font-bold mb-1">Take A Look</p>
                                    <p className="text-gray-900 font-medium text-lg uppercase mb-1.5">On Our</p>
                                </div>
                                <p className="text-gray-12 font-bold text-2xl -mt-1.5 uppercase">Furnitures</p>
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
                <div className="w-full">
                    <div className="w-full mt-5 md:mt-0">
                        {data ?
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                                {data.slice().map((item: ProductTypeList) => (
                                    <Productcard key={item.id} id={item.id} SKU={item.SKU} sizes={item.sizes} rating={item.rating} slider={item.images} discount={item.discount} categoryName={item.category} images={item.images} name={item.name} colors={item.colors} price={item.price} quantityAvailable={item.quantityAvailable} priceRange={item.priceRange} minimum={item.minimum} maximum={item.maximum} discription={'Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.'} />
                                ))}
                            </div>
                            :
                            <ProductsLoading />
                            }
                    </div>
                </div>
            </div>
        </section>
    );
};


