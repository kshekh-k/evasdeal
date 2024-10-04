'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { Emaillineicon, Facebookicon, Instagramicon, Linkedinicon, Locationicon, Phonelineicon, Quoraicon, Telegramicon, Whatsappicon, Xicon, Youtubeicon } from '@/app/icons';

const usefulllinks = [
  { label: 'About Us', url: '#' },
  { label: 'Privacy Policy', url: '#' },
  { label: 'Refund Policy', url: '#' },
  { label: 'Digital Payment', url: '#' },
  { label: 'Track Order', url: '#' },
  { label: 'All Products', url: '#' },
  { label: 'Be A Seller', url: '#' },
]

const categories = [
  { label: 'Electronics Devices', url: '#' },
  { label: 'Electronics Accessories', url: '#' },
  { label: 'Health and Beauty', url: '#' },
  { label: 'Babies and Toys', url: '#' },
  { label: 'Fashion for All', url: '#' },
  { label: 'Watches & Accessories', url: '#' },
  { label: 'Sports and Outdoor', url: '#' },
  { label: 'Automobile & Bicycles', url: '#' },
]


const socialmedia = [
  {
    icon: <Facebookicon className="size-4" />,
    url: '#'
  },
  {
    icon: <Youtubeicon className="size-4" />,
    url: '#'
  },
  {
    icon: <Whatsappicon className="size-4" />,
    url: '#'
  },
  {
    icon: <Instagramicon className="size-4" />,
    url: '#'
  },
  {
    icon: <Telegramicon className="size-4" />,
    url: '#'
  },
  {
    icon: <Xicon className="size-4" />,
    url: '#'
  },
  {
    icon: <Quoraicon className="size-4" />,
    url: '#'
  },
  {
    icon: <Linkedinicon className="size-4" />,
    url: '#'
  },
]


const currentYear = new Date().getFullYear();




export const Footer: React.FC = () => {
  return (
    <footer>
      <section className="bg-gray-12 text-white mt-5 bg-[#2c2c2c]">
        <div className="body-font pb-30p sm:pb-11 layout-wrapper px-4 xl:px-0">
          <div className="flex flex-wrap lg:flex-nowrap gap-7 pt-12 justify-start items-start container px-4 xl:px-5">
            <div className="w-full sm:w-1/3 lg:w-1/5 order-1">
              <div className="flex-shrink-0 md:mx-0 mx-auto">
                <div className="flex">
                  <Link href="https://demo.martvill.techvill.net">
                    <Image className="w-44 neg-transition-scale" width={1000} height={1000} src="/images/logo.png" alt="Image" />
                  </Link>
                </div>

                <p className="text-sm font-medium roboto-regular mt-5 break-all">
                  The ultimate all-in-one solution for your ecommerce business worldwide.
                </p>
              </div>
              <div className="flex space-x-4 mt-7 items-center">
                <Image className="w-full sm:w-auto neg-transition-scale" src="/extra/footer-payment.webp" width={1000} height={1000} alt="Image" />
              </div>

              <div className="mt-8">
                <p className="text-base dm-regular break-all">Download Our App</p>
                <div className="flex space-x-2 md:flex-col md:space-x-0 c-flex">
                  <div className="flex xs:justify-center md:justify-start">
                    <Link href="#" className="mt-15p" target="_blank">
                      <Image className="w-263p sm:w-32 neg-transition-scale" width={1000} height={1000} src="/extra/app-store.webp" alt="Image" />
                    </Link>
                  </div>
                  <div className="flex xs:justify-center md:justify-start">
                    <Link href="#" className="md:mt-11p mt-15p" target="_blank">
                      <Image className="w-263p sm:w-32 neg-transition-scale" width={1000} height={1000} src="/extra/app-store-1.webp" alt="Image" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/3 lg:w-1/5 flex flex-col justify-center order-2">
              <h4 className="mb-4 font-medium text-base font-dm break-all">
                Useful Links
              </h4>
              <ul className="text-sm font-medium roboto-regular leading-8 break-all">
                {usefulllinks.map((item, index) =>
                  <li key={index} className="hover:text-primary ease-in-out duration-200 break-all">
                    <Link href={item.url}>
                      {item.label}
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <div className="w-full sm:w-1/3 lg:w-1/5 flex flex-col justify-center order-3">
              <h4 className="mb-4 font-medium text-base font-dm break-all">
                Categories
              </h4>
              <ul className="text-sm font-medium roboto-regular leading-8 break-all">

                {categories.map((item, index) =>
                  <li key={index} className="hover:text-primary ease-in-out duration-200 break-all">
                    <Link href={item.url}>
                      {item.label}
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <div className="w-full sm:w-1/3 lg:w-1/5 order-5">
              <h4 className="mb-4 font-medium text-base font-dm break-all">
                Contact Us
              </h4>

              <div className="flex-shrink-0 md:mx-0 mx-auto  mt-4 break-all">
                <Link href="#" className="flex font-medium md:justify-start gap-2">
                  <Locationicon className="size-4 shrink-0 relative top-1" />
                  <span className="text-sm font-medium hover:text-primary ease-in-out duration-200">
                    Address: 184 Main Rd E, St Albans, Australia
                  </span>
                </Link>
              </div>

              <div className="flex-shrink-0 md:mx-0 mx-auto text-center mt-5 break-all">
                <Link href="#" className="flex font-medium items-center md:justify-start gap-2">
                  <Emaillineicon className="size-4 shrink-0" />
                  <span className="text-sm font-medium hover:text-primary ease-in-out duration-200">
                    admin@techvill.net
                  </span>
                </Link>
              </div>

              <div className="flex-shrink-0 md:mx-0 mx-auto mt-25p break-all">
                <Link href="#" className="flex font-medium items-center md:justify-start gap-2">
                  <Phonelineicon className="size-4 shrink-0" />
                  <span className="text-sm font-medium hover:text-primary ease-in-out duration-200">
                    +12013828901
                  </span>
                </Link>
              </div>

              <h4 className="mb-4 mt-4 font-medium text-base font-dm break-all">
                Stay Connected
              </h4>

              <div className="mt-5 border-gray-13 flex">
                <div className="flex gap-7 sm:gap-3 flex-wrap">
                  {socialmedia.map((item, index) =>
                    <Link key={index} href={item.url} target="_blank" className="hover:bg-primary ease-in-out duration-200 text-white flex items-center justify-center w-8 h-8 bg-white/10 p-2 rounded-full ">
                      {item.icon}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#2c2c2c] text-white">
        <div className="border-t border-gray-900 layout-wrapper px-4 xl:px-0">
          <p className="md:py-3 py-7 text-sm font-medium text-center">
            &copy; {currentYear} Vasdeal | All Rights Reserved
          </p>
        </div>
      </section>
    </footer>
  )
}


