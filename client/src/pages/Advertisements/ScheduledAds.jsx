import React, { useState } from 'react';

const ScheduledAds = () => {
  const [ads, setAds] = useState([
    {
      id: 1,
      name: 'HealthCare Campaign',
      sponsor: 'HealthCorp',
      startTime: '2023-10-15 08:00',
      endTime: '2023-10-20 18:00',
      targetPage: 'Patient Dashboard',
      position: 'Top Banner',
      status: 'Scheduled',
    },
    {
      id: 2,
      name: 'Wellness Promo',
      sponsor: 'Wellness Inc.',
      startTime: '2023-10-16 09:00',
      endTime: '2023-10-22 20:00',
      targetPage: 'Appointment Page',
      position: 'Sidebar',
      status: 'Running',
    },
    {
      id: 3,
      name: 'LifeCare Ad',
      sponsor: 'LifeCare Ltd.',
      startTime: '2023-10-10 10:00',
      endTime: '2023-10-14 17:00',
      targetPage: 'Home Page',
      position: 'Modal',
      status: 'Completed',
    },
  ]);

  const handleEdit = (id) => {
    alert(`Edit ad with ID ${id}`);
    // Add logic to navigate to the edit form
  };

  const handleDelete = (id) => {
    const updatedAds = ads.filter((ad) => ad.id !== id);
    setAds(updatedAds);
    alert(`Ad with ID ${id} has been deleted.`);
  };

  const handlePause = (id) => {
    const updatedAds = ads.map((ad) =>
      ad.id === id ? { ...ad, status: 'Paused' } : ad
    );
    setAds(updatedAds);
    alert(`Ad with ID ${id} has been paused.`);
  };

  return (
    <div className="container mt-5">
      <h1>Scheduled Advertisements</h1>
      <p>Below is the list of all scheduled advertisements:</p>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Ad Name / ID</th>
            <th>Sponsor</th>
            <th>Start Time & End Time</th>
            <th>Target Page</th>
            <th>Display Position</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ads.map((ad) => (
            <tr key={ad.id}>
              <td>{ad.name} / {ad.id}</td>
              <td>{ad.sponsor}</td>
              <td>
                {ad.startTime} - {ad.endTime}
              </td>
              <td>{ad.targetPage}</td>
              <td>{ad.position}</td>
              <td>
                <span
                  className={`badge ${
                    ad.status === 'Scheduled'
                      ? 'bg-primary'
                      : ad.status === 'Running'
                      ? 'bg-success'
                      : ad.status === 'Completed'
                      ? 'bg-secondary'
                      : 'bg-warning'
                  }`}
                >
                  {ad.status}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(ad.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm me-2"
                  onClick={() => handleDelete(ad.id)}
                >
                  Delete
                </button>
                {ad.status === 'Running' && (
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => handlePause(ad.id)}
                  >
                    Pause
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduledAds;
