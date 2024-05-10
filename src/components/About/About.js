import React from 'react'
import './About.css'
import Aos from "aos";
import 'aos/dist/aos.css';

const About = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);
  
  return (
    <div className='outerabout'>
      <h2 data-aos="fade-up" >About Us</h2>
      <div className='about-section' id='firstabout'>
        <div className='leftabout'>
          <p data-aos="fade-up">Welcome to <b>Arrival Properties</b>, your gateway to exceptional real estate experiences. At Arrival, we believe on more than just transactions; we believe in transformations. With a dedication to integrity, innovation, and impeccable service, we're here to redefine your expectations of what a real estate company can be.</p>
        </div>
        <div className='rightabout'>
          <img src='https://2.bp.blogspot.com/-mNmCVZPP5gg/UzwifQ0HleI/AAAAAAAABkg/6vgd7YIQobE/s1600/bandra+worli+sea+link+night.jpg' data-aos="fade-up" alt='Real estate'></img>
        </div>
      </div>
      <div className='about-section' id='secondabout'>
        <div className='leftabout'>
          <img src='https://www.shutterstock.com/image-photo/urban-architecture-office-building-business-600nw-1339962440.jpg' data-aos="fade-up" alt='Office building'></img>
        </div>
        <div className='rightabout'>
          <p data-aos="fade-up">Our team of seasoned professionals brings a wealth of expertise and a deep understanding of the market to every interaction. Whether you are searching for your dream home, seeking investment opportunities, or looking to sell, our personalized approach ensures that your unique needs are not only met but exceeded.</p>
        </div>
      </div>
      <div className='about-section' id='thirdabout'>
        <div className='leftabout'>
          <p data-aos="fade-up">Driven by a passion for excellence, we're committed to delivering results that inspire confidence and build lasting relationships. With Arrival Properties, your journey to finding the perfect property begins here. Welcome to a new era of real estate!</p>
        </div>
        <div className='rightabout'>
          <img src='https://image1.masterfile.com/getImage/NjExOS0wODcyNDkzOWVuLjAwMDAwMDAw=ALpETW/6119-08724939en_Masterfile.jpg' data-aos="fade-up" alt='Cityscape'></img>
        </div>
      </div>
    </div>
   
  )
}

export default About;
