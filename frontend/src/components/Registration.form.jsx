// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate,NavLink } from 'react-router-dom'; // Correct import of useNavigate
import '../css/Registration.css';
import '../css/home.style.css';

function Registration() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState('');
  const [designation, setDesignation] = useState('');

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:2030/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password, age, designation }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        navigate('/login'); // Navigate to the login page on successful registration
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error registering:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
     
    <div className="min-h-screen flex justify-center items-center p-4 bg-[url('../src/assets/img1.jpg')] bg-repeat-x bg-cover">
      <div className="wrapper3">
        <form onSubmit={handleSubmit}>
          <h2 className='text-2xl'>Register and Get a New Account</h2>
          
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName} // Use state variable
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label>Enter your first name</label>
          </div>

          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName} // Use state variable
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <label>Enter your last name</label>
          </div>

          <div className="input-field">
            <input
              type="text"
              name="email"
              value={email} // Use state variable
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Enter your email</label>
          </div>

          <div className="input-field">
            <input
              type="password"
              name="password"
              value={password} // Use state variable
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Enter your password</label>
          </div>

          <div className="input-field">
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword} // Use state variable
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label>Confirm your password</label>
          </div>

          <div className="input-field">
            <input
              type="number"
              name="age"
              value={age} // Use state variable
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <label>Enter your age</label>
          </div>

          <div className="input-field">
            <select
              name="designation"
              value={designation} // Use state variable
              onChange={(e) => setDesignation(e.target.value)}
              required
              className="w-full p-2 bg-transparent rounded"
            >
              <option value="" disabled>Select your current designation</option>
              <option value="student">Student</option>
              <option value="searching">Searching for work</option>
              <option value="part-time">Part-time worker</option>
              <option value="working">Working</option>
            </select>
          </div>

          <button type="submit" className='gold-button shine-button text-lg'>Register</button>         

          <div className="login">
            <p className='text-lg'>Already have an account? <a href="#">Login</a></p>
            <p className='gold-button w-[100px] h-[40px] mt-1'><NavLink to="/"><span className='text-black text-base'>Home</span></NavLink></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
