'use client';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
export const Homehero: React.FC = () => {
 
  return (
    <section className='md:w-3/4 w-full -mt-2 ml-auto '>
        <div className="overflow-hidden rounded-xl h-96">
        <Swiper className="mySwiper h-full "  navigation={true} modules={[Navigation]}  pagination={{ clickable: true }}>
        <SwiperSlide>
            <Image src={'/images/slider-1.webp'} alt='' width={1024} height={600} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={'/images/slider-2.webp'} alt='' width={1024} height={600} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={'/images/slider-3.webp'} alt='' width={1024} height={600} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={'/images/slider-4.webp'} alt='' width={1024} height={600} />
        </SwiperSlide> 
      </Swiper>
      </div>
        </section>
  )
}
 
