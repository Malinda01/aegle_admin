import React, { useState, useEffect } from 'react';

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctor data (replace with actual API call)
    const fetchedDoctors = [
      { id: 1, name: 'Dr. John Doe', specialization: 'Cardiology', contact: '123-456-7890', email: 'john.doe@example.com' },
      { id: 2, name: 'Dr. Jane Smith', specialization: 'Neurology', contact: '987-654-3210', email: 'jane.smith@example.com' },
    ];
    setDoctors(fetchedDoctors);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Manage Doctors</h2>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Contact</th>
            <th>Email</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageDoctors;
