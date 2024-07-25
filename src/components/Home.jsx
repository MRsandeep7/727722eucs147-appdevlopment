import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import back from '../Asserts/images/back.jpg';
import jordan from '../Asserts/images/jordan-wozniak-xP_AGmeEa6s-unsplash.jpg';
import sebastien from '../Asserts/images/sebastien-gabriel--IMlv9Jlb24-unsplash.jpg';
import '../Asserts/css/Home.css'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navi=useNavigate();
  return (
    <div className='home'>
       <Navbar/>
      <button type='submit' className='hi' onClick={()=>{navi('/chad')}}>shopnow</button>
      
    </div>
  )
}

export default Home;
