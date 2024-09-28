'use client'
import React from 'react'
import { Homehero } from '../../ui/home-hero'
import { PromotionalSection } from '../../ui/promotional-section'
import { FurnitureZone } from '../../ui/furniture-zone'
import { AppZone } from '../../ui/AppZone'
import { DigitalProduct } from '../../ui/digital-product'
import { Usp } from '../../ui/usp'
import { Coupon } from '../../ui/coupon'
import { FlashSales } from '../../ui/flash-sales'

export const Homepage: React.FC = () => {

  return (
    <main>
      <div className='container p-4 xl:px-5'>
        <Homehero />
        <section className='hidden lg:grid grid-cols-3 gap-5 layout-wrapper px-4 xl:px-0 md:my-12 my-10  '>
          <div className='col-span-2'>
            <Usp />
          </div>
          <Coupon />
        </section>
        <FlashSales />
        <PromotionalSection />
        <FurnitureZone />
        <AppZone />
        <DigitalProduct />
      </div>
    </main>
  )
}

