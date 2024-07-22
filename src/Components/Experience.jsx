import React from 'react'
import experience from './data/experience.json'

export const Experience = () => {
  return (
    <>
      <div id='experience' className="container ex">
        <h1 className='section-heading'>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div key={data.id} className="ex_items text-center my-5"
              data-aos="zoom-in"
              data-aos-duration="1000"
              >
                <div className="left">
                  {/* <img src="" alt="" className="ex_icon" /> */}
                  <h1 style={{ color: "red" }} className='card-heading'>{data.imageSrc}</h1>
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4> <span style={{ color: "yellowgreen" }}>{data.startDate} {""}{data.endDate}</span> <span style={{ color: "yellow" }}> {""}{data.location}</span></h4>
                  <span style={{ color: "yellow" }}>
                    <h5>{data.experiences[0]}</h5>
                    <h5>{data.experiences[1]}</h5>
                  </span>
                </div>
              </div>

            </>
          )
        })}
      </div>
    </>
  )
}
