import React from 'react';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Signup from './pages/auth/Signup';
import { Route } from 'react-router-dom';
import "@ionic/react/css/core.css";

import Page2 from './pages/patients/Patientdash';
import Page3 from './pages/doctors/DoctorDash';

import Page4 from './pages/students/StudentDash';


import Example from './pages/Example';
import LoginPage from './pages/auth/Login';
import WelcomePage from './pages/Welcome';

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
      <Route path="/landing" component={Example} exact />
     
        <Route path="/patients" component={Page2} exact />
        <Route path="/doctors" component={Page3}  exact/>
        <Route path="/students" component={Page4} exact />

        {/* create a route to signup */}
        {/* create a route to login */}
        <Route path="/signup" component={Signup} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/welcome" component={WelcomePage} exact />
        
      </IonReactRouter>
    </IonApp>
  );
};

export default App;