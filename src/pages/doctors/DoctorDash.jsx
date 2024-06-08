import React from 'react'
import DoctorTabs from './DoctorTabs'
import { IonReactRouter } from '@ionic/react-router'

const DoctorDash = () => {
  return (
    <div>
      <IonReactRouter>
    <DoctorTabs />
  </IonReactRouter>
      
    </div>
  )
}

export default DoctorDash
