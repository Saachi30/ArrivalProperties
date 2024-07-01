// import house images
import House1 from './assets/images/houses/house1.png';
import House2 from './assets/images/houses/house2.png';
import House3 from './assets/images/houses/house3.png';
import House4 from './assets/images/houses/house4.png';

// import house large images
import House1Lg from './assets/images/houses/house1lg.png';
import House2Lg from './assets/images/houses/house2lg.png';
import House3Lg from './assets/images/houses/house3lg.png';
import House4Lg from './assets/images/houses/house4lg.png';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. ',
    image: House1,
    imageLg: House1Lg,
    images: [House1Lg, House2Lg, House3Lg], // Add multiple images here
    country: 'United States',
    address: 'Andheri West',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '110000',
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. ',
    image: House2,
    imageLg: House2Lg,
    images: [House2Lg, House3Lg, House4Lg], // Add multiple images here
    country: 'Canada',
    address: 'Malad West',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '140000',
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. ',
    image: House3,
    imageLg: House3Lg,
    images: [House3Lg, House4Lg, House1Lg], // Add multiple images here
    country: 'United States',
    address: 'Borivali East',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '170000',
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur.',
    image: House4,
    imageLg: House4Lg,
    images: [House4Lg, House1Lg, House2Lg], // Add multiple images here
    country: 'Canada',
    address: 'Bandra West',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '200000',
  },
];
