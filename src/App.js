import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import ReviewSection from './components/ReviewSect/ReviewSection';
import FlatDetails from './components/FlatSection/FlatDetails';

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<ReviewSection />} />
          <Route path='/flat-detail/:id' element={<FlatDetails/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
    
      {/* <div className='aboutsect'>
      <About/>
    </div> */}
    <div>
      <Footer/>
      </div>
      </>
  );
}

export default App;
