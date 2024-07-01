import React from 'react';
import './OfficeSpace.css';
import Aos from "aos";
import 'aos/dist/aos.css';
const OfficeSpace = () => {
    React.useEffect(() => {
        Aos.init({
          duration: 800,
          easing: 'ease-in-out',
        });
      }, []);
  return (
    <div className="office-space-container">
      {/* <i class="fa-solid fa-location-dot" style={{color: "#e61405", margin:"0 0.6rem"}}></i> */}
      <div className="text" data-aos="fade-in">
      <h1>Premium Office Spaces</h1>
          <p>Available at <strong>Andheri </strong>and <strong> Vile Parle</strong></p>
        </div>
      <div className="content-image" data-aos="fade-in">
        <img 
          className="office-image" 
          src="https://media.istockphoto.com/id/1410270664/photo/modern-style-office-with-exposed-concrete-floor-and-a-lot-of-plants.jpg?s=612x612&w=0&k=20&c=lBivR3vIWH4dnb6MUNkQtQsIisaUEnzl2f6Ozyr-Jis="
          alt="Modern Office Space"
        />
       
      </div>
    </div>
  );
}

export default OfficeSpace;
