import React, { useEffect, useState } from 'react'
import HeroSection from './Components/HeroSection'
import ServiceSection from './Components/ServiceSection'
import PricingSection from './Components/PricingSection'
import ContactSection from './Components/ContactSection'
import UserTable from './Components/UserTable'

const App = () => {



  return (
    <>
      <HeroSection />
      <ServiceSection />
      <PricingSection />
      <ContactSection />
      <UserTable />
    </>
  )
}

export default App