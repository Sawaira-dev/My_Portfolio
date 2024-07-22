import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { CiLinkedin } from "react-icons/ci";


export const Contact = () => {
  return (
    <>
    <div className="container contact"
    data-aos="zoom in nut "
    data-aos-duration= "1000"
    >
      <h1 className='section-heading'>CONTACT ME</h1>
      <div className="contact-icons">
        <a href='https://github.com/Sawaira-dev' target='_blank' className="items"><FaGithub className='icons'/></a>
        <a href='https://www.linkedin.com/in/sawaira?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' className="items"><CiLinkedin className='icons'/></a>
        <a href='mailto:sawairasharif21@gmail.com' target='_blank' className="items"><CgMail className='icons'/></a>
      </div>
    </div>
    </>
  )
}
