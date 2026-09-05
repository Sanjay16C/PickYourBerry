import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate= useNavigate()
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

        <form>
          <div className="form-group">
            <label htmlFor="signup-name">Full Name</label>
            <input
              id="signup-name"
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-email">Email</label>
            <input
              id="signup-email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              type="password"
              placeholder="Create a password"
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
            onClick={()=> navigate("/")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
