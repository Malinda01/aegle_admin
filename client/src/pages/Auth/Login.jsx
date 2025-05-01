import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  return (
    <div className="container mt-5">
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "500px", margin: "0 auto" }} // Centered and reduced width
      >
        <h2 className="mb-4 text-center">Login</h2>
        <input className="form-control mb-3" placeholder="Email" />
        <div className="input-group mb-3">
          <input
            className="form-control"
            placeholder="Password"
            type={showPassword ? "text" : "password"} // Toggle between text and password
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => setShowPassword(!showPassword)} // Toggle state
          >
            {showPassword ? "Hide" : "Show"} {/* Button text changes */}
          </button>
        </div>
        <button
          className="btn btn-primary w-100 mb-3"
          onClick={() => navigate('/home')}
        >
          Login
        </button>
        <p className="text-center">
          Don't have an account?{" "}
          <button
            className="btn btn-link p-0"
            onClick={() => navigate('/register')}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
