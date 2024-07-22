import React, { useEffect, useRef } from 'react';
import ProfilePic from '../assets/profile_pic.png';
import Resume from '../pdf/Sawaira_Cv.pdf'
import Typed from 'typed.js';

export const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {

    const options = {
      strings: ["Welcome to my profile", "My Name is Sawaira", " I'm Front-End developer."],
      typedSpeed: 50,
      backSpeed: 50,
      loop: true
    }

    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <>
      <div id='home' className="home_container">
        <div className="text fade-up-right"
        // data-aos="fade-down"
        data-aos-durations="1000"
        >
          <h1 ref={typedRef} className='hero-section-text'>

          </h1>
          <a href={Resume} download='Sawaira_Resume' className="btn btn-outline-warning">Download Resume</a>
        </div>
        <img src={ProfilePic} alt="Profile Picture" className="profile"
         data-aos="fade-up-left"
         data-aos-durations="1000"
         />
      </div>
    </>
  );
};
