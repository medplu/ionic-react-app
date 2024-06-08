import React from 'react';
import { IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import { homeOutline, searchOutline, personOutline } from 'ionicons/icons';
import Patientdash from './PatientPage';
import PatientTab1 from './PatientTab1';
import PatientTab2 from './PatientTab2';
import PatientTab3 from './PatientTab3';

const PatientTabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/patients" component={Patientdash} exact />
        <Route path="/patients/tab1" component={PatientTab1} exact />
        <Route path="/patients/tab2" component={PatientTab2} exact />
        <Route path='/patients/tab3' component={PatientTab3} exact />
       
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/patients/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab1" href="/patients/tab1">
          <IonIcon icon={searchOutline} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/patients/tab2">
          <IonIcon icon={personOutline} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/patients/tab3">
          <IonIcon icon={personOutline} />
          <IonLabel>Tab 3</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default PatientTabs;
