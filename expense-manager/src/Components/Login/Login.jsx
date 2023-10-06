import { useState } from "react";
import { authenticate } from "../../Services/AuthService";
import "./Login.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  function handleUsername(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    let loginStatus = authenticate(userName, password);
    setError(!loginStatus);
    setSuccess(loginStatus);
    setTimeout(() => navigate("/home/1"), 5000);
  }
  return (
    <div>
      {!success && !error && (
        <div className="col-sm-12 mb-4">
          <span className="alert alert-warning">
            Please enter your credentials
          </span>
        </div>
      )}
      {success && (
        <div className="col-sm-12 mb-4">
          <span className="alert alert-success">
            please wait u will be redirected or{" "}
            <Link to="/home">Click here</Link>
          </span>
        </div>
      )}
      {error && (
        <div className="col-sm-12 mb-4">
          <span className="alert alert-danger">
            Something went wrong please heck username/password
          </span>
        </div>
      )}
      <form className="mx-auto col-10 col-md-8 col-lg-6">
        <div className="form-group row mb-2">
          <label className="col-sm-2 col-form-label ">Username</label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control-plaintext  border-bottom border-2 ps-2"
              id="username"
              value={userName}
              placeholder="admin/user"
              onChange={handleUsername}
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-6">
            <input
              type="password"
              className="form-control-plaintext  border-bottom border-2 ps-2"
              id="password"
              value={password}
              placeholder="password"
              onChange={handlePassword}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
