'use client'
import React from 'react'
import Filters from './filters'
import { Productcard } from '../../ui/product-card'
import Sorting from './sorting'
import { Gridicon, Listicon } from '@/app/icons'
import { Productlistviewcard } from '../../ui/product-listview-card'

function Shopcomponent() {
    const [view, setView] = React.useState(0)
    return (
        <div className='grid grid-cols-12 gap-5 pt-3'>
            <div className='col-span-3'>
                <Filters />
            </div>
            <div className='col-span-9 flex flex-col gap-5'>
                <div className='flex justify-between gap-4'>
                    <h3 className='text-xl text-gray-900'>179 products found</h3>
                    <div className="flex gap-2 items-center">
                        <div className='w-44'>
                            <Sorting />
                        </div>
                        <select className='border border-gray-300 py-1.5 px-2 w-14 text-sm text-gray-600 font-dm font-medium outline-none focus:ring-0 focus:border-primary appearance-none'>
                            <option>12</option>
                            <option>24</option>
                            <option>48</option>
                        </select>
                        <div className='flex gap-1'>
                            <button onClick={() => setView(0)} className={`border border-gray-300 p-2 flex justify-center items-center ease-in-out duration-200 ${view == 0 ? 'text-primary border-primary' : 'text-gray-400 hover:text-primary hover:border-primary'}`}><Gridicon className="size-4" /></button>
                            <button onClick={() => setView(1)} className={`border border-gray-300 p-2 flex justify-center items-center ease-in-out duration-200 ${view == 1 ? 'text-primary border-primary' : 'text-gray-400 hover:text-primary hover:border-primary'}`}><Listicon className="size-4" /></button>
                        </div>
                    </div>
                </div>
                {view == 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5 md:mt-0">
                        <Productcard rating={3.5} slider={['/images/product.png', '/images/product.png', '/images/product.png', '/images/product.png', '/images/product.png', ]} categoryName='Home Appliances' thumb="/images/product-1.webp" productName="Waist straight Slouchy jeans" priceRange={true} minimum={40} maximum={100} discription={'Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.'}  />
                    </div>
                ) : (
                    <div className='flex flex-col gap-5'>
                        <Productlistviewcard rating={3.5} slider={['/images/product.png', '/images/product.png', '/images/product.png', '/images/product.png', '/images/product.png', ]} categoryName='Home Appliances' thumb="/images/product-1.webp" productName="Waist straight Slouchy jeans" priceRange={true} minimum={40} maximum={100} discription={'Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.'} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Shopcomponent
