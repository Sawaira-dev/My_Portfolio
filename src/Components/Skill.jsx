import React from 'react';
import img1 from '../assets/skills/html.png';
import img2 from '../assets/skills/css.png';
import img3 from '../assets/skills/javascript.png';
import img4 from '../assets/skills/react.png';
import img9 from '../assets/skills/figma.png';
import img10 from '../assets/skills/Canva_logo..png'

const skillArray = [
  {
    title: "HTML",
    imageSrc: img1
  },
  {
    title: "CSS",
    imageSrc: img2
  },
  {
    title: "JavaScript",
    imageSrc: img3
  },
  {
    title: "React",
    imageSrc: img4
  },
  {
    title: "Figma",
    imageSrc: img9
  },
  {
    title: "Canva",
    imageSrc: img10
  }
];

export const Skill = () => {
  return (
    <div id='skills' className="skills">
      <h1 className='section-heading'>SKILLS</h1>
      <div className="items"
           data-aos="flip-left"
           data-aos-duration="1000">
        {skillArray.map((data, index) => (
          <div key={index} className="item">
            <img src={data.imageSrc} alt={data.title} />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
