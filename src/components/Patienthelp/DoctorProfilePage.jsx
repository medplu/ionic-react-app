import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const DoctorProfilePage = ({ openBookingModal }) => {
  const [showBio, setShowBio] = useState(true);
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get(`/api/schedules/${doctorId}`);
        setSchedules(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`/api/doctors/${doctorId}`);
        setDoctor(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDoctor();
    fetchSchedules();
  }, [doctorId]);

  const getSchedulesByDay = (day) => {
    return schedules.filter(schedule => schedule.day === day);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date().getDay();
  const todayDate = new Date().toLocaleDateString();

  return (
    <div className="h-screen bg-gray-900 text-white w-full">
      {/* SVG Icon at the top-left side of the page */}
      <div className='p-4'>
        <svg fill="#FFC0CB" height="50px" width="150px" className="h-6 w-6" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 512 512" xmlSpace="preserve">
          <g>
            <g>
              <path d="M502.154,181.778H384c-4.026,0-7.646,2.644-9.142,6.382l-27.714,69.383l-22.474-97.334
                  c-1.035-4.489-5.012-7.62-9.65-7.608c-4.606,0.026-8.578,3.255-9.563,7.754l-55.187,252.293l-33.694-379.05
                  c-0.398-4.471-3.767-8.105-8.192-8.84c-4.432-0.729-8.791,1.422-10.613,5.522L121.601,201.47H9.846
                  c-5.437,0-9.846,4.409-9.846,9.846c0,5.438,4.409,9.846,9.846,9.846H128c3.891,0,7.417-2.098,8.998-5.654l63.33-142.397
                  l36.018,405.26c0.43,4.844,4.332,8.671,9.184,8.98c0.212,0.013,0.421,0.031,0.63,0.031c4.595,0,8.619-3.192,9.613-7.736
                  l59.561-272.278l19.688,85.315c0.967,4.193,4.547,7.273,8.838,7.603c4.313,0.334,8.299-2.357,9.898-6.353l36.909-92.464h111.488
                  c5.438,0,9.846-4.409,9.846-9.846C512,186.187,507.591,181.778,502.154,181.778z"/>
            </g>
          </g>
        </svg>
      </div>

      {doctor && (
        <div className="flex flex-col items-center py-8 shadow-md">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-24 mask mask-hexagon"
            onClick={() => console.log("Image clicked")} // example onClick handler for image
          />
          <h2 className="text-2xl font-bold">{doctor.name}</h2>
          <p className="text-lg text-white">{doctor.specialties}</p>
          <div
            key={doctor._id}
            className="bg-gray-900 flex text-white p-2 justify-between rounded-lg shadow-lg m-2 flex-shrink-0"
            style={{ minWidth: '300px' }}
          >
            <button
              onClick={() => openBookingModal(doctor)}
              className="px-3 py-1 shadow-lg shadow-gray-500/50 bg-orange-500 text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]"
            >
              Book
            </button>
            <button
              onClick={() => {/* handle call action */}}
              className="px-3 py-1 shadow-lg shadow-gray-500/50 bg-green-500 text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]"
            >
              <FaPhone />
            </button>
            <button
              onClick={() => {/* handle message action */}}
              className="px-3 py-1 shadow-lg shadow-gray-500/50 bg-blue-500 text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]"
            >
              <FaEnvelope />
            </button>
          </div>
        </div>
      )}

      <div className="bg-gray-700 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl">Dr {doctor.name}</h3>
            <button onClick={() => setShowBio(!showBio)} className="text-white">
              {showBio ? "Hide Bio" : "Show Bio"}
            </button>
          </div>
          {showBio && <p className='text-base leading-normal'>{doctor?.bio}</p>}
        </div>
      </div>

      {/* Schedule Section */}
 
    </div>
  );
};

export default DoctorProfilePage;
