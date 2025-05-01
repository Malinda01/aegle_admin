import React from 'react';

function SystemStats() {
  return (
    <div className="container mt-5">
      <h1>System Statistics</h1>
      <p>View detailed analytics and system performance statistics here.</p>

      {/* Summary Cards Section */}
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">👥 Total Patients Registered</h5>
              <p className="card-text fs-4">5,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">🧑‍⚕️ Total Doctors</h5>
              <p className="card-text fs-4">120</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-info mb-3">
            <div className="card-body">
              <h5 className="card-title">🏥 Total Medical Suppliers</h5>
              <p className="card-text fs-4">45</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">🎯 Active Sponsors</h5>
              <p className="card-text fs-4">30</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-danger mb-3">
            <div className="card-body">
              <h5 className="card-title">📢 Total Ads Displayed Today</h5>
              <p className="card-text fs-4">150</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-secondary mb-3">
            <div className="card-body">
              <h5 className="card-title">💰 Total Commission Paid (This Month)</h5>
              <p className="card-text fs-4">$12,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SystemStats;
