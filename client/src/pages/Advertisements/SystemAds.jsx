import React, { useState } from 'react';

const SystemAds = () => {
  const [ads, setAds] = useState([
    { id: 1, title: 'HealthCare Campaign', status: 'Active', clicks: 1200, revenue: '$500', isActive: true },
    { id: 2, title: 'Wellness Promo', status: 'Pending', clicks: 800, revenue: '$300', isActive: false },
    { id: 3, title: 'LifeCare Ad', status: 'Rejected', clicks: 0, revenue: '$0', isActive: false },
    { id: 4, title: 'Fitness Campaign', status: 'Active', clicks: 1500, revenue: '$700', isActive: true },
    { id: 5, title: 'Nutrition Ad', status: 'Expired', clicks: 600, revenue: '$200', isActive: false },
  ]);

  const handleToggle = (id) => {
    const updatedAds = ads.map((ad) =>
      ad.id === id ? { ...ad, isActive: !ad.isActive } : ad
    );
    setAds(updatedAds);
    alert(`Ad with ID ${id} has been ${updatedAds.find((ad) => ad.id === id).isActive ? 'enabled' : 'disabled'}.`);
  };

  const handleApprove = (id) => {
    const updatedAds = ads.map((ad) =>
      ad.id === id ? { ...ad, isActive: true } : ad
    );
    setAds(updatedAds);
    alert(`Ad with ID ${id} has been approved.`);
  };

  const handleReject = (id) => {
    const updatedAds = ads.map((ad) =>
      ad.id === id ? { ...ad, isActive: false } : ad
    );
    setAds(updatedAds);
    alert(`Ad with ID ${id} has been rejected.`);
  };

  return (
    <div className="container mt-5">
      <h1>Manage Advertisements</h1>
      <p>Here you can manage all the advertisements in the system.</p>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Clicks</th>
            <th>Revenue</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ads.map((ad) => (
            <tr key={ad.id}>
              <td>{ad.id}</td>
              <td>{ad.title}</td>
              <td>{ad.clicks}</td>
              <td>{ad.revenue}</td>
              <td>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`toggle-${ad.id}`}
                    checked={ad.isActive}
                    onChange={() => handleToggle(ad.id)}
                  />
                  <label className="form-check-label" htmlFor={`toggle-${ad.id}`}>
                    {ad.isActive ? 'Enabled' : 'Disabled'}
                  </label>
                </div>
              </td>
              <td>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => handleApprove(ad.id)}
                >
                  Approve
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleReject(ad.id)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SystemAds;
