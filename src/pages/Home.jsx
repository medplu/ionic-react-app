import React from 'react';
import './Landing.css';
import { IonButton } from '@ionic/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="page-container">
      <div className="home-container">
        <img 
          src='https://res.cloudinary.com/dws2bgxg4/image/upload/t_logo/v1717643334/woman-2141808_1280_uwt6zj.png' 
          alt='Background' 
          className='background-image'
        />
        <Slider {...settings} className="text-overlay">
          <div>
            <h1 className="home-title">Medplus Health</h1>
          </div>
          <div>
            <h1 className="home-title">Briding Healthcare</h1>
          </div>
          <div>
            <h1 className="home-title">Connect</h1>
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
      <IonButton routerLink="/patients" className="home-button orange-button">Get Started</IonButton>
    </div>
  );
}

export default Home;