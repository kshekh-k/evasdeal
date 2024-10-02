'use client'
import React from 'react'


function Checkfilters({ title, list }: any) {
    const [showless, setShowless] = React.useState(false)
    return (
        <div className='space-y-2 divide-y divide-gray-300'>
            <h3 className='text-base font-dm font-semibold text-gray-500'>{title}</h3>
            <ul className='space-y-2 pt-4'>
                {showless ? (
                    <>
                        {list.map((item: any, index: any) =>
                            <li key={index} className='flex gap-3 items-center relative'>
                                <input id={`item-${item.name}-${item.id}`} name={`${item.name}-${item.id}`} className="md:-mt-0.5 outline-none ring-0 focus:ring-0 size-4 border text-primary border-gray-300 cursor-pointer" type="checkbox" />
                                <label className="text-sm font-medium font-dm cursor-pointer text-gray-500 hover:text-primary ease-in-out duration-300" htmlFor={`item-${item.name}-${item.id}`} >
                                    {item.label}
                                </label>
                            </li>
                        )}
                    </>
                ) : (
                    <>
                        {list.slice(0, 5).map((item: any, index: any) =>
                            <li key={index} className='flex gap-3 items-center relative'>
                                <input id={`item-${item.name}-${item.id}`} name={`${item.name}-${item.id}`}  className="md:-mt-0.5 outline-none ring-0 focus:ring-0 size-4 border text-primary border-gray-300 cursor-pointer" type="checkbox" />
                                <label className="text-sm font-medium font-dm cursor-pointer text-gray-500 hover:text-primary ease-in-out duration-300" htmlFor={`item-${item.name}-${item.id}`}  >
                                    {item.label}
                                </label>
                            </li>
                        )}
                    </>
                )}
                {list.length > 5 &&
                    <li><button onClick={() => setShowless(!showless)} className='py-1 w-full text-left font-semibold font-dm text-sm text-gray-700 hover:text-primary ease-in-out duration-300'>See {showless ? 'Less' : 'All'}</button></li>
                }
            </ul>

        </div>
    )
}

export default Checkfilters
