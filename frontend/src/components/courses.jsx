// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/home.style.css";
import Slider from './slider';
import Footer from './footer';

function Course() {
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleEnroll = () => {
    setEnrolled(true);
    setTimeout(() => {
      setEnrolled(false);
    }, 5000); // Hide the message after 5 seconds
  };

  return (
    <>
      <Slider />
      <div className="font-sans">
        {/* Hero Section */}
        <section className="text-center py-16 w-[80%] mx-auto">
          <h1 className="text-6xl font-bold font_style">
            Together Towards <span className='text-primary_color_gold font_style'>Excellence</span>
          </h1>
          <p className="mt-4">We are Developers, associate teams, or Designers from the top MNC IT Sectors.</p>
          <button className="mt-8 px-6 py-3 rounded gold-button shine-button">Learn More</button>
        </section>

        {/* Main Image */}
        <section className="py-8 sm:w-[80%]  sm:mx-auto">
          <img src="./src/assets/bg1.png" alt="Main" className="w-[1400px] sm:h-[300px] h-[600px] mx-auto rounded-[10px]" />
        </section>

        {/* Info Section */}
        <section className="mt-[100px] sm:w-[100%] px-32 sm:px-0">
          <div className="mx-auto text-center">
            <div className="grid grid-cols-1 gap-8 sm:w-[80%] sm:mx-auto">
              <div className="p-12 rounded shadow">
                <h3 className="text-2xl font-bold">Developers and Designers</h3>
                <p className='text-base sm:mt-3' >Selected from the best, from the top MNC IT Companies</p>
              </div>
              <div className="p-12 rounded shadow">
                <h3 className="text-2xl font-bold">Over 4000 hours of classes</h3>
                <p className='text-base sm:mt-3'>A significant volume of classes to ensure maximum success.</p>
              </div>
              <div className="p-12 rounded shadow">
                <h3 className="text-2xl font-bold sm:ml-[-10px]">Over 200 students supported</h3>
                <p className='text-base mt-3'>Individual attention for each student.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-32 sm:mt-12">
          <div className="mx-auto px-32">
            <h2 className="text-5xl font-bold text-center font_style ">
              Our Course <span className='text-primary_color_gold font_style'>Offerings</span>
            </h2>
            <div className="grid grid-cols-3 sm:text-center sm:w-[300px] sm:ml-[-80px] sm:grid-cols-1 gap-8 mt-8">
              {/* Course Cards */}
              <div className="shadow-md rounded-lg border-2 " data-aos="zoom-in-up">
                <img src="./src/assets/mern.webp" alt="MERN Stack Developer" className="w-full  h-48 object-fill" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">MERN Stack Developer</h3>
                  <p className="mt-2">Course description here. (21h)</p>
                  <button
                    className="mt-4 px-4 py-2 gold-button shine-button rounded"
                    onClick={handleEnroll}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
              <div className="shadow-md rounded-lg border-2 overflow-hidden" data-aos="zoom-in-up">
                <img src="./src/assets/mean.webp" alt="MEAN Stack Developer" className="w-full h-48 object-fill" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">MEAN Stack Developer</h3>
                  <p className="mt-2">Course description here. (21h)</p>
                  <button
                    className="mt-4 px-4 py-2 gold-button shine-button rounded"
                    onClick={handleEnroll}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
              <div className="shadow-md rounded-lg border-2 overflow-hidden" data-aos="zoom-in-up">
                <img src="./src/assets/python.webp" alt="Python Developer" className="w-full h-48 object-fill" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">Python Developer</h3>
                  <p className="mt-2">Course description here. (21h)</p>
                  <button
                    className="mt-4 px-4 py-2 gold-button shine-button rounded"
                    onClick={handleEnroll}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
              <div className="shadow-md rounded-lg border-2 overflow-hidden" data-aos="zoom-in-up">
                <img src="./src/assets/java.webp" alt="Java Developer" className="w-full h-48 object-fill" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">Java Developer</h3>
                  <p className="mt-2">Course description here. (21h)</p>
                  <button
                    className="mt-4 px-4 py-2 gold-button shine-button rounded"
                    onClick={handleEnroll}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
              <div className="shadow-md rounded-lg border-2 overflow-hidden" data-aos="zoom-in-up">
                <img src="./src/assets/ux.webp" alt="UI/UX Designer" className="w-full h-48 object-fill" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">UI/UX Designer</h3>
                  <p className="mt-2">Course description here. (21h)</p>
                  <button
                    className="mt-4 px-4 py-2 gold-button shine-button rounded"
                    onClick={handleEnroll}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
              <div className="shadow-md rounded-lg border-2 overflow-hidden" data-aos="zoom-in-up">
                <img src="./src/assets/game.webp" alt="Game Designer" className="w-full h-48 object-fill" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">Game Designer</h3>
                  <p className="mt-2">Course description here. (21h)</p>
                  <button
                    className="mt-4 px-4 py-2 gold-button shine-button rounded"
                    onClick={handleEnroll}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
              <div className="shadow-md rounded-lg border-2 overflow-hidden" data-aos="zoom-in-up">
                <img src="./src/assets/cyber.webp" alt="Cyber Security" className="w-full h-48 object-fill" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">Cyber Security</h3>
                  <p className="mt-2">Course description here. (21h)</p>
                  <button
                    className="mt-4 px-4 py-2 gold-button shine-button rounded"
                    onClick={handleEnroll}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
              <div className="shadow-md rounded-lg border-2 overflow-hidden" data-aos="zoom-in-up">
                <img src="./src/assets/graphic.webp" alt="Graphic Designer" className="w-full h-48 object-fill" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">Graphic Designer</h3>
                  <p className="mt-2">Course description here. (21h)</p>
                  <button
                    className="mt-4 px-4 py-2 gold-button shine-button rounded"
                    onClick={handleEnroll}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
              <div className="shadow-md rounded-lg border-2 overflow-hidden" data-aos="zoom-in-up">
                <img src="./src/assets/javascript.webp" alt="Javascript Beginner to Advanced" className="w-full h-48 object-fill" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">Javascript Beginner to Advanced</h3>
                  <p className="mt-2">Course description here. (21h)</p>
                  <button
                    className="mt-4 px-4 py-2 gold-button shine-button rounded"
                    onClick={handleEnroll}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Message */}
        {enrolled && (
          <div className="fixed top-0 left-0 right-0 p-4 bg-green-500 text-white text-center">
            Successfully Enrolled!
          </div>
        )}

      </div>
      <br /><br />

      <Footer />
    </>
  );
}

export default Course;
