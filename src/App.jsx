import React from 'react';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

import Page2 from './pages/patients/Patientdash';
import Page3 from './pages/doctors/DoctorDash';

import Page4 from './pages/students/StudentDash';

import Home from './pages/Home';

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
      <Route path="/landing" component={Home} exact />
     
        <Route path="/patients" component={Page2} />
        <Route path="/doctors" component={Page3} />
        <Route path="/students" component={Page4} />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;