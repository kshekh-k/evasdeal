'use client'
import Link from 'next/link'
import React from 'react'
 
import Image from 'next/image';
import { Beststaricon, Burgericon, Compareicon, Emailicon, Globeicon, Phoneicon } from '@/app/icons';
export const Topbar: React.FC = () => {
 
  return (
    <div className="bg-primary">
      <div className="container px-4 xl:px-5 pt-2p font-medium text-base flex justify-between items-center h-16 md:h-10 ">
        <div className="flex items-center">
          <div style={{ color: "#2c2c2c" }} className="hidden md:block">
            <ul className="flex flex-col sm:flex-row text-xs gap-4 sm:gap-10 font-dm">
              <li>
                <Link href="#"  className="w-fill flex gap-1 items-center" >
                  <Phoneicon className="size-3" />
                  <span className="-mt-0.5">
                    +12013828902
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" className="w-fill flex gap-1 items-center">
                  <Emailicon className="size-3" />
                  <span className="-mt-0.5">
                    admin@techvill.net
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <Burgericon className='size-5' />
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
                  <Beststaricon className="size-4" />
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
                  <Compareicon className="size-4" />
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
                  <Globeicon className="size-4" />
                </span>
                
              </button>
            </ul>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

 