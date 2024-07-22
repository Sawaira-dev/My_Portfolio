import React from 'react'
import certificate from './data/certificate.json'

export default function Certificate() {
  return (
    <>
      <div id='certificates' className="container certificate ex" >
        <h1 className='section-heading'>CERTIFICATES</h1>
        {certificate.map((data) => {
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
                  <h4> <span style={{ color: "yellowgreen" }}>{data.startDate} </span> <span style={{ color: "yellow" }}> {""}{data.location}</span></h4>
                  <span style={{ color: "yellow" }}>

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
