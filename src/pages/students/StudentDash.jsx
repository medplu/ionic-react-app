import React from 'react'
import StudentTabs from './StudentTabs'
import { IonReactRouter } from '@ionic/react-router'

const StudentDash = () => {
  return (
    <div>
          <IonReactRouter>
          <StudentTabs />
  </IonReactRouter>
      
    </div>
  )
}

export default StudentDash
