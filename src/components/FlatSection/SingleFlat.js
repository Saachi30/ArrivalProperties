import React from 'react';
import './SingleFlat.css';

const SingleFlat = ({ house }) => {
  return (
    <div className="single-flat">
      <img src={house.image} alt={house.name} />
      <div className="flat-details">
        <h3>{house.name}</h3>
        <p>{house.address}</p>
        <p>{house.bedrooms} Bedrooms</p>
        <p>{house.bathrooms} Bathrooms</p>
        <p>{house.surface}</p>
        <p>Price: Rs. {house.price}</p>
      </div>
    </div>
  );
};

export default SingleFlat;
