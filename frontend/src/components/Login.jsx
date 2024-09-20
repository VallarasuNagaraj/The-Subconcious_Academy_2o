// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom'; // Use useNavigate instead of navigate
import '../css/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch('http://localhost:2030/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate('/'); // Navigate to the home page on successful login
      } else {
        setError(data.message); // Set error message to display
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <> 

      <div className='login_container'>
        <div className="wrapper1">
          <form onSubmit={handleSubmit}>
            <h2 className='text-3xl'>Login</h2>
            {error && <p className="error">{error}</p>}
            <div className="input-field">
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Enter your email</label>
            </div>
            <div className="input-field">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Enter your password</label>
            </div>
            <div className="forget">
              <label>
                <input type="checkbox" id="remember" />
                <p className='text-lg'>Remember me</p>
              </label>
              <NavLink className='text-lg' to="/forgot-password">Forgot password?</NavLink> {/* Use NavLink for routing */}
            </div>
            <button type="submit" className='gold-button shine-button text-lg'>Log In</button>
            <div className="register">
              <p className='text-lg'> Dont have an account? <NavLink to="/registration">Register</NavLink></p> {/* Use NavLink for routing */}
              <p className='gold-button w-[100px] h-[40px] mt-8'><NavLink to="/"><span className='text-black text-base'>Home</span></NavLink></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
