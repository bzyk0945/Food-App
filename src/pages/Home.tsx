import React from 'react'
import { HeroSection } from '../components/Home/HeroSection'
import { Delivery } from '../components/Home/Delivery'
import { WhyTastyTreat } from '../components/Home/WhyTastyTreat'
import { Testimonial } from '../components/Home/Testimonial'

export const Home: React.FC = () => {
  return (
    <main className='max-w-7xl mx-auto pt-20 px-6'>
      <HeroSection />
      <Delivery />
      <WhyTastyTreat />
      <Testimonial />
    </main>
  )
}

