import React from 'react'
import { Navbar } from './nav'
import { Hero, Logo } from './landing'
import HeroSection from './landing/algorithm'

export function Homepage() {
  return (
    <div >
        <div className='bg-gradient-to-b from-darkBlue to-lightBlue min-h-screen '>
            <Navbar />
            <Hero />
            <Logo />
            <HeroSection/>
        </div>
    </div>
  )
}
