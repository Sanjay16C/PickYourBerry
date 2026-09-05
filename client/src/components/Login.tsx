import { useNavigate } from "react-router-dom";
function Login() {
    const navigate= useNavigate();
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
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="forgot-password">
            <a href="#forgot-password">Forgot password?</a>
          </div>

          <button className="primary-button" type="submit">
            Sign in
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="account-message">
          <p>Don't have an account?</p>
          <button
            className="secondary-button"
            type="button"
            onClick={() => navigate("/signup")} >
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
