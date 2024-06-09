import React from "react";
import { IonButton, IonIcon, IonText, IonSelect, IonSelectOption } from "@ionic/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "@ionic/react/css/core.css";
import "./Landing.css";
import { arrowForward , languageOutline  } from "ionicons/icons";
import { useHistory } from 'react-router-dom';

const Hero = () => {
  const history = useHistory();
  const [showButton, setShowButton] = React.useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    fade: true,
    cssEase: "linear",
    
  };
  const handleButtonClick = () => {
    history.push('/welcome'); // replace '/login' with the path to your login page
  };

  const slidesData = [
    {
      title: "Bridging Health",
      subtitle: "Connect, Learn Communicate",
      image: "https://res.cloudinary.com/dws2bgxg4/image/upload/v1715665859/snnzskf6dfltgo8aptze.jpg"
    },
    {
      title: "Schedule and Manage Appointments",
      subtitle: "We Provide the best tools for you to manage your appointments and schedules",
      image: "https://res.cloudinary.com/dws2bgxg4/image/upload/v1717643334/woman-2141808_1280_uwt6zj.jpg"
    },
    {
      title: "Get the best Health Care",
      subtitle: "We provide the best health care services",
      image: "https://res.cloudinary.com/dws2bgxg4/image/upload/v1717643334/woman-2141808_1280_uwt6zj.jpg"
    },
    // Add more slides data here
  ];

 return (
  <>
    

   <Slider {...settings}>
   
     {slidesData.map((slide, index) => (
       <div key={index} className="hero_container">
       <img src="https://res.cloudinary.com/dws2bgxg4/image/upload/e_background_removal/c_pad,w_45,h_46,f_png/v1717428114/logomed_gj1nuw.avif" alt="Logo" className="logo" />
       <div className="language_container">
  <IonIcon className="text-orange-500" icon={languageOutline} />
  <IonSelect placeholder="Select Language" interface="popover">
    <IonSelectOption value="en">English</IonSelectOption>
    <IonSelectOption value="es">Spanish</IonSelectOption>
    {/* Add more options as needed */}
  </IonSelect>
</div>
        
         <img src={slide.image} alt={slide.title} className="background_image" />
         <div className="overlay_content">
           <div className="text_container">
             <IonText>
               <h2 className="hero_text">
                 {slide.title}
               </h2>
             </IonText>
           </div>

           <div className="subtitle">
             <IonText>
               <p className="hero_subtitle">
                 <strong>{slide.subtitle}</strong>
               </p>
             </IonText>
           </div>
           {showButton && (
  <IonButton
    shape="round"
    size="default"
    expand="block"
    color="primary"
    className="ion-margin-vertical"
    onClick={handleButtonClick}
  >
    Get Started
    <IonIcon slot="end" icon={arrowForward}></IonIcon>
  </IonButton>
)}

          
         </div>
       </div>
     ))}
   </Slider>
   </>
 );
};

export default Hero;