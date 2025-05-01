import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectPayment = () => {
  const navigate = useNavigate();

  const handleSponsorPayments = () => {
    navigate('/payments/sponsor'); // Navigate to the sponsor payments page
  };

  const handleSupplierPayments = () => {
    navigate('/payments/supplier'); // Navigate to the supplier payments page
  };

  return (
    <div className="container mt-5">
      <h1>Select Payment Type</h1>
      <p>Choose the type of payments you want to view:</p>
      <div className="row mt-4">
        {/* Sponsor Card */}
        <div className="col-md-6">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body text-center">
              <h5 className="card-title">Sponsor</h5>
              <p className="card-text">View and manage sponsor payments.</p>
              <button
                className="btn btn-light"
                onClick={handleSponsorPayments}
              >
                Payment
              </button>
            </div>
          </div>
        </div>

        {/* Supplier Card */}
        <div className="col-md-6">
          <div className="card text-white bg-success mb-3">
            <div className="card-body text-center">
              <h5 className="card-title">Supplier</h5>
              <p className="card-text">View and manage supplier payments.</p>
              <button
                className="btn btn-light"
                onClick={handleSupplierPayments}
              >
                Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPayment;
