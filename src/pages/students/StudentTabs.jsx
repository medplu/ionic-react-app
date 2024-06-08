import React from 'react';
import { IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonIcon, IonLabel } from '@ionic/react';
import { Route } from 'react-router-dom';
import { homeOutline, searchOutline, personOutline } from 'ionicons/icons';
import StudentPage from './StudentPage';
import StudentTab1 from './StudentTab1';
import StudentTab2 from './StudentTab2';
import StudentTab3 from './StudentTab3';

const StudentTabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/students" component={StudentPage} exact />
        <Route path="/students/tab1" component={StudentTab1} exact />
        <Route path="/students/tab2" component={StudentTab2} exact />
        <Route path='/students/tab3' component={StudentTab3} exact />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/students/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab1" href="/students/tab1">
          <IonIcon icon={searchOutline} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/students/tab2">
          <IonIcon icon={personOutline} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/students/tab3">
          <IonIcon icon={personOutline} />
          <IonLabel>Tab 3</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default StudentTabs;