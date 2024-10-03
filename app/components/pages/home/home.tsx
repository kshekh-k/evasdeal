'use client'
import React from 'react'
import { Homehero } from '../../ui/home-hero'
import { PromotionalSection } from '../../ui/promotional-section'
import { FurnitureZone } from '../../ui/furniture-zone'
import { AppZone } from '../../ui/app-zone'
import { DigitalProduct } from '../../ui/digital-product'
import { Usp } from '../../ui/usp'
import { Coupon } from '../../ui/coupon'
import { FlashSales } from '../../ui/flash-sales'
import { Topcategories } from '../../ui/top-categories-of-month'
import { Weekdeals } from '../../ui/week-deals'
import {TopBrands} from '../../ui/top-brands'
import Layout from '../../layout/layout'

export const Homepage: React.FC = () => {

  return (
    <>
       <Layout>
          <Homehero />
          <section className='hidden lg:grid grid-cols-3 gap-5 layout-wrapper px-4 xl:px-0 md:my-12 my-10  '>
            <div className='col-span-2'>
              <Usp />
            </div>
            <Coupon />
          </section>
          <Topcategories />
          <Weekdeals />
          <FlashSales />
          <PromotionalSection />
          <FurnitureZone />
          <AppZone />
          <DigitalProduct />
          <TopBrands />
        </Layout>
    </>
  )
}

