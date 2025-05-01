import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditDoctor = () => {
  const { id } = useParams(); // Get doctor ID from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    contact: '',
    email: '',
  });

  useEffect(() => {
    // Fetch doctor details (replace with actual API call or localStorage)
    const doctors = JSON.parse(localStorage.getItem('approvedDoctors')) || [];
    const doctor = doctors.find((doc) => doc.id === parseInt(id));
    if (doctor) {
      setFormData(doctor);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update doctor details in localStorage (replace with actual API call)
    const doctors = JSON.parse(localStorage.getItem('approvedDoctors')) || [];
    const updatedDoctors = doctors.map((doc) =>
      doc.id === parseInt(id) ? { ...formData } : doc
    );
    localStorage.setItem('approvedDoctors', JSON.stringify(updatedDoctors));
    alert('Doctor profile updated successfully!');
    navigate('/doctors/list'); // Redirect to the doctor list page
  };

  return (
    <div className="container mt-5">
      <h2>Edit Doctor Profile</h2>
      <form onSubmit={handleSubmit} className="mt-4">
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
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default EditDoctor;
