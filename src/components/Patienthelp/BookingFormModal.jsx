import React, { useState } from 'react';
import { IonModal, IonButton, IonInput, IonSelect, IonSelectOption } from '@ionic/react';
import axios from 'axios';

const BookingFormModal = ({ doctor, onCancel, userId, authUser }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    gender: '',
    phone: '',
    age: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { date, time, gender, phone, age } = formData;
      const doctorId = doctor._id;
      const { username, email } = authUser;

      const dateTime = `${date} ${time}`;
      const dateOnly = dateTime.split(' ')[0]; // Get the date part only

      const response = await axios.post('/api/appointments', {
        name: username,
        phone,
        email,
        gender,
        age,
        Date: dateOnly, // Use the date part only
        doctorId,
        userId,
      });

      console.log('Appointment created:', response.data);
      onCancel(); // Close the modal on success

    } catch (error) {
      console.error('Error creating appointment:', error);
      // Handle error, e.g., display error message
    }
  };

  return (
    <IonModal isOpen={true} onDidDismiss={onCancel}>
      <div className="ion-padding">
        <h2>Book Appointment with {doctor.name}</h2>
        <form onSubmit={handleSubmit}>
          <IonInput
            type="date"
            name="date"
            value={formData.date}
            onIonChange={handleInputChange}
            required
          ></IonInput>
          <IonInput
            type="time"
            name="time"
            value={formData.time}
            onIonChange={handleInputChange}
            required
          ></IonInput>
          <IonSelect
            name="gender"
            value={formData.gender}
            onIonChange={handleInputChange}
            required
          >
            <IonSelectOption value="">Select your gender</IonSelectOption>
            <IonSelectOption value="male">Male</IonSelectOption>
            <IonSelectOption value="female">Female</IonSelectOption>
            <IonSelectOption value="other">Other</IonSelectOption>
          </IonSelect>
          <IonInput
            type="text"
            name="phone"
            value={formData.phone}
            onIonChange={handleInputChange}
          ></IonInput>
          <IonInput
            type="text"
            name="age"
            value={formData.age}
            onIonChange={handleInputChange}
          ></IonInput>
          <div className="ion-padding-top ion-text-end">
            <IonButton onClick={onCancel}>Cancel</IonButton>
            <IonButton type="submit">Submit</IonButton>
          </div>
        </form>
      </div>
    </IonModal>
  );
};

export default BookingFormModal;
