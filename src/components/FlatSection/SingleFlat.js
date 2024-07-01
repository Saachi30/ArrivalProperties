import React from 'react';
import './SingleFlat.css';

const SingleFlat = ({ house }) => {
  return (
    <div className="single-flat">
      <img src={house.image} alt={house.name} />
      
        <h3 className='flat-name'>{house.name}</h3>
        <div className="flat-details">
        <div className='location inner-sections'>
        {/* <i class="fa-sharp fa-solid fa-location-dot" style={{color: "#474748"}}></i> */}
        <b><p>Location: </p></b>
        <p>{house.address}</p>
        </div>
        <div className='bedroom inner-sections'>
        <b><p>Bedrooms: </p></b>
        <p>{house.bedrooms}</p>
        </div>
        <div className='bathroom inner-sections'>
        <b><p>Bathrooms: </p></b>
        <p>{house.bathrooms}</p>
        </div>
        
        <div className='area inner-sections'>
        <b><p>Property size:   </p></b>
        <p>{house.surface}</p>
        </div>
        <div className='price inner-sections'>
        <p><b>Price:  </b></p>
        <p>Rs. {house.price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleFlat;
