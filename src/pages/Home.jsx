import React from 'react'
import RestaurantHero from "./restaurant-hero"
import PerfectPlaceSection from "./perfect-place-section"
import WhyChooseUsSection from "./why-choose-us-section"
import Header from "../components/Header"
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
        <Header />
        <RestaurantHero />
        <PerfectPlaceSection />
        <WhyChooseUsSection />
        <Footer />
    </div>
  )
}

export default Home