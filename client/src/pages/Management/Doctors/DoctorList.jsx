import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const DoctorList = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Dr. John Doe', specialization: 'Cardiology', contact: '123-456-7890', email: 'john.doe@example.com' },
    { id: 2, name: 'Dr. Jane Smith', specialization: 'Neurology', contact: '987-654-3210', email: 'jane.smith@example.com' },
    { id: 3, name: 'Dr. Emily Davis', specialization: 'Pediatrics', contact: '555-123-4567', email: 'emily.davis@example.com' },
    { id: 4, name: 'Dr. Michael Brown', specialization: 'Orthopedics', contact: '444-987-6543', email: 'michael.brown@example.com' },
    { id: 5, name: 'Dr. Sarah Wilson', specialization: 'Dermatology', contact: '333-654-7890', email: 'sarah.wilson@example.com' },
  ]);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleUpdate = (id) => {
    navigate(`/doctors/edit/${id}`); // Navigate to the doctor profile editing page
  };

  const handleDelete = (id) => {
    const filteredDoctors = doctors.filter((doctor) => doctor.id !== id);
    setDoctors(filteredDoctors);
    alert(`Doctor with ID ${id} has been deleted.`);
  };

  return (
    <div className="container mt-5">
      <h2>All Doctors</h2>
      <p className="text-muted">Below is a sample list of doctors:</p>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.contact}</td>
              <td>{doctor.email}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleUpdate(doctor.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(doctor.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorList;
