import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = ({ isVisible }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here (e.g., clearing tokens, user data)
    console.log('User logged out');
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div
      className={`sidebar bg-light shadow-sm ${isVisible ? 'd-block' : 'd-none d-lg-block'}`}
      style={{
        width: '250px',
        height: '100vh', // Ensure the sidebar spans the full height
        overflowY: 'auto',
        position: 'fixed',
        top: 0, // Align with the top of the viewport
        left: 0,
        zIndex: 1050,
      }}
    >
      <h4 className="text-primary text-center py-3 border-bottom">Aegle Admin</h4>
      <ul className="nav flex-column flex-grow-1">
        <li className="nav-item">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? 'nav-link text-dark active' : 'nav-link text-dark')}
          >
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/profile/view"
            className={({ isActive }) => (isActive ? 'nav-link text-dark active' : 'nav-link text-dark')}
          >
            View Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/doctors/manage"
            className={({ isActive }) => (isActive ? 'nav-link text-dark active' : 'nav-link text-dark')}
          >
            Manage Doctors
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/sponsors/manage"
            className={({ isActive }) => (isActive ? 'nav-link text-dark active' : 'nav-link text-dark')}
          >
            Manage Sponsors
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/suppliers/manage"
            className={({ isActive }) => (isActive ? 'nav-link text-dark active' : 'nav-link text-dark')}
          >
            Manage Suppliers
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/ads/monitor"
            className={({ isActive }) => (isActive ? 'nav-link text-dark active' : 'nav-link text-dark')}
          >
            Monitor Ads
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/analytics/system-stats"
            className={({ isActive }) => (isActive ? 'nav-link text-dark active' : 'nav-link text-dark')}
          >
            System Stats
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/payments/select"
            className={({ isActive }) => (isActive ? 'nav-link text-dark active' : 'nav-link text-dark')}
          >
            Payments
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/commissions/pay"
            className={({ isActive }) => (isActive ? 'nav-link text-dark active' : 'nav-link text-dark')}
          >
            Commissions
          </NavLink>
        </li>
      </ul>
      <button
        className="btn btn-danger mt-auto w-100"
        style={{
          position: 'relative', // Ensure it stays within the sidebar
          bottom: 0,
        }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
