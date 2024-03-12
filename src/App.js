import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [registration, setRegistration] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [login, setLogin] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  const handleRegistrationChange = (e) => {
    setRegistration({
      ...registration,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Data:', registration);
    // You can add logic here to send registration data to the server
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', login);
    // You can add logic here to send login data to the server
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Registration</h2>
              <form onSubmit={handleRegistrationSubmit}>
                <div className="form-group">
                  <label>Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={registration.username}
                    onChange={handleRegistrationChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={registration.email}
                    onChange={handleRegistrationChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={registration.password}
                    onChange={handleRegistrationChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Register</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <form onSubmit={handleLoginSubmit}>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    name="loginEmail"
                    value={login.loginEmail}
                    onChange={handleLoginChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="loginPassword"
                    value={login.loginPassword}
                    onChange={handleLoginChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
