import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header({ toggleSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Simulate fetching logged-in user data (replace with actual logic)
    const user = localStorage.getItem('loggedInUser'); // Example: Fetch from localStorage
    setLoggedInUser(user);
  }, []);

  const hideButtons = ['/login', '/register', '/', '/welcome'];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <button
        className="navbar-toggler me-3 d-lg-none"
        type="button"
        onClick={toggleSidebar}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <span className="navbar-brand">Aegle Admin</span>
      {!hideButtons.includes(location.pathname) && (
        <div className="d-flex ms-auto align-items-center">
          <a className="nav-link text-white me-3" href="/home">Home</a>
          <a 
            className="nav-link text-white me-3" 
            onClick={(e) => {
              e.preventDefault();
              navigate('/profile/view'); // Navigate to the ViewProfile page
            }} 
            title={loggedInUser ? `Logged in as: ${loggedInUser}` : ''}
          >
            Profile
          </a>
          {loggedInUser && (
            <span className="text-white ms-2">Logged in as: {loggedInUser}</span>
          )}
        </div>
      )}
    </nav>
  );
}

export default Header;
