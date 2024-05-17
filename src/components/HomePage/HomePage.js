import React from 'react'
import Carousel from './Carousel'
import './HomePage.css'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import Services from '../Services/Services'
import ReviewSection from '../ReviewSect/ReviewSection'
import Banner from '../Banner/Banner'
const HomePage = () => {
  return (
    <div>
      <div className='outerpg1'>
      
      <div className='carouselbox'>
      <Carousel/>
    </div>
    
    <div>
      <Services />
      </div>
      <div>
        <Banner/>
      </div>
      <div>
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
