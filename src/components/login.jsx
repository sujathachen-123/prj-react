import React, { useState } from 'react';
import '../components/project/login.css'; // Assuming you have a CSS file for styling
import img1 from '../components/images/img-1.webp'; // Import the image

const App = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign In
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in with:', formData);
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      console.log('Signing up with:', formData);
    }
  };

  const handleGuestLogin = () => {
    console.log('Logging in as Guest');
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={img1} alt="Description" className="side-image" />
      </div>
      <div className="form-container">
        <h2>{isLogin ? 'Log In' : 'Sign up'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <button type="submit" className="btn">
            {isLogin ? 'Log In' : 'Sign up'}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign up' : 'Log In'}
          </button>
        </p>

        {isLogin && (
          <button
            type="button"
            className="btn guest-login"
            onClick={handleGuestLogin}
          >
            Guest Login
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
