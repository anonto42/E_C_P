import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NexCollections from '../components/NewCollections/NexCollections'
import NexsLetter from '../components/NexsLetter/NexsLetter'
import Footer from '../components/Footer/Footer'
import ShopCat from './ShopCat'

const Shonp = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NexCollections/>
      <NexsLetter/>
      {/* <ShopCat/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default Shonp