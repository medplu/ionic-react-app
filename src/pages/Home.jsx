import React from 'react';
import './Landing.css';
import { IonButton } from '@ionic/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//  replace './logo.png' with the path to your logo image
const logoUrl = 'https://example.com/path/to/logo.png';
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
    <div className="home-container">
     <img 
        src={logoUrl} 
        alt='logo' 
        className="home-logo"
      />
      <Slider {...settings} className="home-slider">
        <div>
          <h1 className="home-title">Medplus Health</h1>
        </div>
        <div>
          <h1 className="home-title">Slide 2</h1>
        </div>
        <div>
          <h1 className="home-title">Slide 3</h1>
        </div>
        {/* Add more slides as needed */}
      </Slider>
      <IonButton routerLink="/patients" className="home-button orange-button">Get Started</IonButton>
    </div>
  );
}

export default Home;