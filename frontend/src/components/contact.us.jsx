// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Correct import of useNavigate

import '../css/contact.css';
import '../css/home.style.css'

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    phone: '',
    country: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:2030/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form data saved successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          jobTitle: '',
          phone: '',
          country: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        alert('Failed to submit the form data.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
    <div className="min-h-screen flex justify-center items-center p-4 bg-[url('../src/assets/img1.jpg')] bg-repeat-x bg-cover">
      <div className="max-w-4xl w-full grid grid-cols-2 sm:grid-cols-1 gap-8">
        <div className="p-2 rounded-lg shadow-2xl wrapper">
          <h2 className="text-2xl text-white font-extrabold text-center mb-4">Get In Touch</h2>
          <p className="mb-6 text-white text-center font-bold">
            Talk to our team about your enterprise needs.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 font-extrabold">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="p-2 wrapper bg-transparent rounded"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="p-2 wrapper bg-transparent rounded"
              />
            </div>
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full p-2 wrapper bg-transparent rounded"
            />
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              required
              className="w-full p-2 wrapper bg-transparent rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 wrapper bg-transparent rounded"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full p-2 wrapper bg-transparent rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 wrapper bg-transparent rounded"
            />
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-2 wrapper bg-transparent rounded"
            >
              <option value="" disabled>
                Pick a subject...
              </option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Support">Support</option>
              <option value="Feedback">Feedback</option>
            </select>
            <textarea
              name="message"
              placeholder="Tell us more about your enterprise needs..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 text-white rounded h-32 wrapper bg-transparent"
            ></textarea>
            <button
              type="submit"
              className="gold-button shine-button w-full wrapper text-xl font-bold p-2 rounded-lg hover:bg-gray-300"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="space-y-8 text-center">
          <div className="p-20 rounded-lg shadow-lg wrapper">
            <h3 className="text-white text-xl font-bold">Community support</h3>
            <p className="text-gray-300 my-4">
              Get help with your project from the community.
            </p>
            <button className="gold-button shine-button w-full text-white p-2 rounded-lg hover:bg-gray-600 wrapper">
              Join community
            </button>
            <p className='gold-button w-[100px] h-[40px] mt-5'><NavLink to="/"><span className='text-black text-base'>Home</span></NavLink></p>

          </div>
          <div className="p-20 rounded-lg shadow-lg wrapper">
            <h3 className="text-white text-xl font-bold">Account support</h3>
            <p className="text-gray-300 my-4">
              Chat with us to resolve account and billing issues.
            </p>
            <button className="gold-button shine-button w-full text-white p-2 rounded-lg hover:bg-gray-600 wrapper">
              Start chat
            </button>
          </div>
        </div>
      </div>
    </div>

 
    </>
  );
};

export default ContactUs;
