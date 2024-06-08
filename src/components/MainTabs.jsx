import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { home, homeOutline, search, searchOutline, addCircle, addCircleOutline, person, personOutline, notifications, notificationsOutline } from 'ionicons/icons';
import Tab1 from '../pages/Tab1';
import Tab2 from '../pages/Tab2';
import Tab3 from '../pages/Tab3';
import PatientsPage from '../pages/patients/Patientdash';
import PatientTab1 from '../pages/patients/PatientTab1';
import PatientTab2 from '../pages/patients/PatientTab2';

const MainTabs = () => {
  const tabs = [
    {
      name: "Home",
      url: "/home",
      activeIcon: home,
      icon: homeOutline,
      component: Tab1
    },
    {
      name: "Search",
      url: "/search",
      activeIcon: search,
      icon: searchOutline,
      component: Tab2
    },
    {
      name: "Add",
      url: "/add",
      activeIcon: addCircle,
      icon: addCircleOutline,
      component: Tab3
    },
    {
      name: "Account",
      url: "/account",
      activeIcon: person,
      icon: personOutline,
      component: Tab3
    },
    {
      name: "Notifications",
      url: "/notifications",
      activeIcon: notifications,
      icon: notificationsOutline,
      component: Tab3
    },
    {
      name: "Patients",
      url: "/patients",
      activeIcon: person,
      icon: personOutline,
      component: PatientsPage
    }
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <IonTabs onIonTabsDidChange={e => setActiveTab(e.detail.tab)}>
      <IonRouterOutlet>
        {tabs.map((tab, index) => (
          <Route key={index} exact path={tab.url}>
            <tab.component />
          </Route>
        ))}
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        {tabs.map((tab, barIndex) => {
          const active = tab.name === activeTab;
          return (
            <IonTabButton key={`tab_${barIndex}`} tab={tab.name} href={tab.url}>
              <IonIcon icon={active ? tab.activeIcon : tab.icon} />
            </IonTabButton>
          );
        })}
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;
