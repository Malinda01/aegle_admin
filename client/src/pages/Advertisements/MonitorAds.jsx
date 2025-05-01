import React from 'react';
import { useNavigate } from 'react-router-dom';

function MonitorAds() {
  const navigate = useNavigate();

  const handleManageAds = () => {
    navigate('/ads/system'); // Navigate to the System Ads page
  };

  const handleScheduleAds = () => {
    navigate('/ads/schedule'); // Ensure this path matches the route in App.jsx
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Monitor Advertisements</h1>
        <div>
          <button className="btn btn-primary me-2" onClick={handleManageAds}>
            Manage Ads
          </button>
          <button className="btn btn-secondary" onClick={handleScheduleAds}>
            Schedule Ads
          </button>
        </div>
      </div>
      <p>Here you can monitor all the advertisements and their performance.</p>

      {/* Analytics Summary Section */}
      <div className="row mt-4">
        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">📢 Total Ads Running</h5>
              <p className="card-text fs-4">25</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">🖱️ Total Clicks This Month</h5>
              <p className="card-text fs-4">12,345</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-info mb-3">
            <div className="card-body">
              <h5 className="card-title">👁️ Most Viewed Ad This Week</h5>
              <p className="card-text fs-5">"HealthCare Campaign"</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">💰 Total Revenue from Ads</h5>
              <p className="card-text fs-4">$8,500</p>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="alert alert-warning mt-4" role="alert">
        ⚠️ 3 ads are expiring within the next 7 days.
      </div>
      <div className="alert alert-info mt-3" role="alert">
        ℹ️ 5 new ad campaigns have been submitted for approval.
      </div>
      <div className="alert alert-danger mt-3" role="alert">
        ❌ 2 ad campaigns have been rejected due to policy violations.
      </div>
      <div className="alert alert-success mt-3" role="alert">
        ✅ 10 ad campaigns have been approved and are now live.
      </div>
    </div>
  );
}

export default MonitorAds;
