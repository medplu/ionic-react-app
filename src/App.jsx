import React from 'react';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

import Page2 from './pages/patients/Patientdash';
import Page3 from './pages/doctors/DoctorDash';

import Page4 from './pages/students/StudentDash';


import Example from './pages/Example';

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
      <Route path="/landing" component={Example} exact />
     
        <Route path="/patients" component={Page2} exact />
        <Route path="/doctors" component={Page3}  exact/>
        <Route path="/students" component={Page4} exact />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;