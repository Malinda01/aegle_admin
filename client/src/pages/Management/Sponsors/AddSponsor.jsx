import React, { useState } from 'react';

const AddSponsor = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save sponsor details
    console.log('Sponsor Data:', formData);
  };

  return (
    <div className="container mt-5">
      <h2>Add Sponsor</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="company" className="form-label">Company</label>
          <input 
            type="text" 
            className="form-control" 
            id="company" 
            name="company" 
            value={formData.company} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">Contact</label>
          <input 
            type="text" 
            className="form-control" 
            id="contact" 
            name="contact" 
            value={formData.contact} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Sponsor</button>
      </form>
    </div>
  );
};

export default AddSponsor;
