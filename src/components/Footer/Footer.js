import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className='footer-section'>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>Arrival Properties</h3>
          <p className="footer-links">
            <a href="#" className="link-1">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </p>
          <p className="footer-company-name" >Arrival Properties © 2024</p>
        </div>
        <div className="footer-center">
        <div>
            <p><b>RERA No: A51800047925</b></p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>+91 9769605225</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:salvi.bhavya@gmail.com" style={{color:"#fff"}}>salvi.bhavya@gmail.com</a></p>
          </div>
          
          <div className="footer-icons" style={{color: "#fff"}}>
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="tel:+919769605225"><i class="fa-brands fa-whatsapp"></i></a>
            {/* <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a> */}
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-right">
          <div className='footer-location'>
            <i className="fa fa-map-marker"></i>
            <p><span></span>Malad West, Mumbai</p>
          </div>
          <div id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3" className='footer-map'>
            <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"></div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
