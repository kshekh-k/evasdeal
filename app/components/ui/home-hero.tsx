'use client';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image'; 
import { Anglelefticon, Anglerighticon } from '@/app/icons';

export const Homehero: React.FC = () => {

  return (
    <section className='md:w-3/4 w-full ml-auto '>
      <div className="overflow-hidden rounded-xl md:h-[450px] xl:h-[420px] relative flex items-stretch">
        <Swiper className="mySwiper w-full" 
        
        modules={[Navigation, Pagination]} 
          pagination={{ 
            clickable: true, 
            el: ".pagination",
            renderBullet: function (index, className) {
              return '<span class="cursor-pointer ' + className + '"><span class="invisible">' + (index + 1) + '</span></span>';
            },
           }}
          loop={true}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
        >
          <SwiperSlide className='!flex flex-col'>
            <div className="flex items-stretch flex-1 justify-center">
            <Image src={'/images/slider-1.webp'} className="min-w-full max-w-none h-auto" alt='' width={1024} height={600} />
            </div>
          </SwiperSlide>
          <SwiperSlide className='!flex flex-col'>
            <div className="flex items-stretch flex-1 justify-center">
            <Image src={'/images/slider-2.webp'} className="min-w-full max-w-none h-auto" alt='' width={1024} height={600} />
            </div>
          </SwiperSlide>
          <SwiperSlide className='!flex flex-col'>
            <div className="flex items-stretch flex-1 justify-center">
            <Image src={'/images/slider-3.webp'} className="min-w-full max-w-none h-auto" alt='' width={1024} height={600} />
            </div>
          </SwiperSlide>
          <SwiperSlide className='!flex flex-col'>
            <div className="flex items-stretch flex-1 justify-center">
            <Image src={'/images/slider-4.webp'} className="min-w-full max-w-none h-auto" alt='' width={1024} height={600} />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="pagination flex justify-center gap-1 absolute bottom-0 inset-x-0 p-3 md:p-5 z-10" />
        <div className='absolute bottom-0 right-0 z-20 p-3 md:p-5 flex gap-2'>
          <button className={`size-8 ease-in-out duration-200 bg-white hover:bg-primary hover:text-white rounded text-gray-400 flex items-center justify-center left-2 swiper-prev`}>
            <Anglelefticon className="size-3" />
          </button>
          <button className={`size-8 ease-in-out duration-200 bg-white hover:bg-primary hover:text-white rounded text-gray-400 flex items-center justify-center right-2 swiper-next`}>
            <Anglerighticon className="size-3" />
          </button>
        </div>
      </div>
    </section>
  )
}

