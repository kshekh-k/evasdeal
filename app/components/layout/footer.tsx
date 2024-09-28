'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { Emaillineicon, Locationicon, Phonelineicon } from '@/app/icons';

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










export const Footer: React.FC = () => {
  return (
    <footer>
      <section className="bg-gray-12 text-white mt-5 bg-[#2c2c2c]">
        <div className="body-font pb-30p sm:pb-11 layout-wrapper px-4 xl:px-0">
          <div className="flex flex-wrap lg:flex-nowrap gap-7 pt-12 justify-start max-w-screen-xl mx-auto">
            <div className="w-full sm:w-1/3 md:w-1/5 order-1">
              <div className="flex-shrink-0 md:mx-0 mx-auto">
                <div className="flex">
                  <Link href="https://demo.martvill.techvill.net">
                    <Image className="w-44 neg-transition-scale" width={1000} height={1000} src="/extra/logo.webp" alt="Image" />
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

            <div className="w-27% sm:w-1/3 md:w-1/5 flex flex-col justify-center order-2">
              <h4 className="mb-4 font-medium text-base font-dm break-all">
                Useful Links
              </h4>
              <ul className="text-sm font-medium roboto-regular leading-8 break-all">
                {usefulllinks.map((item, index) =>
                  <li key={index} className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    <Link href={item.url}>
                      {item.label}
                    </Link>
                    </li>
                )}
              </ul>
            </div>
            <div className="w-27% sm:w-1/3 md:w-1/5 flex flex-col justify-center order-3">
            <h4 className="mb-4 font-medium text-base font-dm break-all">
           Categories
              </h4>
              <ul className="text-sm font-medium roboto-regular leading-8 break-all">
              
              {categories.map((item, index) =>
                  <li key={index} className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    <Link href={item.url}>
                      {item.label}
                    </Link>
                    </li>
                )}
              </ul>
            </div>
         

            <div className="w-full sm:w-1/3 md:w-1/5 order-5">
            <h4 className="mb-4 font-medium text-base font-dm break-all">
                Contact Us
              </h4>

              <div className="flex-shrink-0 md:mx-0 mx-auto ltr:md:text-left rtl:md:text-right mt-4 break-all">
                <Link href="#" className="flex title-font font-medium md:justify-start gap-2">
                  <Locationicon className="size-4" />

                  <span className="text-sm ltr:ml-1 rtl:mr-1 font-medium hover:text-orange-500 cursor-pointer transition-all rtl-direction-space-location roboto-regular">
                    Address: 184 Main Rd E, St Albans, Australia
                  </span>
                </Link>
              </div>

              <div className="flex-shrink-0 md:mx-0 mx-auto text-center ltr:md:text-left rtl:md:text-right mt-5 break-all">
                <Link href="#" className="flex title-font font-medium items-center md:justify-start gap-2">
                  <Emaillineicon className="size-4" />
                  <span className="text-sm font-medium hover:text-orange-500 cursor-pointer transition-all rtl-direction-space roboto-regular">
                    admin@techvill.net
                  </span>
                </Link>
              </div>

              <div className="flex-shrink-0 md:mx-0 mx-auto text-centerltr:md:text-left rtl:md:text-right mt-25p break-all">
                <Link href="#" className="flex title-font font-medium items-center md:justify-start gap-2">
                  <Phonelineicon className="size-4" />
                  <span className="text-sm font-medium hover:text-orange-500 cursor-pointer transition-all rtl-direction-space roboto-regular">
                    +12013828901
                  </span>
                </Link>
              </div>

              <h4 className="mb-4 mt-4 font-medium text-base font-dm break-all">
                Stay Connected
              </h4>

              <div className="mt-5 border-gray-13 flex">
                <div className="flex gap-7 sm:gap-3 flex-wrap">
                  <Link href="https://www.facebook.com" title="Facebook" target="_blank" className="primary-bg-hover hover:text-gray-800 text-white flex items-center justify-center w-8 h-8 bg-gray-600 p-2 rounded-full social-transition">
                    <Image className=" w-3" src="/extra/facebook.svg" alt="Facebook" width={1000} height={1000} />
                  </Link>
                  <Link href="https://www.youtube.com" title="YouTube" target="_blank" className="primary-bg-hover hover:text-gray-800 text-white flex items-center justify-center w-8 h-8 bg-gray-600 p-2 rounded-full social-transition">
                    <Image className=" w-6" src="/extra/youtube.svg" alt="YouTube" width={1000} height={1000} />
                  </Link>
                  <Link href="https://www.whatsapp.com" title="WhatsApp" target="_blank" className="primary-bg-hover hover:text-gray-800 text-white flex items-center justify-center w-8 h-8 bg-gray-600 p-2 rounded-full social-transition">
                    <Image className=" w-6" src="/extra/whatsapp.svg" alt="WhatsApp" width={1000} height={1000} />
                  </Link>
                  <Link href="https://www.instagram.com" title="Instagram" target="_blank" className="primary-bg-hover hover:text-gray-800 text-white flex items-center justify-center w-8 h-8 bg-gray-600 p-2 rounded-full social-transition">
                    <Image className=" w-6" src="/extra/instagram.svg" alt="Instagram" width={1000} height={1000} />
                  </Link>
                  <Link href="https://www.telegram.org" title="Telegram" target="_blank" className="primary-bg-hover hover:text-gray-800 text-white flex items-center justify-center w-8 h-8 bg-gray-600 p-2 rounded-full social-transition">
                    <Image className=" w-10" src="/extra/telegram.svg" alt="Telegram" width={1000} height={1000} />
                  </Link>
                  <Link href="https://www.twitter.com" title="Twitter" target="_blank" className="primary-bg-hover hover:text-gray-800 text-white flex items-center justify-center w-8 h-8 bg-gray-600 p-2 rounded-full social-transition">
                    <Image className=" w-10" src="/extra/twitter.svg" alt="Twitter" width={1000} height={1000} />
                  </Link>
                  <Link href="https://www.quora.com" title="Quora" target="_blank" className="primary-bg-hover hover:text-gray-800 text-white flex items-center justify-center w-8 h-8 bg-gray-600 p-2 rounded-full social-transition">
                    <Image className=" w-6" src="/extra/quora.svg" alt="Quora" width={1000} height={1000} />
                  </Link>
                  <Link href="https://www.linkedin.com" title="LinkedIn" target="_blank" className="primary-bg-hover hover:text-gray-800 text-white flex items-center justify-center w-8 h-8 bg-gray-600 p-2 rounded-full social-transition">
                    <Image className=" w-7" src="/extra/linkedin.svg" alt="LinkedIn" width={1000} height={1000} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#2c2c2c] text-white">
        <div className="border-t border-gray-900 layout-wrapper px-4 xl:px-0">
          <p className="md:py-3 py-7 text-sm font-medium text-center">
            ©2024 Vasdeal | All Rights Reserved
          </p>
        </div>
      </section>
    </footer>
  )
}


