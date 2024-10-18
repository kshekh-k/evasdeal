'use client'
import React from 'react'
import useSwr from "swr";
import { Categories } from "@/types"; 
import Link from 'next/link';
function Relatedcategories() {
    const [showless, setShowless] = React.useState(5) 
    // const fetcher = (url: string) => fetch(url).then((res) => res.json());
    // const { data, error } = useSwr('/api/categories', fetcher);

    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error } = useSwr('/api/categories', fetcher);



    const toggleNumber = () => {
        setShowless((prevNumber) => (prevNumber === data.length ? 5 : data.length));
    };
 
   
    return (
        <div className='space-y-2 divide-y divide-gray-300'>
            <h3 className='text-base font-dm font-semibold text-gray-500'>Related Categories</h3>
            <ul className='space-y-1 pt-2'>
                {data.slice(0, showless).map((item:Categories, index:any) =>
                    <li key={index}>
                        <Link href={`/${item.url}`} className='py-1 w-full text-left font-medium font-dm text-sm text-gray-500 hover:text-primary ease-in-out duration-300'>{item.name}</Link>
                    </li>
                )}
                {data.length > 5 &&
                    <li className='flex pt-2'><button onClick={toggleNumber} className={`p-2 w-full rounded  text-center font-semibold font-dm text-sm  ease-in-out duration-300 ${showless > 5 ? 'text-primary bg-primary/5' : 'text-gray-700 hover:text-primary bg-black/5'}`}>See {showless > 5 ? 'Less' : 'All'}</button></li>
                }
            </ul>
        </div>
    )
}

export default Relatedcategories
