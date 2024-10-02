import React from 'react'
import Filters from './filters'
import { Productcard } from '../../ui/product-card'

function Shopcomponent() {
    return (
        <div className='grid grid-cols-12 gap-5 pt-3'>
            <div className='col-span-3'>
                <Filters />
            </div>
            <div className='col-span-9 flex flex-col gap-5'>
        <div className='flex justify-between gap-4'>
            <h3 className='text-xl text-gray-900'>179 products found</h3>
        </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5 md:mt-0">
                <Productcard thumb="/images/product-1.webp" productName="Waist straight Slouchy jeans" currentPrice="$40" regularPrice="$60" />
                </div>
            </div>
        </div>
    )
}

export default Shopcomponent
