// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Course from './components/courses';
import About from './components/About.us';
import Contact from './components/Contact.us';
import CandidateGrid from './components/Candidate.list'
import Login from './components/Login';
import Registration from './components/Registration.form';
 
function App(){
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About.us" element={<About />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/Contact.us" element={<Contact />} />
            <Route path="/Candidate.list" element={<CandidateGrid />} />      
            <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
         </Routes>
      </>
   );
};
 
export default App;