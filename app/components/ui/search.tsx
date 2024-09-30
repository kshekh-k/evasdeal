'use client'
import React from 'react' 
import { Adjustmenticon, Searchicon } from '@/app/icons';
interface Searches {
  thumb?: string[],
  productName?: string,
  currentPrice?: string,
  regularPrice?: string,

}
export const Search: React.FC<Searches> = () => {
  return (
    <>
    <div className="md:w-46% w-full ml-32">
    <form
      method="GET"
      action=""
    >
      <div className="relative bg-white ">
        <input
          type="search"
          name="keyword"
          placeholder="Type your product name.."
          defaultValue=""
          id="itemSearch"
          className="bg-transparent h-10 w-full text-sm focus:outline-none outline-none px-12 rounded border border-gray-300 focus:border-primary ease-in-out duration-200"
          autoComplete="off"
        />
        
        <button
          type="submit"
          className="absolute inset-y-0 border-gray-300 border-r left-0 w-10 flex justify-center items-center "
        > 
        <Searchicon className='size-4' />
        </button>
        <button
          type="submit"
          className="absolute inset-y-0 right-0 w-10 flex justify-center items-center hover:text-primary ease-in-out duration-200"
        >
          <Adjustmenticon className='size-4' />
        </button>
      </div>
    </form>
  </div>
  </>
  )
}

 
