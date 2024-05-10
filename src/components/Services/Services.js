import React, { useState } from "react";
import serviceapi from "./serviceApi";
import './Services.css'
import Aos from "aos";
import 'aos/dist/aos.css';

const Services = () => {
    React.useEffect(() => {
        Aos.init({
          duration: 800,
          easing: 'ease-in-out',
        });
      }, []);
  const [serviceData, setServiceData] = useState(serviceapi);
 
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center" >
            Our Services 
          </h1>
          <div className="row">
            {serviceData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div
                    className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                    key={id} data-aos="fade-up">
                    
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;