import React from 'react';
import Slider from 'react-slick';
import './Landing.css';

const Landing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change speed as needed
    fade: true, // This gives a fade effect between slides
  };

  const slides = [
    {
      text: "Medplus Health",
      image: "https://res.cloudinary.com/dws2bgxg4/image/upload/v1717643334/woman-2141808_1280_uwt6zj.jpg",
    },
    {
      text: "Bridging Healthcare",
      image: "https://res.cloudinary.com/dws2bgxg4/image/upload/v1715665859/snnzskf6dfltgo8aptze.jpg",
    },
    {
      text: "Connect",
      image: "https://res.cloudinary.com/dws2bgxg4/image/upload/v1714993048/image2_l4qa43.jpg",
    },
    // Add more slides as needed
  ];

  return (
    <Slider {...settings} className="slider-container h-screen">
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.image} alt={slide.text} className="slider-image" />
          <div className="text-overlay">
            <h1 className="home-title">{slide.text}</h1>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Landing;
