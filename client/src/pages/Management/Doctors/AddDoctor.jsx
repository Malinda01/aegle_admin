import React, { useState } from 'react';

const AddDoctor = () => {
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    contact: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save doctor details
    console.log('Doctor Data:', formData);
  };

  return (
    <div className="container mt-5">
      <h2>Add Doctor</h2>
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
          <label htmlFor="specialization" className="form-label">Specialization</label>
          <input 
            type="text" 
            className="form-control" 
            id="specialization" 
            name="specialization" 
            value={formData.specialization} 
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
        <button type="submit" className="btn btn-primary">Add Doctor</button>
      </form>
    </div>
  );
};

export default AddDoctor;
