import React from 'react'
import './Banner.css'
import Aos from "aos";
import 'aos/dist/aos.css';
const Banner = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <>
      <div className='outerbanner'>
        <div className='leftbanner'>
        <div>
            <h1 data-aos="fade-in">Redevelopment</h1>
            <p data-aos="fade-in">Transform spaces innovatively and sustainably with our in-house developer.</p>
          </div>
          <div>
            <h1 data-aos="fade-in">Project Management Consultancy</h1>
            <p data-aos="fade-in">We plan, execute, monitor, and close projects efficiently.</p>
          </div>
          

        </div>
        <div className='rightbanner'>
          <img src='https://vrcgroup.in/wp-content/uploads/2023/09/civil-construction-1.jpg' data-aos="fade-in"></img>
        </div>
      </div>
    </>
  )
}

export default Banner
