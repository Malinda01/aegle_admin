import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PayCommissions = () => {
  const navigate = useNavigate();

  const [doctors] = useState([
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiology', email: 'john.doe@example.com' },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Neurology', email: 'jane.smith@example.com' },
    { id: 3, name: 'Dr. Emily Davis', specialty: 'Pediatrics', email: 'emily.davis@example.com' },
    { id: 4, name: 'Dr. Michael Brown', specialty: 'Orthopedics', email: 'michael.brown@example.com' },
    { id: 5, name: 'Dr. Sarah Wilson', specialty: 'Dermatology', email: 'sarah.wilson@example.com' },
  ]);

  const handlePayNow = (doctorId) => {
    alert(`Pay Now clicked for Doctor ID: ${doctorId}`);
    // Add logic to navigate to payment form or process payment
  };

  const handlePaymentHistory = (doctorId) => {
    navigate(`/commissions/history?doctorId=${doctorId}`); // Navigate to the CommissionHistory page with doctorId as a query parameter
  };

  return (
    <div className="container mt-5">
      <h2>Pay Commissions</h2>
      <p>Select a doctor to pay their commission or view their payment history:</p>
      <div className="row mt-4">
        {doctors.map((doctor) => (
          <div className="col-md-4" key={doctor.id}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{doctor.name}</h5>
                <p className="card-text">
                  <strong>Specialty:</strong> {doctor.specialty}
                </p>
                <p className="card-text">
                  <strong>Email:</strong> {doctor.email}
                </p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-primary"
                    onClick={() => handlePayNow(doctor.id)}
                  >
                    Pay Now
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handlePaymentHistory(doctor.id)}
                  >
                    Payment History
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayCommissions;
