'use client'
export default Pricerange
import React from 'react'
import { Slider } from '../../ui/slider'



type SliderProps = React.ComponentProps<typeof Slider>

export function Pricerange({ className, ...props }: SliderProps) {
    const [values, setValues] = React.useState([0, 2000])
    return (
        <>
            <div className='space-y-4 divide-y divide-gray-300'>
                <h3 className='text-base font-dm font-semibold text-gray-500'>Price Range</h3>
                <div className='space-y-1 pt-6'>
                    <Slider
                        defaultValue={values}
                        max={5000}
                        step={100}
                        onValueChange={(values) => setValues(values)}
                        className={`${className}`}
                        {...props}
                    />
                    <div className="flex justify-between pt-2 leading-normal">
                        <span className='text-gray-600 font-dm font-semibold'>{(values[0])}</span>
                        <span className='text-gray-600 font-dm font-semibold'>{(values[1])}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
