import React from 'react';
import { IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonLabel } from '@ionic/react';
import { Route, Redirect} from 'react-router-dom';

import StudentPage from './StudentPage';
import StudentTab1 from './StudentTab1';
import StudentTab2 from './StudentTab2';
import StudentTab3 from './StudentTab3';
import { GoHome } from "react-icons/go";
import { VscLibrary } from "react-icons/vsc";
import { IoMdSearch } from "react-icons/io";
// import { CiCalendarDate } from "react-icons/ci";
// import { GoBell } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";

const StudentTabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/students/home" component={StudentPage} exact />
        <Route path="/students/tab1" component={StudentTab1} exact />
        <Route path="/students/tab2" component={StudentTab2} exact />
        <Route path='/students/tab3' component={StudentTab3} exact />
        <Redirect from="/students" to="/students/home" exact />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/students/home">
          <GoHome />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab1" href="/students/tab1">
          <IoMdSearch />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/students/tab2">
          <FaRegUser />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/students/tab3">
          <VscLibrary />
          <IonLabel>Library</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default StudentTabs;