import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewProfile = () => {
  const profileData = {
    name: 'Admin Name',
    email: 'admin@example.com',
    role: 'Administrator',
  };

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/profile/edit'); // Navigate to the edit profile page
  };

  return (
    <div className="container mt-5">
      <h2>View Profile</h2>
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Profile Details</h5>
          <p><strong>Name:</strong> {profileData.name}</p>
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Role:</strong> {profileData.role}</p>
          <button className="btn btn-primary mt-3" onClick={handleEdit}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
