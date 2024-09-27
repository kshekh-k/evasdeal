import React from 'react'
import Homehero from '../../ui/home-hero'
import FlashSale from '../../ui/flash-sale'
import PromotionalSection from '../../ui/promotional-section'
import FurnitureZone from '../../ui/FurnitureZone'
import AppZone from '../../ui/AppZone'
import DigitalProduct from '../../ui/digital-product'

function Homepage() {
  return (
    <main>
      <div className='container p-4 xl:px-5'>
       <Homehero />
       <FlashSale />
      <PromotionalSection />
      <FurnitureZone />
      <AppZone />
      <DigitalProduct />
      </div>
    </main>
  )
}

export default Homepage
