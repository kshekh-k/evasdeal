'use client'
import Link from 'next/link'
import React from 'react'

import Image from 'next/image';
import { Beststaricon, Burgericon, Compareicon, Emailicon, Globeicon, Phoneicon } from '@/app/icons';
import useViewportWidth from '../../hooks/use-viewport-width';
import { Mobilesidebar } from './mobile-sidebar';
interface topbar {
  children: React.ReactNode;
}
export const Topbar: React.FC<topbar> = ({ children }) => {
  const viewportWidth = useViewportWidth();
  const [mobileSidebarPanel, setMobileSidebarPanel] = React.useState(false)
  React.useEffect(() => {
    if (mobileSidebarPanel) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }
    return () => {
        document.body.classList.remove('overflow-hidden');
    };
}, [mobileSidebarPanel]);

  return (<>
    <div className="bg-primary">
      <div className="container px-4 xl:px-5 pt-2p font-medium text-base flex justify-between items-center h-16 md:h-10 ">
      {viewportWidth <= 767 &&
        <div className="flex items-center flex-1">
          <button className='text-white' onClick={() => setMobileSidebarPanel(!mobileSidebarPanel)}>
            <Burgericon className='size-5' />
          </button>

          <div className="ml-5 bg-white rounded-md py-1 px-2 ">
            <Link href="/">
              <Image width={180} height={80} className="h-8 w-auto" src="/images/logo.png" alt="logo" />
            </Link>
          </div>
        </div>
}
        {viewportWidth >= 768 ?
          <>
            <div className="flex items-center">
              <ul className="flex flex-col sm:flex-row text-xs gap-4 sm:gap-10 font-dm">
                <li>
                  <Link href="#" className="w-fill flex gap-1 items-center" >
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
          </> :
          <ul className="flex -mt-1.5 space-x-3 lg:space-x-5">
            {children}
          </ul>
        }

      </div>

    </div>
    {/* Cart Side Panel */}
    {mobileSidebarPanel &&
      <Mobilesidebar onClick={() => setMobileSidebarPanel(!mobileSidebarPanel)} />
    }




  </>
  )
}

