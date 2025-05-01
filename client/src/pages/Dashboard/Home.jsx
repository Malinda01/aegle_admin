import React from 'react';

const Home = () => (
  <div className="container mt-5">
    <h2>Welcome, Admin!</h2>
    <p className="text-muted">Here is a quick overview of the system's current status:</p>
    <div className="row mt-4">
      {/* Quick Stats Cards */}
      <div className="col-md-4">
        <div className="card text-white bg-primary mb-3">
          <div className="card-body">
            <h5 className="card-title">👨‍⚕️ Approved Doctors</h5>
            <p className="card-text fs-4">120</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-white bg-success mb-3">
          <div className="card-body">
            <h5 className="card-title">💊 Medical Suppliers</h5>
            <p className="card-text fs-4">45</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-white bg-info mb-3">
          <div className="card-body">
            <h5 className="card-title">🧑‍💼 Sponsors</h5>
            <p className="card-text fs-4">30</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-white bg-warning mb-3">
          <div className="card-body">
            <h5 className="card-title">📈 Active Advertisements</h5>
            <p className="card-text fs-4">15</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-white bg-danger mb-3">
          <div className="card-body">
            <h5 className="card-title">💰 Commission Paid This Month</h5>
            <p className="card-text fs-4">$12,000</p>
          </div>
        </div>
      </div>
    </div>

    {/* Upcoming Approvals or Deadlines */}
    <div className="mt-5">
      <h3>Upcoming Approvals & Deadlines</h3>
      <div className="list-group mt-3">
        <div className="list-group-item">
          <h5 className="mb-1">Pending Doctor Verifications</h5>
          <p className="mb-1">5 verifications pending approval.</p>
          <small>Due by: 2023-10-15</small>
        </div>
        <div className="list-group-item">
          <h5 className="mb-1">Sponsor Contracts Nearing Expiry</h5>
          <p className="mb-1">3 contracts expiring soon.</p>
          <small>Due by: 2023-10-20</small>
        </div>
        <div className="list-group-item">
          <h5 className="mb-1">Supplier License Renewals</h5>
          <p className="mb-1">2 licenses due for renewal.</p>
          <small>Due by: 2023-10-25</small>
        </div>
        <div className="list-group-item">
          <h5 className="mb-1">New Doctor Applications</h5>
          <p className="mb-1">8 new applications awaiting review.</p>
          <small>Due by: 2023-10-18</small>
        </div>
        <div className="list-group-item">
          <h5 className="mb-1">Upcoming Advertisement Campaigns</h5>
          <p className="mb-1">2 campaigns scheduled to start soon.</p>
          <small>Start Date: 2023-10-22</small>
        </div>
        <div className="list-group-item">
          <h5 className="mb-1">System Maintenance</h5>
          <p className="mb-1">Scheduled maintenance for system updates.</p>
          <small>Scheduled for: 2023-10-30</small>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
