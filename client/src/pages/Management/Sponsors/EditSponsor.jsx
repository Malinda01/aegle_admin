import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditSponsor = () => {
  const { id } = useParams(); // Get sponsor ID from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    email: '',
  });

  useEffect(() => {
    // Fetch sponsor details (replace with actual API call or localStorage)
    const sponsors = JSON.parse(localStorage.getItem('approvedSponsors')) || [];
    const sponsor = sponsors.find((s) => s.id === parseInt(id));
    if (sponsor) {
      setFormData(sponsor);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update sponsor details in localStorage (replace with actual API call)
    const sponsors = JSON.parse(localStorage.getItem('approvedSponsors')) || [];
    const updatedSponsors = sponsors.map((s) =>
      s.id === parseInt(id) ? { ...formData } : s
    );
    localStorage.setItem('approvedSponsors', JSON.stringify(updatedSponsors));
    alert('Sponsor profile updated successfully!');
    navigate('/sponsors/list'); // Redirect to the sponsor list page
  };

  return (
    <div className="container mt-5">
      <h2>Edit Sponsor Profile</h2>
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
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default EditSponsor;
