import React from 'react'
import Carousel from './Carousel'
import './HomePage.css'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import Services from '../Services/Services'
import ReviewSection from '../ReviewSect/ReviewSection'
import Banner from '../Banner/Banner'
import FlatSection from '../FlatSection/FlatSection'
const HomePage = () => {
  return (
    <div>
      <div className='outerpg1'>
      
      <div className='carouselbox'>
      <Carousel/>
    </div>
    <div className='flatsectionouter'>
      <FlatSection/>
    </div>
    <div className='aboutbox2'>
      <About/>
    </div>
    <div className='servicesbox'>
      <Services />
      </div>
      <div className='bannerbox'>
        <Banner/>
      </div>
      <div className='aboutbox1'>
      <About/>
    </div>

    <div>
      <ReviewSection/>
    </div>
    </div>
    </div>
  )
}

export default HomePage
