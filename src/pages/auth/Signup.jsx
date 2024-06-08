import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonLabel, IonItem, IonSelect, IonSelectOption, IonToast } from '@ionic/react';
import toast from "react-hot-toast";
const SignUpPage = () => {
    const [showToast, setShowToast] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    accountType: '',
    additionalInfo: {}
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAdditionalInfoChange = (event) => {
    setFormData({
      ...formData,
      additionalInfo: {
        ...formData.additionalInfo,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to create account");
      }
  
      const data = await res.json();
            
      setShowToast(true); // Show the toast
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput name="username" type="text" value={formData.username} onIonChange={handleInputChange} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Full Name</IonLabel>
            <IonInput name="fullName" type="text" value={formData.fullName} onIonChange={handleInputChange} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput name="email" type="email" value={formData.email} onIonChange={handleInputChange} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput name="password" type="password" value={formData.password} onIonChange={handleInputChange} />
          </IonItem>
          <IonItem>
            <IonLabel>Account Type</IonLabel>
            <IonSelect name="accountType" value={formData.accountType} onIonChange={handleInputChange}>
              <IonSelectOption value="client">Client</IonSelectOption>
              <IonSelectOption value="student">Student</IonSelectOption>
              <IonSelectOption value="professional">Professional</IonSelectOption>
              <IonSelectOption value="institution">Institution</IonSelectOption>
            </IonSelect>
          </IonItem>
          {formData.accountType === 'student' && (
            <IonItem>
              <IonLabel position="floating">School Name</IonLabel>
              <IonInput name="schoolName" type="text" value={formData.additionalInfo.schoolName} onIonChange={handleAdditionalInfoChange} />
            </IonItem>
          )}
          {formData.accountType === 'professional' && (
            <>
              <IonItem>
                <IonLabel position="floating">Professional Title</IonLabel>
                <IonInput name="professionalTitle" type="text" value={formData.additionalInfo.professionalTitle} onIonChange={handleAdditionalInfoChange} />
              </IonItem>
              {/* Add more fields for professional account type as needed */}
            </>
          )}
          {formData.accountType === 'institution' && (
            <IonItem>
              <IonLabel position="floating">Institution Name</IonLabel>
              <IonInput name="institutionName" type="text" value={formData.additionalInfo.institutionName} onIonChange={handleAdditionalInfoChange} />
            </IonItem>
          )}
          <IonButton expand="full" type="submit">Sign Up</IonButton>
        </form>
      </IonContent>
      <IonToast
        isOpen={showToast}
        message="Account created successfully"
        onDidDismiss={() => setShowToast(false)}
        duration={5000}
      />
    </IonPage>
  );
};

export default SignUpPage;