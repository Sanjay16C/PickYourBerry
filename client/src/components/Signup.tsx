import {useNavigate} from "react-router-dom";
import {useState} from "react";
import api from "../api/axios";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e: React.SubmitEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await api.post("/auth/signup", {
        username,
        email,
        password,
      });

      alert("Account created successfully!");
      navigate("/");
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="brand">
          <h1>PickYourBerry</h1>
        </div>

        <div className="form-header">
          <h3
            style={{
              margin: 0,
              color: "purple",
              fontFamily: "Papyrus",
              fontSize: "16px",
              textAlign: "center",
              letterSpacing: "2px",
            }}
          >
            Sign to continue to your account
          </h3>
        </div>

        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="signup-name">Full Name</label>
            <input
              id="signup-name"
              type="text"
              placeholder="Enter your full name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-email">Email</label>
            <input
              id="signup-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-confirm-password">
              Confirm Password
            </label>
            <input
              id="signup-confirm-password"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button className="primary-button" type="submit">
            Create account
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="account-message">
          <p>Already have an account?</p>

          <button
            className="secondary-button"
            type="button"
            onClick={() => navigate("/")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;