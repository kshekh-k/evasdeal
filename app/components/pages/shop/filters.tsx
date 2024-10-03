import { Crossicon } from '@/app/icons'
import React from 'react'
import Relatedcategories from './related-categories'
import Pricerange from './price-range'
import Colors from './colors'
import Checkfilters from './check-filters'
import Ratingsasign from '../../ui/ratings-asign'
const b2b = [
    {
        id:1,
        label:'B2B Products Only',
        name:'B2B'
    }
]
const impedance = [
    {
        id:1,
        label:'32 Ω',
        name:'omega'
    }
]
const powerOutput = [
    {
        id:1,
        label:'Headphone Battery Capacity: 40mAh',
        name:'powerOutput'
    },
    {
        id:2,
        label:'Charging Box Battery Capacity: 300mAh',
        name:'powerOutput'
    },
]
const connectionType = [
    {
        id:1,
        label:'Bluetooth Version: V5.0',
        name:'connectionType'
    },
    
]
const duration = [
    {
        id:1,
        label:'12h long battery life',
        name:'duration'
    },
    {
        id:2,
        label:'with charging box',
        name:'duration'
    },
    
]
const size = [
 {
        id:1,
        label:'S',
        name:'size'
    },
    {
        id:2,
        label:'M',
        name:'size'
    },
    {
        id:3,
        label:'L',
        name:'size'
    },
    {
        id:4,
        label:'xl',
        name:'size'
    },
    {
        id:5,
        label:'xxl',
        name:'size'
    },
    {
        id:6,
        label:'fat',
        name:'size'
    },
    
]
function Filters() {
 
    return (
        <div className='border border-gray-300 rounded-md p-4 flex flex-col gap-7 '>
            <div className='flex justify-between items-center'>
                <h2 className='font-dm font-semibold leading-none text-lg text-gray-900 uppercase'>Filters</h2>
                <button className="flex items-center justify-center gap-1 ml-2 py-2 text-sm focus:outline-none text-gray-500 hover:text-red-600 ease-in-out duration-200">Clear All <Crossicon className="size-2" /></button>
            </div>
            <Relatedcategories />
            <Pricerange className="w-full" />
            <Checkfilters title="B2B" list={b2b} />
            <Colors />
            <Checkfilters title="Impedance" list={impedance} />
            <Checkfilters title="Power Output" list={powerOutput} />
            <Checkfilters title="Connection Type" list={connectionType} />
            <Checkfilters title="Size" list={size} />           
            <Ratingsasign />
        </div>
    )
}

export default Filters
