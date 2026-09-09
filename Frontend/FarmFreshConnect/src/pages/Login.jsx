import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );

      console.log("Login successful:", response.data);

      // Save JWT token
      localStorage.setItem("token", response.data.token);

      // Save user information
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      // Go to Home page
      navigate("/");

    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        setError(
          error.response.data.message || "Invalid email or password"
        );
      } else {
        setError("Unable to connect to server");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-icon">🌱</div>

        <h1>Welcome Back</h1>

        <p className="auth-description">
          Login to your FarmFresh Connect account
        </p>

        {error && (
          <p style={{ color: "red", marginBottom: "10px" }}>
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="auth-button"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="account-text">
          Don't have an account?{" "}
          <Link to="/signup">Create Account</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;