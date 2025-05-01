import React, { useState, useEffect } from 'react';

const ManageSponsors = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    // Fetch sponsor data (replace with actual API call)
    const fetchedSponsors = [
      { id: 1, name: 'John Doe', company: 'HealthCorp', contact: '123-456-7890', email: 'john.doe@healthcorp.com' },
      { id: 2, name: 'Jane Smith', company: 'MediCare', contact: '987-654-3210', email: 'jane.smith@medicare.com' },
    ];
    setSponsors(fetchedSponsors);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Manage Sponsors</h2>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>Contact</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {sponsors.map((sponsor) => (
            <tr key={sponsor.id}>
              <td>{sponsor.id}</td>
              <td>{sponsor.name}</td>
              <td>{sponsor.company}</td>
              <td>{sponsor.contact}</td>
              <td>{sponsor.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageSponsors;
