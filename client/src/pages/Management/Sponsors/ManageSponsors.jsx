import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageSponsors = () => {
  const [sponsors, setSponsors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSponsors, setFilteredSponsors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch sponsor data (replace with actual API call)
    const fetchedSponsors = [
      { id: 1, name: 'John Doe', company: 'HealthCorp', contact: '123-456-7890', email: 'john.doe@healthcorp.com' },
      { id: 2, name: 'Jane Smith', company: 'MediCare', contact: '987-654-3210', email: 'jane.smith@medicare.com' },
      { id: 3, name: 'Emily Davis', company: 'Wellness Inc.', contact: '555-123-4567', email: 'emily.davis@wellness.com' },
      { id: 4, name: 'Michael Brown', company: 'LifeLine', contact: '444-987-6543', email: 'michael.brown@lifeline.com' },
      { id: 5, name: 'Sarah Wilson', company: 'CarePlus', contact: '333-654-7890', email: 'sarah.wilson@careplus.com' },
      { id: 6, name: 'David Clark', company: 'HealthFirst', contact: '222-321-6549', email: 'david.clark@healthfirst.com' },
      { id: 7, name: 'Laura Martinez', company: 'MediAid', contact: '111-789-4560', email: 'laura.martinez@mediaid.com' },
    ];
    setSponsors(fetchedSponsors);
    setFilteredSponsors(fetchedSponsors); // Initialize filtered sponsors
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = sponsors.filter((sponsor) =>
      sponsor.name.toLowerCase().includes(term) || sponsor.company.toLowerCase().includes(term)
    );
    setFilteredSponsors(filtered);
  };

  const handleApprove = (id) => {
    console.log(`Sponsor with ID ${id} approved.`);
    alert(`Sponsor with ID ${id} has been approved.`);
    // Add logic to update the sponsor's status in the backend
  };

  const handleDecline = (id) => {
    console.log(`Sponsor with ID ${id} declined.`);
    alert(`Sponsor with ID ${id} has been declined.`);
    // Add logic to update the sponsor's status in the backend
  };

  const handleAddSponsor = () => {
    navigate('/sponsors/add'); // Navigate to the Add Sponsor page
  };

  const handleSponsorList = () => {
    navigate('/sponsors/list'); // Navigate to the Sponsor List page
  };

  return (
    <div className="container mt-5">
      <h2>Manage Sponsors</h2>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by name or company"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div>
          <button className="btn btn-primary me-2" onClick={handleAddSponsor}>
            Add Sponsor
          </button>
          <button className="btn btn-secondary" onClick={handleSponsorList}>
            Sponsor List
          </button>
        </div>
      </div>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredSponsors.map((sponsor) => (
            <tr key={sponsor.id}>
              <td>{sponsor.id}</td>
              <td>{sponsor.name}</td>
              <td>{sponsor.company}</td>
              <td>{sponsor.contact}</td>
              <td>{sponsor.email}</td>
              <td>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => handleApprove(sponsor.id)}
                >
                  Approve
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDecline(sponsor.id)}
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

export default ManageSponsors;
