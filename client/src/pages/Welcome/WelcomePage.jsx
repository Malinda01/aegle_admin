import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register"); // Navigate to the Register page
  };

  const handleLogin = () => {
    navigate("/login"); // Navigate to the Login page
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center flex-grow-1"
      style={{
        backgroundImage: 'url("https://via.placeholder.com/1920x1080")', // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "4rem", // Adjust padding as needed
      }}
    >
      <div
        className="welcome-page container text-center p-5 shadow rounded bg-white"
        style={{ maxWidth: "800px", padding: "2rem", marginBottom: "10rem" }} // Increased bottom margin
      >
        <h1
          className="mb-4"
          style={{ fontSize: "3rem", fontWeight: "bold", color: "#007bff" }}
        >
          Welcome to Aegle
        </h1>
        <p
          className="mb-4"
          style={{ fontSize: "1.5rem", color: "#6c757d" }}
        >
          "Powering Healthcare Operations with Precision"
             Manage doctors, sponsors, suppliers, and system insights — all from your centralized admin hub.
        </p>
        <div className="d-flex justify-content-center">
          <button
            onClick={handleRegister}
            className="btn btn-primary btn-lg me-3"
          >
            Register
          </button>
          <button
            onClick={handleLogin}
            className="btn btn-secondary btn-lg me-3"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
