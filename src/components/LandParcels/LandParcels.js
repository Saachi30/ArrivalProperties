import React from 'react';
import './LandParcels.css'
import MapImage from '../../assets/images/landparcels.png'
import Aos from "aos";
import 'aos/dist/aos.css';
const LandParcels = () => {
    React.useEffect(() => {
        Aos.init({
          duration: 800,
          easing: 'ease-in-out',
        });
      }, []);
  return (
    
    <div className="land-parcel-container">
    <h1 className='resp-h'>Land Parcels</h1>
      <div className="content-image" data-aos="fade-in">
        <img 
          className="map-image" 
          src={MapImage}
          alt="Land Parcels map"
        />
       
      </div>
      <div className="text-landparcel" data-aos="fade-in">
      <h1>Land Parcels</h1>
          <p>Available at Prime Locations like <strong>Malabar Hills, Juhu, Kanjurmarg</strong></p>
        </div>  
      
      
    </div>
  )
}

export default LandParcels
