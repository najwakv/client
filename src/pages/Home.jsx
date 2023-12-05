import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import Programs from '../components/Programs/Programs'
import Champions from '../components/Champions/Champions'
import Offer from '../components/Offer/Offer'

const Home = () => {
  return (
    <>
    <Offer/>
    <Header/>
    <Hero/>
    <Programs/>
    <Champions/>
    <Footer/>
    </>
  )
}

export default Home