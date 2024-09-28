'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const TopCategoriesThisMonth = [
  {
    thumb: '/images/tcom-1.webp',
    label: 'Electronic Devices',
    url: '#'
  },
  {
    thumb: '/images/tcom-2.webp',
    label: 'Electronic Devices',
    url: '#'
  },
  {
    thumb: '/images/tcom-3.webp',
    label: 'Health & Beauty',
    url: '#'
  },
  {
    thumb: '/images/tcom-4.webp',
    label: 'Babies & Toys',
    url: '#'
  },
  {
    thumb: '/images/tcom-5.webp',
    label: 'Fashion',
    url: '#'
  },
  {
    thumb: '/images/tcom-6.webp',
    label: 'Watches & Accessories',
    url: '#'
  },
  {
    thumb: '/images/tcom-7.webp',
    label: 'Automotive',
    url: '#'
  },
]
export const Topcategories: React.FC = () => {
  return (
    <section className="my-10 md:my-12 space-y-5" >

      <h2 className="font-bold text-sm md:text-[22px] text-center text-gray-900 uppercase font-dm">Top Categories of the Month</h2>
      <div className='grid lg:grid-cols-7 lg:gap-7 grid-flow-col lg:grid-flow-row gap-4 auto-cols-max overflow-auto'>
        {TopCategoriesThisMonth.map((item, index) =>
          <Link key={index} href={item.url} className='flex group'>
            <div className="border border-gray-300 group-hover:border-primary group-hover:bg-primary ease-in-out duration-200 rounded-md relative w-full ">
              <div className="flex justify-center items-center h-130p">
                <Image width={200} height={200}
                  className="md:h-16 md:w-16 w-66p h-66p object-contain group-hover:-translate-y-2 ease-in-out duration-200"
                  src={item.thumb}
                  alt="Image"
                />
              </div>
              <div className="opacity-0 hover:opacity-100 duration-300 ease-in-out absolute inset-0 z-10 flex justify-center items-center text-xs md:text-base mx-3 text-white font-semibold">
                <p className="text-white font-dm text-center leading-5 truncate absolute bottom-3 inset-x-0 px-3">
                  {item.label}
                </p>
              </div>
            </div>
          </Link>
        )}
      </div>
    </section>
  )
}

export default Topcategories
