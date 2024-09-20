/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import '../css/slider.css';

function Slider() {
  const { user, logout } = useContext(AuthContext); // Get user details and logout function
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning] = useState(true);
  const navigate = useNavigate();

  const images = [
    './src/assets/img3.jpg',
    './src/assets/img1.jpg',
    './src/assets/image.png',
    './src/assets/img4.jpg',
  ];

  const slideData = [
    {
      author: 'VAllARASU',
      title: 'DESIGN SLIDER',
      topic: 'TSA',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi...',
    },
    {
      author: 'VAllARASU',
      title: 'DESIGN SLIDER',
      topic: 'TSA',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi...',
    },
    {
      author: 'VAllARASU',
      title: 'DESIGN SLIDER',
      topic: 'TSA',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi...',
    },
    {
      author: 'VAllARASU',
      title: 'DESIGN SLIDER',
      topic: 'TSA',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi...',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let sliderInterval;
    if (isRunning) {
      sliderInterval = setInterval(() => {
        nextSlide();
      }, 9000);
    }

    return () => {
      clearInterval(sliderInterval);
    };
  }, [isRunning, nextSlide]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <>
      <header>
        <img className="w-32" src="./src/assets/logo.png" alt="Logo" />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About.us">About Us</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/Candidate.list">Placement Candidates</NavLink>
          <NavLink to="/Contact.us">Contact Us</NavLink>
        </nav>
        <span className='flex gap-4'>
          {user ? (
            <>
              <span>Welcome, {user.name}</span>
              <button 
                className='w-[90px] h-[30px] gold-button shine-button nav_bt1'
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button 
                className='w-[90px] h-[30px] gold-button shine-button'
                onClick={() => handleNavigation('/login')}
              >
                Sign in
              </button>
              <button 
                className='w-[90px] h-[30px] gold-button shine-button'
                onClick={() => handleNavigation('/registration')}
              >
                Sign up
              </button>
            </>
          )}
        </span>
      </header>

      {/* Carousel */}
      <div className="carousel">
        <div className="list">
          <div className="item">
            <img src={images[currentIndex]} alt="Slider" />
            <div className="content">
              <div className="author">{slideData[currentIndex].author}</div>
              <div className="title">{slideData[currentIndex].title}</div>
              <div className="topic">{slideData[currentIndex].topic}</div>
              <div className="des">{slideData[currentIndex].description}</div>
              <div className="buttons">
                <button className='gold-button shine-button'>SEE MORE</button>
                <button className='gold-button shine-button'>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>

        <div className="thumbnail">
          {images.map((image, index) => (
            <div
              className={`item ${index === currentIndex ? 'active' : ''}`}
              key={index}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={image} alt={`Thumbnail ${index}`} />
              <div className="content">
                <div className="title">{slideData[index].title}</div>
                <div className="description">{slideData[index].description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev" onClick={prevSlide}>
            &lt;
          </button>
          <button id="next" onClick={nextSlide}>
            &gt;
          </button>
        </div>

        <div className="time" />
      </div>
    </>
  );
}

export default Slider;
