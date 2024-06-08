import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import io from 'socket.io-client';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const UserAppointments = ({ userId }) => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentAppointmentIndex, setCurrentAppointmentIndex] = useState(0);

  useEffect(() => {
    fetch(`/api/appointments/user/${userId}`)
      .then(response => response.json())
      .then(data => setAppointments(data.data));

    // Connect to the server
    const socket = io('http://localhost:3000'); // Replace with your server's URL

    // Listen for the 'appointmentConfirmed' event
    socket.on('appointmentConfirmed', (confirmedAppointment) => {
      // Update the appointments state
      setAppointments((prevAppointments) => [...prevAppointments, confirmedAppointment]);
    });

    // Clean up the effect by disconnecting from the server
    return () => socket.disconnect();
  }, [userId]);

  const handleDayClick = (date) => {
    setSelectedDate(date);
  };

  const handleNextAppointment = () => {
    if (currentAppointmentIndex < appointments.length - 1) {
      setCurrentAppointmentIndex(currentAppointmentIndex + 1);
    }
  };

  const startOfWeek = new Date(selectedDate);
  startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay()); // Set start of week to Sunday

  const renderDayCards = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);

      const appointmentForDay = appointments.find(appointment => {
        const appointmentDate = new Date(appointment.Date);
        return (
          appointmentDate.getDate() === date.getDate() &&
          appointmentDate.getMonth() === date.getMonth() &&
          appointmentDate.getFullYear() === date.getFullYear()
        );
      });

      days.push(
        <div
          key={date.toDateString()}
          onClick={() => handleDayClick(date)}
          className={`w-14 h-16 flex flex-col items-center justify-center rounded-full cursor-pointer mx-1
          ${date.toDateString() === selectedDate.toDateString() ? 'bg-blue-600 text-white' : appointmentForDay ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          <span>{daysOfWeek[date.getDay()].slice(0, 3).toUpperCase()}</span>
          <span className="text-xs">{date.getDate()}</span>
        </div>
      );
    }
    return days;
  };

  const filteredAppointments = appointments.filter(appointment => {
    const appointmentDate = new Date(appointment.Date);
    return (
      appointmentDate.getDate() === selectedDate.getDate() &&
      appointmentDate.getMonth() === selectedDate.getMonth() &&
      appointmentDate.getFullYear() === selectedDate.getFullYear()
    );
  });

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold">My Appointments</h3>
      </div>
      <div className="flex justify-center mb-4">
        {renderDayCards()}
      </div>
      <div className="relative w-full">
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map(appointment => (
            <div
              key={appointment._id}
              className={`flex flex-col md:flex-row justify-between items-start card space-x-4 rounded-xl px-4 py-4 shadow-sm mb-4 ${appointment.status === 'confirmed' ? 'bg-emerald-400' : 'bg-white'}`}
            >
              <div className="flex space-x-2">
                <img src={appointment.doctor_id.image} alt="Doctor" className="w-32 h-32 shadow-4-strong rounded-2xl object-cover" />
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold text-slate-900">{appointment.doctor_id.name}</h2>
                  <div className="flex gap-2">
                    <p className="text-md text-slate-900">
                      {appointment.doctor_id.specialties}
                    </p>
                    <p className="text-md text-slate-900">
                      Exp: {appointment.doctor_id.experience}
                    </p>
                  </div>
                  <div className="flex items-center text-sm text-orange-700">
                    <FaCalendarAlt className="mr-1" />
                    <span>{appointment.Date}</span>
                  </div>
                </div>
              </div>
              <button onClick={handleNextAppointment} className="self-start mt-4">
                <FaArrowRight />
              </button>
            </div>
          ))
        ) : (
          <p>No appointments for the selected day.</p>
        )}
      </div>
    </div>
  );
};

export default UserAppointments;
