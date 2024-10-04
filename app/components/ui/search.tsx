'use client'
import React from 'react'
import { Adjustmenticon, Searchicon } from '@/app/icons';
import Input from './input';
interface Searches {
  thumb?: string[],
  productName?: string,
  currentPrice?: string,
  regularPrice?: string,

}
export const Search: React.FC<Searches> = () => {
  return (
    <>
     
        <form
          method="GET"
          action=""
        >
          <div className="relative bg-white ">
            <Input type="search" name="keyword" placeholder="Type your product name.." className='px-14 !py-2' Icon={Searchicon} iconClass='left-0 after:!h-6' />
            <div className='absolute inset-y-0 right-0 w-14 flex items-stretch p-1'>
              <button
                type="submit"
                className=" bg-white w-full rounded flex justify-center items-center text-gray-600 hover:bg-primary hover:text-white ease-in-out duration-200"
              >
                <Adjustmenticon className='size-4' />
              </button>
            </div>
          </div>
        </form>
      
    </>
  )
}


