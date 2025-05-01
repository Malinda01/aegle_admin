import React, { useState } from 'react';

const PayCommissions = () => {
  const [formData, setFormData] = useState({
    sponsorId: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add payment processing logic here
    console.log('Payment Data:', formData);
  };

  return (
    <div className="container mt-5">
      <h2>Pay Commissions</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="sponsorId" className="form-label">Sponsor ID</label>
          <input 
            type="text" 
            className="form-control" 
            id="sponsorId" 
            name="sponsorId" 
            value={formData.sponsorId} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input 
            type="number" 
            className="form-control" 
            id="amount" 
            name="amount" 
            value={formData.amount} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Pay</button>
      </form>
    </div>
  );
};

export default PayCommissions;
