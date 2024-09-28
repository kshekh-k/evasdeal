import Link from 'next/link'
import React from 'react'
import { RiPhoneFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md";
import { HiMiniBars3BottomLeft, HiLanguage } from "react-icons/hi2";
import { TbStars } from "react-icons/tb";
import { BiGitCompare } from "react-icons/bi";
import Image from 'next/image';
function Footer() {
  return (
    <footer>
      <section className="bg-gray-12 text-white mt-5 bg-[#2c2c2c]">
        <footer className="body-font pb-30p sm:pb-11 layout-wrapper px-4 xl:px-0">
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

            <div className="w-27% sm:w-1/3 md:w-1/5 grid justify-center order-2">
              <ul className="text-sm font-medium roboto-regular leading-8 break-all">
                <p className="mb-4 font-medium text-base dm-sans break-all">
                  Useful Links
                </p>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    About Us
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Contact Us
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Privacy Policy
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Refund Policy
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Digital Payment
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Track Order
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    All Products
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Be A Seller
                  </li>
                </Link>
              </ul>
            </div>
            <div className="w-27% sm:w-1/3 md:w-1/5 grid justify-center order-3">
              <ul className="text-sm font-medium roboto-regular leading-8 break-all">
                <p className="mb-4 font-medium text-base dm-sans break-all">
                  Home Pages
                </p>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Homepage - Mixed
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Homepage - Furniture
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Homepage - Digital Product
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Homepage - Groceries
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Homepage - Fashion - I
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Homepage - Fashion - II
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Homepage - Fashion - III
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Homepage - Fashion - IV
                  </li>
                </Link>
              </ul>
            </div>
            <div className="w-27% sm:w-1/3 md:w-1/5 grid justify-center order-4">
              <ul className="text-sm font-medium roboto-regular leading-8 break-all">
                <p className="mb-4 font-medium text-base dm-sans break-all">
                  Categories
                </p>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Electronics Devices
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Electronics Accessories
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Health and Beauty
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Babies and Toys
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Fashion for All
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Watches &amp; Accessories
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Sports and Outdoor
                  </li>
                </Link>
                <Link href="#">
                  <li className="hover:text-orange-500 cursor-pointer transition-all break-all">
                    Automobile &amp; Bicycles
                  </li>
                </Link>
              </ul>
            </div>

            <div className="w-full sm:w-1/3 md:w-1/5 order-5">
              <p className="mb-23p font-medium text-base break-all">
                Contact Us
              </p>

              <div className="flex-shrink-0 md:mx-0 mx-auto ltr:md:text-left rtl:md:text-right mt-4 break-all">
                <Link href="#" className="flex title-font font-medium md:justify-start">
                  <div className="ltr:mr-15p rtl:ml-15p">
                    <svg className="neg-transition-scale" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C4.68629 2 2 4.68629 2 8C2 10.1458 3.09211 11.9159 4.45503 13.2906C5.77773 14.6248 7.27659 15.5032 8 15.8837C8.72341 15.5032 10.2223 14.6248 11.545 13.2906C12.9079 11.9159 14 10.1458 14 8C14 4.68629 11.3137 2 8 2ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 10.8706 14.5326 13.1178 12.9653 14.6987C11.397 16.2805 9.64481 17.2838 8.85847 17.6917C8.31691 17.9726 7.68309 17.9726 7.14153 17.6917C6.35519 17.2838 4.60299 16.2805 3.03474 14.6987C1.46741 13.1178 0 10.8706 0 8ZM8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6ZM4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8Z" fill="#ffffff"></path>
                    </svg>
                  </div>

                  <span className="text-sm ltr:ml-1 rtl:mr-1 font-medium hover:text-orange-500 cursor-pointer transition-all rtl-direction-space-location roboto-regular">
                    Address: 184 Main Rd E, St Albans, Australia
                  </span>
                </Link>
              </div>

              <div className="flex-shrink-0 md:mx-0 mx-auto text-center ltr:md:text-left rtl:md:text-right mt-5 break-all">
                <Link href="#" className="flex title-font font-medium items-center md:justify-start">
                  <div className="ltr:mr-15p rtl:ml-15p">
                    <svg className="neg-transition-scale" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.93417 2.43991e-06C4.95604 3.63201e-06 4.97799 4.8241e-06 5 4.8241e-06L13.0658 2.43991e-06C13.9523 -4.73896e-05 14.7161 -9.01893e-05 15.3278 0.0821453C15.9833 0.170277 16.6117 0.369022 17.1213 0.878684C17.631 1.38835 17.8297 2.0167 17.9179 2.67221C18.0001 3.28388 18.0001 4.0477 18 4.9342V9.06581C18.0001 9.95231 18.0001 10.7161 17.9179 11.3278C17.8297 11.9833 17.631 12.6117 17.1213 13.1213C16.6117 13.631 15.9833 13.8297 15.3278 13.9179C14.7161 14.0001 13.9523 14.0001 13.0658 14H4.93417C4.04769 14.0001 3.28387 14.0001 2.67221 13.9179C2.0167 13.8297 1.38835 13.631 0.878684 13.1213C0.369022 12.6117 0.170277 11.9833 0.0821453 11.3278C-9.01893e-05 10.7161 -4.73896e-05 9.95232 2.43991e-06 9.06583L4.8241e-06 5C4.8241e-06 4.97799 3.63201e-06 4.95604 2.43991e-06 4.93417C-4.73896e-05 4.04769 -9.01893e-05 3.28387 0.0821453 2.67221C0.170277 2.0167 0.369022 1.38835 0.878684 0.878684C1.38835 0.369022 2.0167 0.170277 2.67221 0.0821453C3.28387 -9.01893e-05 4.04769 -4.73896e-05 4.93417 2.43991e-06ZM2.93871 2.06431C2.50497 2.12263 2.36902 2.21677 2.2929 2.2929C2.21677 2.36902 2.12263 2.50497 2.06431 2.93871C2.00213 3.40122 2 4.02893 2 5V9C2 9.97108 2.00213 10.5988 2.06431 11.0613C2.12263 11.495 2.21677 11.631 2.2929 11.7071C2.36902 11.7832 2.50497 11.8774 2.93871 11.9357C3.40122 11.9979 4.02893 12 5 12H13C13.9711 12 14.5988 11.9979 15.0613 11.9357C15.495 11.8774 15.631 11.7832 15.7071 11.7071C15.7832 11.631 15.8774 11.495 15.9357 11.0613C15.9979 10.5988 16 9.97108 16 9V5C16 4.02893 15.9979 3.40122 15.9357 2.93871C15.8774 2.50497 15.7832 2.36902 15.7071 2.2929C15.631 2.21677 15.495 2.12263 15.0613 2.06431C14.5988 2.00213 13.9711 2 13 2H5C4.02893 2 3.40122 2.00213 2.93871 2.06431Z" fill="#ffffff"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.65831 8.44711L0.552734 4.89432L1.44716 3.10547L8.55273 6.65826C8.83426 6.79902 9.16563 6.79902 9.44716 6.65826L16.5527 3.10547L17.4472 4.89432L10.3416 8.44711C9.49701 8.8694 8.50289 8.8694 7.65831 8.44711Z" fill="#ffffff"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium hover:text-orange-500 cursor-pointer transition-all rtl-direction-space roboto-regular">
                    admin@techvill.net
                  </span>
                </Link>
              </div>

              <div className="flex-shrink-0 md:mx-0 mx-auto text-centerltr:md:text-left rtl:md:text-right mt-25p break-all">
                <Link href="#" className="flex title-font font-medium items-center md:justify-start">
                  <div className="ltr:mr-15p rtl:ml-15p">
                    <svg className="neg-transition-scale" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.24788 2.03712C1.73186 3.61331 1.57693 6.06186 2.89428 7.81831L4.07584 9.39373C5.32663 11.0615 6.80812 12.5429 8.47584 13.7937L10.0513 14.9753C11.8077 16.2926 14.2563 16.1377 15.8324 14.6217L13.2473 12.0365L12.2261 13.0577C11.7595 13.5243 11.0466 13.64 10.4563 13.3449C7.88947 12.0614 5.80813 9.9801 4.52471 7.41325C4.22958 6.82299 4.34526 6.1101 4.81191 5.64345L5.83306 4.6223L3.24788 2.03712ZM1.89539 0.559966C2.64201 -0.186654 3.85252 -0.186657 4.59914 0.559965L7.24727 3.20809C8.02832 3.98914 8.02832 5.25547 7.24727 6.03652L6.46774 6.81605C7.51362 8.76109 9.10848 10.356 11.0535 11.4018L11.8331 10.6223C12.6141 9.84126 13.8804 9.84125 14.6615 10.6223L17.3096 13.2704C18.0562 14.017 18.0562 15.2276 17.3096 15.9742C15.0325 18.2513 11.4275 18.5075 8.85126 16.5753L7.27584 15.3937C5.4565 14.0292 3.84034 12.4131 2.47584 10.5937L1.29428 9.01831C-0.637914 6.44206 -0.381716 2.83708 1.89539 0.559966Z" fill="#ffffff"></path>
                    </svg>
                  </div>

                  <span className="text-sm font-medium hover:text-orange-500 cursor-pointer transition-all rtl-direction-space roboto-regular">
                    +12013828901
                  </span>
                </Link>
              </div>

              <p className="mt-50p dm-regular text-base break-all">
                Stay Connected
              </p>

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
        </footer>
      </section>
      <section className="bg-[#2c2c2c] text-white">
        <div className="border-t border-gray-900 layout-wrapper px-4 xl:px-0">
          <p className="md:py-3 py-7 font-medium text-center">
            ©2024 Mart Vill | All Rights Reserved
          </p>
        </div>
      </section>
    </footer>
  )
}

export default Footer
