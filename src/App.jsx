import React, { useEffect, useState } from 'react'

const UserTable = React.lazy(()=>import('./Components/UserTable'))
const HeroSection = React.lazy(()=>import('./Components/HeroSection'))
const ServiceSection = React.lazy(()=>import('./Components/ServiceSection'))
const PricingSection = React.lazy(()=>import('./Components/PricingSection'))
const ContactSection = React.lazy(()=>import('./Components/ContactSection'))

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