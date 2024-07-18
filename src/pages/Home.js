import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import ServicesSection from './Services'
import GameDevelopmentProcess from '../components/Home/GameDevelopment'
import TestimonialsSection from '../components/Home/Testimonial'
import FooterSection from '../components/Home/FooterSection'
import SecondBanner from '../components/Home/SecondBanner'

function Home() {
  return (
    <div>
      <HeroSection/>
      <ServicesSection/>
      <SecondBanner/>
      <GameDevelopmentProcess/>
      <TestimonialsSection/>
      <FooterSection/>
    </div>
  )
}

export default Home