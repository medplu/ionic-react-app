import React from 'react';
import { IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect} from 'react-router-dom';
import { homeOutline, searchOutline, personOutline } from 'ionicons/icons';
import DoctorPage from './DoctorPage';
import DoctorTab1 from './DocTab1';
import DoctorTab2 from './DocTab2';
import DoctorTab3 from './DocTab3';


const DoctorTabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/doctors/home" component={DoctorPage} exact />
        <Route path="/doctors/tab1" component={DoctorTab1} exact />
        <Route path="/doctors/tab2" component={DoctorTab2} exact />
        <Route path='/doctors/tab3' component={DoctorTab3} exact />
        <Redirect from="/doctors" to="/doctors/home" exact />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/doctors/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab1" href="/doctors/tab1">
          <IonIcon icon={searchOutline} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/doctors/tab2">
          <IonIcon icon={personOutline} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/doctors/tab3">
          <IonIcon icon={personOutline} />
          <IonLabel>Tab 3</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default DoctorTabs;