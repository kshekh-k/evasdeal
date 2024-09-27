import Link from 'next/link'
import React from 'react'
import { RiPhoneFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md";
import { HiMiniBars3BottomLeft, HiLanguage  } from "react-icons/hi2";
import { TbStars } from "react-icons/tb";
import { BiGitCompare } from "react-icons/bi"; 
import Image from 'next/image';
function Header() {
  return (
    <header>
    {/* Top bar */}
<div style={{ background: "#fcca19" }} className="">
  <div className="container px-4 xl:px-5 pt-2p font-medium text-base flex justify-between items-center h-16 md:h-10 ">
    <div className="flex items-center">
      <div style={{ color: "#2c2c2c" }} className="hidden md:block">
        <ul className="flex flex-col sm:flex-row text-xs gap-4 sm:gap-10 font-dm">
          <li>
            <Link
              href="javascript: void(0)"
              className="w-fill flex gap-1 items-center"
            >
              <RiPhoneFill className="size-4" />
              <span className="-mt-0.5">
                +12013828902
              </span>
            </Link>
          </li>
          <li>
            <Link href="javascript: void(0)" className="w-fill flex gap-1 items-center">
            <MdEmail className="size-4" />
            <span className="-mt-0.5">
                admin@techvill.net
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
      <HiMiniBars3BottomLeft className='size-5' />
      </div>
      <div className="md:hidden ml-10 rtl:order-1">
        <Link href="#">
          <Image width={50} height={50}
            className="w-36 h-11 object-contain neg-transition-scale"
            src=""
            alt="Image"
          />
        </Link>
      </div>
    </div>
    <div className="flex items-center">
      <div style={{ color: "#2c2c2c" }} className="hidden md:block">
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-7 font-dm">
          <li className="flex items-center">
            <Link
              href="#"
              className="flex w-fill gap-1 items-center"
            >
              <TbStars className="size-4" />
              <span className="text-xs">
                Be a seller
              </span>
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href="#"
              className="flex w-fill gap-1 items-center"
            >
              <div
                className="flex items-center justify-center text-xs"
                id="totalCompareItem"
              ></div>
              <BiGitCompare className="size-4" />
              <span className="text-xs">Compare</span>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="#" className="flex w-fill gap-1 items-center">
              <span className="">$</span>
              <span className="text-xs">
                USD
              </span>
            </Link>
          </li>
          <button className="flex items-center justify-end ">
            <span className="text-sm">
            <HiLanguage className="size-4" />
            </span>
            <div
              id="directionSwitch"
              className="dropdown rounded shadow-none relative lang-dropdown lang hidden"
              data-value="ltr"
            >
              <div className="select flex justify-between items-center lang-p">
                <p className="msg roboto-medium msg-color ">
                  English
                </p>
                <svg
                  width={7}
                  height={4}
                  viewBox="0 0 7 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.93933e-08 0.696543L0.737986 8.80039e-09L3.5 2.60691L6.26201 7.46738e-08L7 0.696543L3.5 4L3.93933e-08 0.696543Z"
                    fill="#2c2c2c"
                  />
                </svg>
              </div>
              <input type="hidden" name="Showing" defaultValue="English" />
              <ul className="dropdown-menu language-dropdown border border-gray-11 ltr:-right-2 rtl:-left-2 top-30p">
                <li
                  id="English"
                  className="Showing lang-change text-gray-10  primary-bg-color text-gray-12"
                >
                  <a
                    className="roboto-medium text-xs text-left lang"
                    data-short_name="en"
                  >
                    English
                  </a>
                </li>
                <li id="Bengali" className="Showing lang-change text-gray-10 ">
                  <a
                    className="roboto-medium text-xs text-left lang"
                    data-short_name="bn"
                  >
                    Bengali
                  </a>
                </li>
                <li id="French" className="Showing lang-change text-gray-10 ">
                  <a
                    className="roboto-medium text-xs text-left lang"
                    data-short_name="fr"
                  >
                    French
                  </a>
                </li>
                <li id="Chinese" className="Showing lang-change text-gray-10 ">
                  <a
                    className="roboto-medium text-xs text-left lang"
                    data-short_name="zh"
                  >
                    Chinese
                  </a>
                </li>
                <li id="Arabic" className="Showing lang-change text-gray-10 ">
                  <a
                    className="roboto-medium text-xs text-left lang"
                    data-short_name="ar"
                  >
                    Arabic
                  </a>
                </li>
                <li
                  id="Byelorussian"
                  className="Showing lang-change text-gray-10 "
                >
                  <a
                    className="roboto-medium text-xs text-left lang"
                    data-short_name="be"
                  >
                    Byelorussian
                  </a>
                </li>
                <li
                  id="Bulgarian"
                  className="Showing lang-change text-gray-10 "
                >
                  <a
                    className="roboto-medium text-xs text-left lang"
                    data-short_name="bg"
                  >
                    Bulgarian
                  </a>
                </li>
                <li id="Catalan" className="Showing lang-change text-gray-10 ">
                  <a
                    className="roboto-medium text-xs text-left lang"
                    data-short_name="ca"
                  >
                    Catalan
                  </a>
                </li>
                <li id="Estonian" className="Showing lang-change text-gray-10 ">
                  <a
                    className="roboto-medium text-xs text-left lang"
                    data-short_name="et"
                  >
                    Estonian
                  </a>
                </li>
                <li id="Dutch" className="Showing lang-change text-gray-10 ">
                  <a
                    className="roboto-medium text-xs text-left lang"
                    data-short_name="nl"
                  >
                    Dutch
                  </a>
                </li>
              </ul>
            </div>
          </button>
        </ul>
      </div>
    </div>
    <div className="md:hidden">
      <div className="flex justify-end items-end rev rtl:order-2 rtl:md:order-none rtl:ml-auto rtl:md:m-[unset]">
        <ul className="flex">
          <li>
            {/* unauthenticated */}
            <div className="flex flex-col justify-center mr-11 items-center cursor-pointer open-login-modal">
              <svg
                width={21}
                height={22}
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4102 2.38517C8.43424 2.38517 6.83243 3.98698 6.83243 5.96291C6.83243 7.93885 8.43424 9.54066 10.4102 9.54066C12.3861 9.54066 13.9879 7.93885 13.9879 5.96291C13.9879 3.98698 12.3861 2.38517 10.4102 2.38517ZM4.44727 5.96291C4.44727 2.66969 7.11695 0 10.4102 0C13.7034 0 16.3731 2.66969 16.3731 5.96291C16.3731 9.25614 13.7034 11.9258 10.4102 11.9258C7.11695 11.9258 4.44727 9.25614 4.44727 5.96291Z"
                  fill="#2C2C2C"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.00564 15.9486C5.86929 14.8761 8.11934 14.311 10.4085 14.311C12.6976 14.311 14.9477 14.8761 16.8113 15.9486C18.6743 17.0207 20.0908 18.5688 20.7471 20.4058C20.9687 21.0261 20.6455 21.7085 20.0253 21.9301C19.405 22.1517 18.7226 21.8286 18.501 21.2083C18.0701 20.0024 17.0911 18.8615 15.6216 18.0159C14.1528 17.1706 12.3198 16.6961 10.4085 16.6961C8.49717 16.6961 6.66414 17.1706 5.19535 18.0159C3.72586 18.8615 2.74681 20.0024 2.31597 21.2083C2.09437 21.8286 1.41193 22.1517 0.791676 21.9301C0.171426 21.7085 -0.151748 21.0261 0.0698463 20.4058C0.726164 18.5688 2.14268 17.0207 4.00564 15.9486Z"
                  fill="#2C2C2C"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="block md:hidden">
    <div id="overlay" className="fixed z-50 top-0 left-0 bg-darken-4" />
    <div
      id="sidenav"
      className="flex flex-col fixed z-50 top-0 left-0 bg-gray-12 text-gray-2"
    >
      <div className="mx-5">
        <div className="close flex items-center justify-center relative pointer mb-2 float-right mt-30p rtl:ml-5">
          <svg
            className="cross"
            width={13}
            height={13}
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.455612 0.455612C1.06309 -0.151871 2.04802 -0.151871 2.6555 0.455612L11.9888 9.78895C12.5963 10.3964 12.5963 11.3814 11.9888 11.9888C11.3814 12.5963 10.3964 12.5963 9.78895 11.9888L0.455612 2.6555C-0.151871 2.04802 -0.151871 1.06309 0.455612 0.455612Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9897 0.455612C11.3822 -0.151871 10.3973 -0.151871 9.78981 0.455612L0.45648 9.78895C-0.151003 10.3964 -0.151003 11.3814 0.45648 11.9888C1.06396 12.5963 2.04889 12.5963 2.65637 11.9888L11.9897 2.6555C12.5972 2.04802 12.5972 1.06309 11.9897 0.455612Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex items-center mt-30p">
          <a href="https://demo.martvill.techvill.net">
            <img
              className="w-36 h-11 object-contain neg-transition-scale"
              src="https://demo.martvill.techvill.net/public/uploads/20220904/d8f6694bc327798547b62d00cf81a971.webp"
              alt="Image"
            />
          </a>
        </div>
        <div className="flex items-center cursor-pointer mt-30p">
          <svg
            className="open-login-modal"
            width={50}
            height={50}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={25} cy={25} r={25} fill="#3C3C3C" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.7266 18C23.0697 18 21.7266 19.3431 21.7266 21C21.7266 22.6569 23.0697 24 24.7266 24C26.3834 24 27.7266 22.6569 27.7266 21C27.7266 19.3431 26.3834 18 24.7266 18ZM19.7266 21C19.7266 18.2386 21.9651 16 24.7266 16C27.488 16 29.7266 18.2386 29.7266 21C29.7266 23.7614 27.488 26 24.7266 26C21.9651 26 19.7266 23.7614 19.7266 21Z"
              fill="#ABABAB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.3588 29.3732C20.9215 28.4738 22.8082 28 24.7277 28C26.6472 28 28.5339 28.4738 30.0966 29.3732C31.6587 30.2722 32.8465 31.5702 33.3968 33.1106C33.5826 33.6307 33.3116 34.203 32.7915 34.3888C32.2714 34.5746 31.6992 34.3036 31.5134 33.7835C31.1521 32.7723 30.3312 31.8157 29.099 31.1066C27.8674 30.3978 26.3303 30 24.7277 30C23.125 30 21.588 30.3978 20.3564 31.1066C19.1242 31.8157 18.3032 32.7723 17.942 33.7835C17.7562 34.3036 17.1839 34.5746 16.6638 34.3888C16.1437 34.203 15.8728 33.6307 16.0586 33.1106C16.6089 31.5702 17.7967 30.2721 19.3588 29.3732Z"
              fill="#ABABAB"
            />
          </svg>
          <div className="ltr:ml-3 rtl:mr-3">
            <p className="dm-bold font-bold text-sm"></p>
            <p className="open-login-modal">No Account</p>
            <p />
            <p className="roboto-medium font-medium text-11 mt-0.5 cursor-pointer"></p>
            <p className="open-login-modal">Register or login now</p>
            <p />
          </div>
        </div>
        <div className="flex items-center mt-35p">
          <svg
            className="neg-transition-scale"
            width={14}
            height={17}
            viewBox="0 0 14 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.8877 1.82952C5.38875 2.1649 4.79817 2.67836 3.94593 3.4218L3.04594 4.2069C2.07069 5.05765 1.75458 5.35299 1.58498 5.72828C1.41463 6.10522 1.40008 6.54516 1.40008 7.85203V11.736C1.40008 12.619 1.40152 13.2121 1.45995 13.6544C1.51589 14.0779 1.61252 14.2565 1.72659 14.3726C1.83897 14.487 2.0096 14.583 2.41987 14.6392C2.85156 14.6983 3.43139 14.6998 4.30004 14.6998H9.69996C10.5686 14.6998 11.1484 14.6983 11.5801 14.6392C11.9904 14.583 12.161 14.487 12.2734 14.3726C12.3875 14.2565 12.4841 14.0779 12.54 13.6544C12.5985 13.2121 12.5999 12.619 12.5999 11.736V7.85204C12.5999 6.54516 12.5854 6.10522 12.415 5.72828C12.2454 5.35299 11.9293 5.05765 10.9541 4.2069L10.0541 3.4218C9.20183 2.67836 8.61125 2.1649 8.1123 1.82952C7.62942 1.50494 7.30682 1.39998 7 1.39998C6.69318 1.39998 6.37058 1.50494 5.8877 1.82952ZM5.10671 0.667625C5.71201 0.260758 6.30804 0 7 0C7.69196 0 8.28799 0.260758 8.89329 0.667624C9.47411 1.05804 10.1306 1.63076 10.9392 2.33611L11.8744 3.15192C11.9112 3.18405 11.9476 3.21574 11.9835 3.24702C12.8054 3.96323 13.3799 4.4639 13.6908 5.15174C14.0009 5.83803 14.0005 6.60465 14 7.70605C13.9999 7.75407 13.9999 7.80272 13.9999 7.85204V11.7837C13.9999 12.6066 14 13.2929 13.928 13.8378C13.8521 14.412 13.6851 14.9334 13.272 15.3538C12.8572 15.776 12.34 15.9482 11.7699 16.0262C11.2321 16.0998 10.5557 16.0998 9.74887 16.0998H4.25112C3.44434 16.0998 2.76788 16.0998 2.23008 16.0262C1.66003 15.9482 1.14281 15.776 0.727991 15.3538C0.314855 14.9334 0.147889 14.412 0.0720281 13.8378C4.9191e-05 13.2929 7.1385e-05 12.6066 9.79206e-05 11.7837L9.89219e-05 7.85203C9.89219e-05 7.80272 7.35546e-05 7.75406 4.8521e-05 7.70604C-0.000526334 6.60465 -0.000926452 5.83803 0.309224 5.15174C0.620073 4.4639 1.19463 3.96323 2.01654 3.24702C2.05243 3.21574 2.0888 3.18405 2.12564 3.15192L3.06084 2.3361C3.86938 1.63076 4.52589 1.05803 5.10671 0.667625Z"
              fill="#DFDFDF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.19922 10.4999C4.19922 9.72668 4.82601 9.09988 5.5992 9.09988H8.39916C9.17235 9.09988 9.79914 9.72668 9.79914 10.4999V15.3998C9.79914 15.7864 9.48574 16.0998 9.09915 16.0998C8.71256 16.0998 8.39916 15.7864 8.39916 15.3998V10.4999H5.5992V15.3998C5.5992 15.7864 5.2858 16.0998 4.89921 16.0998C4.51261 16.0998 4.19922 15.7864 4.19922 15.3998V10.4999Z"
              fill="#DFDFDF"
            />
          </svg>
          <p className="dm-sans text-sm font-medium ltr:ml-13p rtl:mr-13p">
            <a href="https://demo.martvill.techvill.net">Home</a>
          </p>
        </div>
        <div className="flex items-center mt-5">
          <svg
            className="neg-transition-scale"
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 1.16667C3.77834 1.16667 1.16667 3.77834 1.16667 7C1.16667 10.2217 3.77834 12.8333 7 12.8333C10.2217 12.8333 12.8333 10.2217 12.8333 7C12.8333 3.77834 10.2217 1.16667 7 1.16667ZM0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7Z"
              fill="#DFDFDF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.3292 3.67087C10.4854 3.82711 10.54 4.0582 10.4701 4.26782L9.01175 8.64282C8.95369 8.817 8.817 8.95369 8.64282 9.01175L4.26782 10.4701C4.0582 10.54 3.82711 10.4854 3.67087 10.3292C3.51463 10.1729 3.46008 9.94183 3.52995 9.73222L4.98828 5.35722C5.04635 5.18303 5.18303 5.04635 5.35722 4.98828L9.73222 3.52995C9.94183 3.46008 10.1729 3.51463 10.3292 3.67087ZM6.00285 6.00285L5.00568 8.99435L7.99718 7.99718L8.99435 5.00568L6.00285 6.00285Z"
              fill="#DFDFDF"
            />
          </svg>
          <p className="dm-sans text-sm font-medium ltr:ml-13p rtl:mr-13p">
            <a href="https://demo.martvill.techvill.net/track-order">
              Track Order
            </a>
          </p>
        </div>
      </div>
      <hr className="my-5 h-px border-t border-gray-600 mx-5" />
      <div id="accordian" className="relative flex-1 px-5">
        <ul className="flex flex-col space-y-6 dm-sans font-medium text-sm">
          <li>
            <div className="flex justify-between items-center">
              <p>
                <a href="https://demo.martvill.techvill.net/search-products?categories=electronic-devices">
                  Electronic Devices
                </a>
              </p>
              <h3>
                <a className="clicks rotate" href="#">
                  <svg
                    className=""
                    width={5}
                    height={9}
                    viewBox="0 0 5 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                      fill="#DFDFDF"
                    />
                  </svg>
                </a>
              </h3>
            </div>
            <ul className="mt-3">
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=smartphones">
                      Smartphones
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=realme-phones">
                          Realme Phones
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=samsung-phones">
                          Samsung Phones
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=xiaomi-phones">
                          Xiaomi Phones
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=oppo-phones">
                          OPPO Phones
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=vivo-phones">
                          Vivo Phones
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=infinix-phones">
                          Infinix Phones
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=motorola-phones">
                          Motorola Phones
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=tecno-phones">
                          Tecno Phones
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=iphone">
                          iphone
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=feature-phone">
                      Feature Phone
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=nokia-feature-phone">
                          Nokia Feature Phone
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=samsung-feature-phone">
                          Samsung Feature Phone
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=laptops">
                      Laptops
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=hp-laptops">
                          HP Laptops
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=asus-laptops">
                          Asus Laptops
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=dell-laptops">
                          Dell Laptops
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=lenovo-laptops">
                          Lenovo Laptops
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=acer-laptops">
                          Acer Laptops
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=cameras">
                      Cameras
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=dslr">
                          DSLR
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=mirrorless">
                          Mirrorless
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=point--shoot">
                          Point &amp; Shoot
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=car-cameras">
                          Car Cameras
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=actionvideo-cameras">
                          Action/Video Cameras
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=security-cameras">
                      Security Cameras
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=ip-security-cameras">
                          IP Security Cameras
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=cctv-security-cameras">
                          CCTV Security Cameras
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <div className="flex justify-between items-center">
              <p>
                <a href="https://demo.martvill.techvill.net/search-products?categories=electronic-accessories">
                  Electronic Accessories
                </a>
              </p>
              <h3>
                <a className="clicks rotate" href="#">
                  <svg
                    className=""
                    width={5}
                    height={9}
                    viewBox="0 0 5 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                      fill="#DFDFDF"
                    />
                  </svg>
                </a>
              </h3>
            </div>
            <ul className="mt-3">
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=mobile-accessories">
                      Mobile Accessories
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=phone-cases">
                          Phone Cases
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=power-banks">
                          Power Banks
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=cables--converters">
                          Cables &amp; Converters
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=wall-chargers">
                          Wall Chargers
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=wireless-chargers">
                          Wireless Chargers
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=audio">
                      Audio
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=headphones--headset">
                          Headphones &amp; Headset
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=home-entertainment">
                          Home Entertainment
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=bluetooth-speakers">
                          Bluetooth Speakers
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=live-sound--stage-equipment">
                          Live sound &amp; Stage Equipment
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=wearable">
                      Wearable
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=smartwatches">
                          Smartwatches
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=virtual-reality">
                          Virtual Reality
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=console-accessories">
                      Console Accessories
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=playstation--controllers">
                          Playstation Controllers
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=other-gaming-accessories">
                          Other Gaming Accessories
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=camera-accessories">
                      Camera Accessories
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=memory-cards">
                          Memory Cards
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=dslr-lens">
                          DSLR Lens
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=mirrorless-lens">
                          Mirrorless Lens
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=special-camera-lens">
                          Special Camera Lens
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=tripods--monopods">
                          Tripods &amp; Monopods
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=camera-cases-covers-and-bags">
                          Camera Cases, Covers and Bags
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=lighting--studio-equipment">
                          Lighting &amp; Studio Equipment
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=dry-box">
                          Dry Box
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=batteries">
                          Batteries
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=computer-accessories">
                      Computer Accessories
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=monitors">
                          Monitors
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=mice">
                          Mice
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=pc-audio">
                          PC Audio
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=keyboards">
                          Keyboards
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=mice--keyboard-combos">
                          Mice &amp; Keyboard Combos
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=power-cord--adaptors">
                          Power Cord &amp; Adaptors
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=storage">
                      Storage
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=external-hard-drives">
                          External Hard Drives
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=internal-hard-drives">
                          Internal Hard Drives
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=flash-drives">
                          Flash Drives
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=otg-drives">
                          OTG Drives
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=printer">
                      Printer
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=printers">
                          Printers
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=ink--toners">
                          Ink &amp; Toners
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=printer-stands">
                          Printer Stands
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=fax-machines">
                          Fax Machines
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=computer-components">
                      Computer Components
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=graphic-cards">
                          Graphic Cards
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=desktop-casings">
                          Desktop Casings
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=motherboards">
                          Motherboards
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=fans--heatsinks">
                          Fans &amp; Heatsinks
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=ram">
                          RAM
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=processors">
                          Processors
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=network-components">
                      Network Components
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=access-points">
                          Access Points
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=modems">
                          Modems
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=network-interface-cards">
                          Network Interface Cards
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=network-switches">
                          Network Switches
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=routers">
                          Routers
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=wireless-usb-adapters">
                          Wireless USB Adapters
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=software">
                      Software
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=educational-media">
                          Educational Media
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=operating-system">
                          Operating System
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=pc-games">
                          PC Games
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=security-software">
                          Security Software
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <div className="flex justify-between items-center">
              <p>
                <a href="https://demo.martvill.techvill.net/search-products?categories=health--beauty">
                  Health &amp; Beauty
                </a>
              </p>
              <h3>
                <a className="clicks rotate" href="#">
                  <svg
                    className=""
                    width={5}
                    height={9}
                    viewBox="0 0 5 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                      fill="#DFDFDF"
                    />
                  </svg>
                </a>
              </h3>
            </div>
            <ul className="mt-3">
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=bath--body">
                      Bath &amp; Body
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=body--massage-oils">
                          Body &amp; Massage Oils
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=body-moisturizers">
                          Body Moisturizers
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=body-scrubs">
                          Body Scrubs
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=body-soaps--shower-gels">
                          Body Soaps &amp; Shower Gels
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=foot-care">
                          Foot Care
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=hair-removal">
                          Hair Removal
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=hand-care">
                          Hand Care
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=sun-care-for-body">
                          Sun Care for Body
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=bath--body-accessories">
                          Bath &amp; Body Accessories
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=beauty-tools">
                      Beauty Tools
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=curling-irons--wands">
                          Curling Irons &amp; Wands
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=flat-irons">
                          Flat Irons
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=multi-stylers">
                          Multi-stylers
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=hair-dryers">
                          Hair Dryers
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=face-skin-care-tools">
                          Face Skin Care Tools
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=foot-relief-tools">
                          Foot Relief Tools
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=hair-removal-accessories">
                          Hair Removal Accessories
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=slimming--electric-massagers">
                          Slimming &amp; Electric Massagers
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=fragrances">
                      Fragrances
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=women-fragrances">
                          Women Fragrances
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=men-fragrances">
                          Men Fragrances
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=unisex-fragrances">
                          Unisex Fragrances
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=hair-care">
                      Hair Care
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=shampoo">
                          Shampoo
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=hair-treatments">
                          Hair Treatments
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=hair-care-accessories">
                          Hair Care Accessories
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=hair-brushes--combs">
                          Hair Brushes &amp; Combs
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=hair-coloring">
                          Hair Coloring
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=hair-conditioner">
                          Hair Conditioner
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=wig--hair-extensions--pads">
                          Wig &amp; Hair Extensions &amp; Pads
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=mens-care">
                      Men's Care
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=deodorants">
                          Deodorants
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=hair--care">
                          Hair Care
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=shaving--grooming">
                          Shaving &amp; Grooming
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=skin--care">
                          Skin Care
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=personal-care">
                      Personal Care
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=oral-care">
                          Oral Care
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=personal-safety--security">
                          Personal Safety &amp; Security
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=skin-care">
                      Skin Care
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=moisturizers--creams">
                          Moisturizers &amp; Creams
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=serum--essence">
                          Serum &amp; Essence
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=face-mask--packs">
                          Face Mask &amp; Packs
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=face-scrubs--exfoliators">
                          Face Scrubs &amp; Exfoliators
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=facial-cleansers">
                          Facial Cleansers
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=lip-balm--treatments">
                          Lip Balm &amp; Treatments
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=toner--mists">
                          Toner &amp; Mists
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=food-supplements">
                      Food Supplements
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=beauty-supplements">
                          Beauty Supplements
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=multivitamins">
                          Multivitamins
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=sports-nutrition">
                          Sports Nutrition
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=well-being">
                          Well Being
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=sexual-health-vitamins">
                          Sexual Health Vitamins
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=medical-supplies">
                      Medical Supplies
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=first-aid-supplies">
                          First Aid Supplies
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=health-accessories">
                          Health Accessories
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=health-monitors--tests">
                          Health Monitors &amp; Tests
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=injury-support--braces">
                          Injury Support &amp; Braces
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=medical-tests">
                          Medical Tests
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=nebulizers--aspirators">
                          Nebulizers &amp; Aspirators
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=ointments--creams">
                          Ointments &amp; Creams
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=scales--body-fat-analyzers">
                          Scales &amp; Body Fat Analyzers
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=wheelchairs">
                          Wheelchairs
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <div className="flex justify-between items-center">
              <p>
                <a href="https://demo.martvill.techvill.net/search-products?categories=babies--toys">
                  Babies &amp; Toys
                </a>
              </p>
              <h3>
                <a className="clicks rotate" href="#">
                  <svg
                    className=""
                    width={5}
                    height={9}
                    viewBox="0 0 5 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                      fill="#DFDFDF"
                    />
                  </svg>
                </a>
              </h3>
            </div>
            <ul className="mt-3">
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=feeding">
                      Feeding
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=baby--toddler-foods">
                          Baby &amp; Toddler Foods
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=milk-formula">
                          Milk Formula
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=diapering--potty">
                      Diapering &amp; Potty
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=cloth-diapers--accessories">
                          Cloth Diapers &amp; Accessories
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=diaper-bags">
                          Diaper Bags
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=wipes--holders">
                          Wipes &amp; Holders
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=disposable-diapers">
                          Disposable Diapers
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=baby-gear">
                      Baby Gear
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=baby-walkers">
                          Baby Walkers
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=backpacks--carriers">
                          Backpacks &amp; Carriers
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=strollers">
                          Strollers
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=swings-jumpers--bouncers">
                          Swings, Jumpers &amp; Bouncers
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=baby-personal-care">
                      Baby Personal Care
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=baby-bath">
                          Baby Bath
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=bathing-tubs--seats">
                          Bathing Tubs &amp; Seats
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=shampoo--conditioners">
                          Shampoo &amp; Conditioners
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=soaps-cleansers--bodywash">
                          Soaps, Cleansers &amp; Bodywash
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=clothing--accessories">
                      Clothing &amp; Accessories
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=girls-clothing">
                          Girls Clothing
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=girls-shoes">
                          Girls Shoes
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=boys-clothing">
                          Boys Clothing
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=maternity-wear">
                          Maternity Wear
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=new-born-unisex-zero---six-months">
                          New Born Unisex (Zero - Six months)
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=new-born-body-suits">
                          New Born Body Suits
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=new-born-sets--packs">
                          New Born Sets &amp; Packs
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=nursery">
                      Nursery
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=bathroom-safety">
                          Bathroom Safety
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=mattresses--bedding">
                          Mattresses &amp; Bedding
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=sanitizers">
                          Sanitizers
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=toys--games">
                      Toys &amp; Games
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=action-figures--collectibles">
                          Action Figures &amp; Collectibles
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=arts--crafts-for-kids">
                          Arts &amp; Crafts for Kids
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=ball-prit--accessories">
                          Ball Prit &amp; Accessories
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=block--building-toys">
                          Block &amp; Building Toys
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=doll--accessories">
                          Doll &amp; Accessories
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=dress-up--pretend-play">
                          Dress Up &amp; Pretend Play
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=electronic-toys">
                          Electronic toys
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=party-supplies">
                          Party Supplies
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=puzzle">
                          Puzzle
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=slime--squishy-toys">
                          Slime &amp; Squishy Toys
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=stuffed-toys">
                          Stuffed Toys
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=remote-control--vehicles">
                      Remote Control &amp; Vehicles
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=die-cast-vehicles">
                          Die-Cast Vehicles
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=rc-vehicles--batteries">
                          RC Vehicles &amp; Batteries
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=play-trains--railway-sets">
                          Play Trains &amp; Railway Sets
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=play-vehicles">
                          Play Vehicles
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=drones--accessories">
                          Drones &amp; Accessories
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=sport--outdoor-play">
                      Sport &amp; Outdoor Play
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=kids-bikes--accessories">
                          Kids Bikes &amp; Accessories
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=outdoor-toys">
                          Outdoor Toys
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=boxing">
                          Boxing
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=kids-tricycles">
                          Kids Tricycles
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=toys-sports">
                          Toys Sports
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=traditional-games">
                      Traditional Games
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=board-games">
                          Board Games
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=card-games">
                          Card Games
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=game-room-games">
                          Game Room Games
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=stuffed-toy">
                      Stuffed Toys
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <div className="flex justify-between items-center">
              <p>
                <a href="https://demo.martvill.techvill.net/search-products?categories=all-fashion">
                  Fashion
                </a>
              </p>
              <h3>
                <a className="clicks rotate" href="#">
                  <svg
                    className=""
                    width={5}
                    height={9}
                    viewBox="0 0 5 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                      fill="#DFDFDF"
                    />
                  </svg>
                </a>
              </h3>
            </div>
            <ul className="mt-3">
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=man-fashion">
                      Man Fashion
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=jackets--coats">
                          Jackets &amp; Coats
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=pant">
                          Pant
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=man-bags">
                          Bags
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=shoes-">
                          Shoes
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=accessories-">
                          Accessories
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=clothing">
                          Clothing
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=woman-fashion">
                      Woman Fashion
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=jackets---coats">
                          Jackets &amp; Coats
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=woman-pant">
                          Pant
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=woman-bags">
                          Bags
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=woman-shoes">
                          Shoes
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=woman-accessories">
                          Accessories
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=woman-clothing">
                          Clothing
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=kid-fashion">
                      Kid Fashion
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <div className="flex justify-between items-center">
              <p>
                <a href="https://demo.martvill.techvill.net/search-products?categories=watches--accessories">
                  Watches &amp; Accessories
                </a>
              </p>
              <h3>
                <a className="clicks rotate" href="#">
                  <svg
                    className=""
                    width={5}
                    height={9}
                    viewBox="0 0 5 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                      fill="#DFDFDF"
                    />
                  </svg>
                </a>
              </h3>
            </div>
            <ul className="mt-3">
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=mens-watch">
                      Men's Watch
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=casual">
                          Casual
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=business">
                          Business
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=fashion">
                          Fashion
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=sport">
                          Sport
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=womens-watch">
                      Women's Watch
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=casual-">
                          Casual
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=business-">
                          Business
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=fashion-">
                          Fashion-
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=womens-jewelleries">
                      Women's Jewelleries
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=rings">
                          Rings
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=necklaces">
                          Necklaces
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=pendants">
                          Pendants
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=earrings">
                          Earrings
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=jewellery-sets">
                          Jewellery Sets
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=bracelets">
                          Bracelets
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=mens-jewelleries">
                      Men's Jewelleries
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=rings-">
                          Rings
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=necklaces--pendants">
                          Necklaces &amp; Pendants
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=bracelets-">
                          Bracelets
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=sunglasses">
                      Sunglasses
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=men-sunglasses">
                          Men Sunglasses
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=women-sunglasses">
                          Women Sunglasses
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=kids-sunglasses">
                          Kids Sunglasses
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=eyeglasses">
                      Eyeglasses
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=men-eyeglasses">
                          Men Eyeglasses
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=women-eyeglasses">
                          Women Eyeglasses
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <div className="flex justify-between items-center">
              <p>
                <a href="https://demo.martvill.techvill.net/search-products?categories=sports--outdoor">
                  Sports &amp; Outdoor
                </a>
              </p>
              <h3>
                <a className="clicks rotate" href="#">
                  <svg
                    className=""
                    width={5}
                    height={9}
                    viewBox="0 0 5 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                      fill="#DFDFDF"
                    />
                  </svg>
                </a>
              </h3>
            </div>
            <ul className="mt-3">
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=cycling">
                      Cycling
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=bicycle">
                          Bicycle
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=bicycle-accessories">
                          Bicycle Accessories
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=boxing-martial-arts--mma">
                      Boxing, Martial Arts &amp; MMA
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=boxing-gloves">
                          Boxing Gloves
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=boxing-protective-gear">
                          Boxing Protective gear
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=punching-bags--accessories">
                          Punching Bags &amp; Accessories
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=men-shoes--clothing">
                      Men Shoes &amp; Clothing
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=clothing--">
                          Clothing
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=shoes">
                          Shoes
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=accessories">
                          Accessories
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=bags">
                          Bags
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=outdoor-recreation">
                      Outdoor Recreation
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=golf">
                          Golf
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=fishing">
                          Fishing
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=skateboards">
                          Skateboards
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=water-sports">
                          Water Sports
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=exercise--fitness">
                      Exercise &amp; Fitness
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=exercise-bikes">
                          Exercise Bikes
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=elliptical-trainers">
                          Elliptical Trainers
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=strength-training-equipment">
                          Strength Training Equipment
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=racket-sports">
                      Racket Sports
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=badminton">
                          Badminton
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=squash">
                          Squash
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=team-sports">
                      Team Sports
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=football">
                          Football
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=cricket">
                          Cricket
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=basketball">
                          Basketball
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=volleyball">
                          Volleyball
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=camping--hiking">
                      Camping &amp; Hiking
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=tents">
                          Tents
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=sleeping-bags">
                          Sleeping Bags
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=cooking-essentials">
                          Cooking Essentials
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=hiking-backpacks">
                          Hiking Backpacks
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <div className="flex justify-between items-center">
              <p>
                <a href="https://demo.martvill.techvill.net/search-products?categories=automotive--motorbike">
                  Automotive &amp; Motorbike
                </a>
              </p>
              <h3>
                <a className="clicks rotate" href="#">
                  <svg
                    className=""
                    width={5}
                    height={9}
                    viewBox="0 0 5 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                      fill="#DFDFDF"
                    />
                  </svg>
                </a>
              </h3>
            </div>
            <ul className="mt-3">
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=automobile">
                      Automobile
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=imported-cars">
                          Imported Cars
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=sedans">
                          Sedans
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=suvs">
                          SUVs
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=trucks">
                          Trucks
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=auto-oils--fluids">
                      Auto Oils &amp; Fluids
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=transmission-fluids">
                          Transmission Fluids
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=interior-accessories">
                      Interior Accessories
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=seat-covers--accessories">
                          Seat Covers &amp; Accessories
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=air-fresheners">
                          Air Fresheners
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=exterior-accessories">
                      Exterior Accessories
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=covers">
                          Covers
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=exterior-vehicle-care">
                      Exterior Vehicle Care
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=car-polishes--waxes">
                          Car Polishes &amp; Waxes
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=interior-vehicle-care">
                      Interior Vehicle Care
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=vacuums">
                          Vacuums
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=car-audio">
                      Car Audio
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=speakers">
                          Speakers
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=motorcycle">
                      Motorcycle
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=standard-bikes">
                          Standard Bikes
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=motorcycle-riding-gear">
                      Motorcycle Riding Gear
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=helmet">
                          Helmet
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=gloves">
                          Gloves
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=eyewear">
                          Eyewear
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <div className="flex justify-between items-center">
              <p>
                <a href="https://demo.martvill.techvill.net/search-products?categories=home-appliances">
                  Home Appliances
                </a>
              </p>
              <h3>
                <a className="clicks rotate" href="#">
                  <svg
                    className=""
                    width={5}
                    height={9}
                    viewBox="0 0 5 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                      fill="#DFDFDF"
                    />
                  </svg>
                </a>
              </h3>
            </div>
            <ul className="mt-3">
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=small-kitchen-appliances">
                      Small Kitchen Appliances
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
                <ul>
                  <li>
                    <div className="flex justify-between items-center">
                      <p>
                        <a href="https://demo.martvill.techvill.net/search-products?categories=food-preparation">
                          Food Preparation
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <div className="flex justify-between items-center">
              <p>
                <a href="https://demo.martvill.techvill.net/search-products?categories=digital-product">
                  Digital Product
                </a>
              </p>
              <h3>
                <a className="clicks rotate" href="#">
                  <svg
                    className=""
                    width={5}
                    height={9}
                    viewBox="0 0 5 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                      fill="#DFDFDF"
                    />
                  </svg>
                </a>
              </h3>
            </div>
            <ul className="mt-3">
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=html">
                      HTML
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=wordpress">
                      WordPress
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=magento">
                      Magento
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=drupal">
                      Drupal
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=android">
                      Android
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=apple">
                      Apple
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=windows">
                      Windows
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>
                    <a href="https://demo.martvill.techvill.net/search-products?categories=envato">
                      Envato
                    </a>
                  </p>
                  <h3>
                    <a className="clicks rotate" href="#">
                      <svg
                        className=""
                        width={5}
                        height={9}
                        viewBox="0 0 5 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.870679 3.60997e-07L-3.02758e-07 0.948839L3.25864 4.5L3.18147e-07 8.05116L0.87068 9L5 4.5L0.870679 3.60997e-07Z"
                          fill="#DFDFDF"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <div className="mt-5">
          <a className="flex items-center">
            <span className="dm-sans font-medium text-sm cursor-pointer uppercase">
              See All Categories
            </span>
            <svg
              className="ltr:ml-2.5 rtl:mr-2.5 neg-transition-scale"
              width={12}
              height={8}
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 4L10.7071 3.29289L11.4142 4L10.7071 4.70711L10 4ZM1 5C0.447715 5 0 4.55228 0 4C0 3.44772 0.447715 3 1 3V5ZM7.70711 0.292893L10.7071 3.29289L9.29289 4.70711L6.29289 1.70711L7.70711 0.292893ZM10.7071 4.70711L7.70711 7.70711L6.29289 6.29289L9.29289 3.29289L10.7071 4.70711ZM10 5H1V3H10V5Z"
                fill="#DFDFDF"
              />
            </svg>
          </a>
        </div>
      </div>
      <hr className="my-5 h-px border-t border-gray-600 mx-5" />
      <div className="mx-5 pb-7">
        <div className="flex items-center">
          <svg
            className="neg-transition-scale"
            width={14}
            height={15}
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.49627 1.4486C6.66013 1.21709 7.86651 1.33591 8.96285 1.79003C10.0592 2.24415 10.9962 3.01317 11.6555 3.99985C12.3148 4.98653 12.6667 6.14655 12.6667 7.33321C12.6667 8.51988 12.3148 9.6799 11.6555 10.6666C10.9962 11.6533 10.0592 12.4223 8.96285 12.8764C7.86651 13.3305 6.66013 13.4493 5.49627 13.2178C4.3324 12.9863 3.26332 12.4149 2.42422 11.5758L1.48143 12.5186C2.50699 13.5441 3.81365 14.2426 5.23615 14.5255C6.65865 14.8085 8.13312 14.6633 9.47309 14.1082C10.8131 13.5532 11.9583 12.6133 12.7641 11.4073C13.5699 10.2014 14 8.78359 14 7.33321C14 5.88284 13.5699 4.46504 12.7641 3.2591C11.9583 2.05316 10.8131 1.11324 9.47309 0.558211C8.13312 0.00317755 6.65866 -0.142045 5.23615 0.140909C3.81365 0.423862 2.50699 1.12228 1.48143 2.14785L2.42422 3.09064C3.26332 2.25154 4.3324 1.68011 5.49627 1.4486Z"
              fill="#DFDFDF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.51974 3.58344L5.4786 4.41635L7.27874 6.66651H0.665929C0.297745 6.66651 -0.000726121 6.96499 -0.000726121 7.33317C-0.000726121 7.70135 0.297745 7.99982 0.665929 7.99982H7.27874L5.4786 10.25L6.51974 11.0829L9.51953 7.33317L6.51974 3.58344Z"
              fill="#DFDFDF"
            />
          </svg>
          <p className="dm-sans font-medium text-sm open-login-modal ltr:ml-3 rtl:mr-3">
            Login
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</header>
  )
}

export default Header
