import React from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './FlatDetails.css';
import { housesData } from '../../data'; // Assuming you have housesData defined somewhere

const FlatDetails = () => {
  const { id } = useParams();
  const house = housesData.find((house) => house.id === parseInt(id));

  if (!house) {
    return <div>Flat not found</div>;
  }

  const phoneNumber = "9769605225";

  return (
    <div className="flat-detail">
      <div className="detail-image">
        <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
          {house.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`${house.name} ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="detail-info">
        <h2>{house.name}</h2>
        <p className="detail-address">{house.address}</p>
        <p className="detail-text">{house.bedrooms} Bedrooms</p>
        <p className="detail-text">{house.bathrooms} Bathrooms</p>
        <p className="detail-text">Property size: {house.surface}</p>
        <p className="detail-text">Year Built: {house.year}</p>
        <p className="detail-price">Price: Rs. {house.price}</p>
        <p className="detail-description">Description: {house.description}</p>
        <div className="contact-buttons">
          <a href={`tel:${phoneNumber}`} className="contact-button call-button"><i class="fa-solid fa-phone" style={{color: "#ffffff"}}></i></a>
          <a href={`https://wa.me/${phoneNumber}`} className="contact-button message-button"><i class="fa-regular fa-comment-dots fa-lg" style={{color: "#ffffff"}}></i></a>
        </div>
      </div>
    </div>
  );
};

export default FlatDetails;
