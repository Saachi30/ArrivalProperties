import React from 'react';
import { Link } from 'react-router-dom';
import './FlatSection.css';
import SingleFlat from './SingleFlat';
import { housesData } from '../../data.js'; // Assuming you have housesData defined somewhere

const FlatSection = () => {
  return (
    <div className="flat-section">
      <h2 style={{margin:"2rem 0rem", textAlign:"center"}}>Available Flats</h2>
      <div className="flat-list">
        {housesData.map((house) => (
          <Link to={`/flat-detail/${house.id}`} key={house.id} style={{textDecoration:"none"}}>
            <SingleFlat house={house}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FlatSection;
