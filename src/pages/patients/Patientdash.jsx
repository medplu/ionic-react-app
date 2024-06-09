import React, { useState, useEffect } from "react";
import axios from "axios";
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonSegment, IonSegmentButton, IonLabel, IonImg, IonInput, IonIcon } from '@ionic/react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { searchOutline } from 'ionicons/icons';
import CategoryCard from "../../components/category/CategoryCard";
import BookingFormModal from "../../components/Patienthelp/BookingFormModal";
import PatientTabs from "./PatientsTabs";
import './patients.css';

import ambulanceIcon from "../../assets/icons8-neurology-78.png";
import flaskIcon from "../../assets/icons8-cardiology-55.png";
import kidneyIcon from "../../assets/icons8-kidney-64.png";
import cancerIcon from "../../assets/icons8-cancer-ribbon-48.png";
import pregnancyIcon from "../../assets/icons8-pregnancy-48.png";
import pediatricsImage from "../../assets/icons/icons8-children-51.png";
import ambulanceService from '../../assets/icons/icons8-ambulance-48.png';
import labIcon from "../../assets/icons/icons8-laboratory-48.png";
import radIcon from "../../assets/icons/icons8-x-men-16.png";
import paedImage from "../../assets/icons/icons8-children-51.png";
import teethIcon from "../../assets/icons/icons8-molar-48.png";
import mentalIcon from "../../assets/icons/icons8-advice-48.png";
import { IonReactRouter } from "@ionic/react-router";

const PatientPage = () => {
  const [authUser, setAuthUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const categoriesSets = [
    [
      { icon: ambulanceService, description: "", title: "ambulance" },
      { icon: labIcon, description: "", title: "labs" },
      { icon: radIcon, description: "", title: "Radiology" },
      { icon: paedImage, description: "", title: "Paediatrician" },
      { icon: teethIcon, description: "", title: "Dentist" },
      { icon: mentalIcon, description: "", title: "counselling" }
    ],
    [
      { icon: ambulanceIcon, description: "", title: "Neurologist" },
      { icon: flaskIcon, description: "", title: "Cardiologist" },
      { icon: kidneyIcon, description: "", title: "Nephrologist" },
      { icon: pregnancyIcon, description: "", title: "Gynaecologist" },
      { icon: cancerIcon, description: "", title: "Oncologist" },
      { icon: pediatricsImage, description: "", title: "Paediatrician" }
    ]
  ];

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setAuthUser(JSON.parse(user));
    }
  }, []);

  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const categories = categoriesSets[currentIndex];

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://192.168.100.3:3000/api/doctors');
        setDoctors(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const openBookingModal = (doctor) => {
    setSelectedDoctor(doctor);
    setShowBookingModal(true);
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
    setSelectedDoctor(null);
  };

  const handleSetChange = (index) => {
    setCurrentIndex(index);
    if (index === 1) {
      filterDoctorsBySpecialty(categoriesSets[1][0].title);
    } else {
      setFilteredDoctors([]);
    }
  };

  const filterDoctorsBySpecialty = (specialty) => {
    const filtered = doctors.filter((doctor) => doctor.specialties === specialty);
    setFilteredDoctors(filtered);
  };

  const handleCategoryCardClick = (title) => {
    filterDoctorsBySpecialty(title);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      const filtered = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(query) ||
        doctor.specialties.toLowerCase().includes(query)
      );
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors(doctors);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Customize the loading state as needed
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <IonPage>
      <IonContent className="min-h-screen flex flex-col bg-gray-900 text-white">
        <IonHeader>
          <IonToolbar color="primary">
            <div className="relative w-full h-50 bg-base-100 shadow-xl image-full flex-shrink-0">
              <IonImg src="https://res.cloudinary.com/dws2bgxg4/image/upload/v1714938261/c3_caagpo.jpg" alt="Doctor" className="w-full h-48 object-cover" />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
              <div className="absolute top-0 mt-20 mb-4 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
                <IonTitle className="ion-text-center text-white font-bold z-10">Hello {authUser?.fullName}</IonTitle>
                <IonTitle className="ion-text-center text-white font-bold z-10">Welcome, Our Doctors are available</IonTitle>
              </div>
            </div>
          </IonToolbar>
          <IonToolbar color="light">
            <IonSearchbar value={searchQuery} onIonChange={handleSearchChange} placeholder="Type search..." />
          </IonToolbar>
        </IonHeader>

        <section className="pt-5 lg:pb-20 lg:pt-[120px] dark:bg-dark flex-shrink-0">
          <div className="container">
            <IonInput
              type="text"
              className="bg-purple-white shadow text-slate-950 rounded-xl border-0 p-3 w-full"
              placeholder="Type search..."
              value={searchQuery}
              onIonChange={(e) => handleSearchChange(e)}
            />
            <IonIcon icon={searchOutline} className="text-orange-500 absolute top-0 right-0 p-4 pr-3" />
          </div>
        </section>

        <IonSegment onIonChange={e => handleSetChange(e.detail.value)}>
          <IonSegmentButton value="0">
            <IonLabel>Categories</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="1">
            <IonLabel>Specialties</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        <Swiper spaceBetween={2} slidesPerView={4} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="card-container">
                <CategoryCard
                  icon={category.icon}
                  title={category.title}
                  description={category.description}
                  onClick={handleCategoryCardClick}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

     

        {showBookingModal && selectedDoctor && (
          <BookingFormModal
            doctor={selectedDoctor}
            onCancel={closeBookingModal}
            userId={authUser._id}
            authUser={authUser}
            onSubmit={() => {
              closeBookingModal();
            }}
          />
        )}
      </IonContent>
      <IonReactRouter>
      <PatientTabs />
  </IonReactRouter>
      
    </IonPage>
  );
};

export default PatientPage;
