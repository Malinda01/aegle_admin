import React, { useState } from 'react';

const AdScheduleForm = () => {
  const [formData, setFormData] = useState({
    ad: '',
    startDateTime: '',
    endDateTime: '',
    frequency: 'Once',
    page: '',
    position: '',
  });

  const ads = [
    { id: 1, title: 'HealthCare Campaign' },
    { id: 2, title: 'Wellness Promo' },
    { id: 3, title: 'LifeCare Ad' },
  ];

  const pages = ['Home', 'Dashboard', 'Profile', 'Analytics'];
  const positions = ['Header', 'Sidebar', 'Fullscreen'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ad Schedule Submitted:', formData);
    alert('Ad schedule saved successfully!');
    // Add logic to save the schedule to the backend or localStorage
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white">
          <h1 className="h4 mb-0">Ad Scheduling Form</h1>
        </div>
        <div className="card-body">
          <p className="text-muted">Configure how and when each ad shows.</p>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
              <label htmlFor="ad" className="form-label">Select Ad</label>
              <select
                id="ad"
                name="ad"
                className="form-select"
                value={formData.ad}
                onChange={handleChange}
              >
                <option value="">-- Select an Ad --</option>
                {ads.map((ad) => (
                  <option key={ad.id} value={ad.title}>
                    {ad.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="startDateTime" className="form-label">Start Date & Time</label>
              <input
                type="datetime-local"
                id="startDateTime"
                name="startDateTime"
                className="form-control"
                value={formData.startDateTime}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endDateTime" className="form-label">End Date & Time</label>
              <input
                type="datetime-local"
                id="endDateTime"
                name="endDateTime"
                className="form-control"
                value={formData.endDateTime}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="frequency" className="form-label">Frequency</label>
              <select
                id="frequency"
                name="frequency"
                className="form-select"
                value={formData.frequency}
                onChange={handleChange}
              >
                <option value="Once">Once</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Custom">Custom</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="page" className="form-label">Page to Display</label>
              <select
                id="page"
                name="page"
                className="form-select"
                value={formData.page}
                onChange={handleChange}
              >
                <option value="">-- Select a Page --</option>
                {pages.map((page, index) => (
                  <option key={index} value={page}>
                    {page}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="position" className="form-label">Display Position</label>
              <select
                id="position"
                name="position"
                className="form-select"
                value={formData.position}
                onChange={handleChange}
              >
                <option value="">-- Select a Position --</option>
                {positions.map((position, index) => (
                  <option key={index} value={position}>
                    {position}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">Save Schedule</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdScheduleForm;
