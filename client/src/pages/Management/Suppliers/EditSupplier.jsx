import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditSupplier = () => {
  const { id } = useParams(); // Get supplier ID from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    email: '',
  });

  useEffect(() => {
    // Fetch supplier details (replace with actual API call or localStorage)
    const suppliers = JSON.parse(localStorage.getItem('approvedSuppliers')) || [];
    const supplier = suppliers.find((s) => s.id === parseInt(id));
    if (supplier) {
      setFormData(supplier); // Populate form fields with supplier details
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update supplier details in localStorage (replace with actual API call)
    const suppliers = JSON.parse(localStorage.getItem('approvedSuppliers')) || [];
    const updatedSuppliers = suppliers.map((s) =>
      s.id === parseInt(id) ? { ...formData } : s
    );
    localStorage.setItem('approvedSuppliers', JSON.stringify(updatedSuppliers));
    alert('Supplier profile updated successfully!');
    navigate('/suppliers/list'); // Redirect to the supplier list page
  };

  return (
    <div className="container mt-5">
      <h2>Edit Supplier Profile</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name} // Display retrieved name
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
            value={formData.company} // Display retrieved company
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
            value={formData.contact} // Display retrieved contact
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
            value={formData.email} // Display retrieved email
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default EditSupplier;
