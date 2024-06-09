import React from "react";
import { IonButton, IonIcon, IonText, IonSelect, IonSelectOption } from "@ionic/react";
import { arrowForward , languageOutline  } from "ionicons/icons";
import { useHistory } from 'react-router-dom';
import "./welcome.css";

const WelcomePage = () => {
  const history = useHistory();

  const handleButtonClick = (path) => {
    history.push(path);
  };

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Good morning';
    } else if (currentHour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };
  

  return (
    <div className="welcome_container">
      <img src="https://res.cloudinary.com/dws2bgxg4/image/upload/e_background_removal/c_pad,w_45,h_46,f_png/v1717428114/logomed_gj1nuw.avif" alt="Logo" className="logo" />
      <div className="language_container">
  <IonIcon className="text-orange-500" icon={languageOutline} />
  <IonSelect placeholder="Select Language" interface="popover">
    <IonSelectOption value="en">English</IonSelectOption>
    <IonSelectOption value="es">Spanish</IonSelectOption>
    {/* Add more options as needed */}
  </IonSelect>
</div>
      <IonText className="fade-in">
  <h2 className="welcome_text">
    Medplus Bridging Health
  </h2>
  <p className="text-orange-500">{getGreeting()}, sign up or register to get started.</p>
</IonText>
      <div className="button_container slide-up">
        <IonButton
          shape="round"
          size="default"
          expand="block"
          color="primary"
          className="ion-margin-vertical"
          onClick={() => handleButtonClick('/signup')}
        >
          Sign Up
          <IonIcon slot="end" icon={arrowForward}></IonIcon>
        </IonButton>
        <IonButton
          shape="round"
          size="default"
          expand="block"
          color="primary"
          className="ion-margin-vertical"
          onClick={() => handleButtonClick('/login')}
        >
          Log In
          <IonIcon slot="end" icon={arrowForward}></IonIcon>
        </IonButton>
      </div>
    </div>
  );
};

export default WelcomePage;