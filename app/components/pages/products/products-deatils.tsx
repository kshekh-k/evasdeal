'use client'
import React from 'react'
import Counter from '../../ui/counter'
import Ratings from '../../ui/ratings'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import { Anglelefticon, Anglerighticon, Compareicon, Hearticon, Shareicon, Shoppingbagicon } from '@/app/icons';
const sliders = ['/images/product.png', '/images/product.png', '/images/product.png', '/images/product.png', '/images/product.png']
interface ProductCard {
    thumb?: string,
    productName?: string,
    categoryName?: string,
    SKU?: number,
    regularPrice?: number,
    priceRange?: boolean,
    minimum?: number,
    maximum?: number,
    discount?: number,
    rating?: number,
    discription?: string,
    slider?: any[]

}
const Productsdetails: React.FC<ProductCard> = ({
    productName, categoryName, SKU, regularPrice = 1, priceRange = false, minimum, maximum, discount = 0, rating, discription, slider = sliders
}) => {
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null)
    return (
        <>

            <div className="flex flex-col gap-2">
                <div className="relative border border-gray-300 rounded p-2 group overflow-hidden">

                    <Swiper className="mySwiper2 h-full"
                        modules={[FreeMode, Navigation, Thumbs]}
                        thumbs={{ swiper: thumbsSwiper }}

                        loop={true}
                        navigation={{
                            nextEl: '.swiper-next',
                            prevEl: '.swiper-prev',
                        }}
                    >
                        {slider.map((item: any, index: any) =>
                            <SwiperSlide key={index}>
                                <Image src={item} alt='' width={1024} height={600} className='w-auto h-auto object-cover' />
                            </SwiperSlide>
                        )}
                    </Swiper>


                    <button className={`absolute z-20 top-1/2 -translate-y-1/2 size-8 ease-in-out duration-200 bg-white hover:bg-primary hover:text-white rounded text-gray-400 flex items-center justify-center -left-40 group-hover:left-2 swiper-prev`}>
                        <Anglelefticon className="size-3" />
                    </button>
                    <button className={`absolute z-20 top-1/2 -translate-y-1/2 size-8 ease-in-out duration-200 bg-white hover:bg-primary hover:text-white rounded text-gray-400 flex items-center justify-center -right-40 group-hover:right-2 swiper-next`}>
                        <Anglerighticon className="size-3" />
                    </button>

                </div>
                <div className="w-full relative">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {slider.map((item: any, index: any) =>
                            <SwiperSlide key={index}>
                                <div className="border border-gray-300 rounded p-1 flex justify-center items-center">
                                    <Image src={item} alt='' width={50} height={50} className='w-20 h-auto object-cover' />
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2'>
                    <p className='text-sm bg-gray-100 text-gray-500 font-dm px-2 py-0.5'>Category: {categoryName}</p>
                    <p className='text-sm bg-gray-100 text-gray-500 font-dm px-2 py-0.5'>SKU: {SKU}</p>
                </div>
                <h2 className="text-xl font-dm font-medium text-left text-gray-700">{productName}</h2>
                <div className="flex gap-4 items-center">
                    <div className="order-first md:order-none">
                        <Ratings rating={rating} className='' />
                    </div>
                    <button className="flex text-gray-500 relative hover:text-primary">
                        <Shareicon className="size-4" />
                    </button>
                    <button className="flex text-gray-500 relative hover:text-primary">
                        <Hearticon className="size-4" />
                    </button>

                    <button className="flex text-gray-500 relative hover:text-primary">
                        <Compareicon className="size-4" />
                    </button>
                </div>
                <div className='flex items-center gap-3 pt-3' data-label={discount}>
                    {/* Price Range */}
                    {priceRange ?
                        <p className="text-gray-700 font-dm font-semibold text-xl">${minimum} - ${maximum}</p>
                        : <>
                            {discount > 0 &&
                                <p className="text-gray-700 font-dm font-semibold text-xl">
                                    ${regularPrice - (regularPrice * discount / 100)}
                                </p>
                            }
                            <p className={` font-dm  ${discount > 0 ? 'line-through text-gray-400 text-lg pl-1 font-medium' : 'text-gray-700 text-xl font-semibold'}`}>
                                ${regularPrice}
                            </p>
                            {discount > 0 &&
                                <p className='text-primary text-sm font-semibol'>You saved: ${regularPrice * discount / 100}</p>
                            }
                        </>
                    }
                </div>
                <div className="flex gap-2">
                    <Counter />
                    <button className="text-white font-medium flex gap-1 justify-center items-center py-2 px-3 rounded flex-1 text-center font-dm bg-primary hover:bg-primary-2 ease-in-out duration-200 z-20">
                        <Shoppingbagicon className="size-5" /><span>Add to Cart</span>
                    </button>
                </div>
            </div>


        </>
    )
}

export default Productsdetails
