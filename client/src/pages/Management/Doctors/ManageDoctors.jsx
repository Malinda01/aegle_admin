import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [filteredDoctors, setFilteredDoctors] = useState([]); // State for filtered doctors
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Fetch doctor data (replace with actual API call)
    const fetchedDoctors = [
      { id: 1, name: 'Dr. John Doe', specialization: 'Cardiology', contact: '123-456-7890', email: 'john.doe@example.com' },
      { id: 2, name: 'Dr. Jane Smith', specialization: 'Neurology', contact: '987-654-3210', email: 'jane.smith@example.com' },
      { id: 3, name: 'Dr. Emily Davis', specialization: 'Pediatrics', contact: '555-123-4567', email: 'emily.davis@example.com' },
      { id: 4, name: 'Dr. Michael Brown', specialization: 'Orthopedics', contact: '444-987-6543', email: 'michael.brown@example.com' },
      { id: 5, name: 'Dr. Sarah Wilson', specialization: 'Dermatology', contact: '333-654-7890', email: 'sarah.wilson@example.com' },
      { id: 6, name: 'Dr. David Clark', specialization: 'Oncology', contact: '222-321-6549', email: 'david.clark@example.com' },
      { id: 7, name: 'Dr. Laura Martinez', specialization: 'Gynecology', contact: '111-789-4560', email: 'laura.martinez@example.com' },
    ];
    setDoctors(fetchedDoctors);
    setFilteredDoctors(fetchedDoctors); // Initialize filtered doctors
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(term)
    );
    setFilteredDoctors(filtered);
  };

  const handleAddDoctor = () => {
    navigate('/doctors/add'); // Navigate to the Add Doctor page
  };

  const handleDoctorList = () => {
    navigate('/doctors/list'); // Navigate to the Doctor List page
  };

  const handleApprove = (id) => {
    const approvedDoctor = doctors.find((doctor) => doctor.id === id);
    console.log(`Doctor with ID ${id} approved:`, approvedDoctor);

    // Simulate sending approved doctor to DoctorList.jsx
    const approvedDoctors = JSON.parse(localStorage.getItem('approvedDoctors')) || [];
    approvedDoctors.push(approvedDoctor);
    localStorage.setItem('approvedDoctors', JSON.stringify(approvedDoctors));

    alert(`Doctor with ID ${id} has been approved.`);
    setDoctors(doctors.filter((doctor) => doctor.id !== id));
    setFilteredDoctors(filteredDoctors.filter((doctor) => doctor.id !== id));
  };

  const handleDecline = (id) => {
    console.log(`Doctor with ID ${id} declined.`);
    alert(`Doctor with ID ${id} has been declined.`);
    setDoctors(doctors.filter((doctor) => doctor.id !== id));
    setFilteredDoctors(filteredDoctors.filter((doctor) => doctor.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2>Manage Doctors</h2>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div>
          <button className="btn btn-primary me-2" onClick={handleAddDoctor}>
            Add Doctor
          </button>
          <button className="btn btn-secondary" onClick={handleDoctorList}>
            Doctor List
          </button>
        </div>
      </div>
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
          {filteredDoctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.contact}</td>
              <td>{doctor.email}</td>
              <td>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => handleApprove(doctor.id)}
                >
                  Approve
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDecline(doctor.id)}
                >
                  Decline
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageDoctors;
