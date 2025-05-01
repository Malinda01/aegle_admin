import React, { useState, useEffect } from 'react';

const ViewProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
  });

  useEffect(() => {
    // Fetch profile data (replace with actual API call)
    const fetchedProfile = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      contact: '123-456-7890',
      address: '123 Main St, Springfield',
    };
    setProfile(fetchedProfile);
  }, []);

  return (
    <div className="container mt-5">
      <h2>View Profile</h2>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Name: {profile.name}</h5>
          <p className="card-text">Email: {profile.email}</p>
          <p className="card-text">Contact: {profile.contact}</p>
          <p className="card-text">Address: {profile.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
