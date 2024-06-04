import React from 'react';
import { useParams } from 'react-router-dom';
import './FlatDetails.css';
import { housesData } from '../../data'; // Assuming you have housesData defined somewhere

const FlatDetails = () => {
  const { id } = useParams();
  const house = housesData.find((house) => house.id === parseInt(id));

  if (!house) {
    return <div>Flat not found</div>;
  }

  return (
    <div className="flat-detail">
      <div className="detail-image">
        <img src={house.imageLg} alt={house.name} />
      </div>
      <div className="detail-info">
        <h2>{house.name}</h2>
        <p>{house.address}</p>
        <p>{house.bedrooms} Bedrooms</p>
        <p>{house.bathrooms} Bathrooms</p>
        <p>{house.surface}</p>
        <p>Year Built: {house.year}</p>
        <p>Price: Rs. {house.price}</p>
        <p>Description: {house.description}</p>
      </div>
    </div>
  );
};

export default FlatDetails;
