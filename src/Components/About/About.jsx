import React from 'react'
import "./About.css"

function About() {
  return (
    <div id='about'>
      <div className="leftabout">
          <div className="cricle-line">
            <div className="cricle"></div>
            <div className="line"></div>
            <div className="cricle"></div>
            <div className="line"></div>
            <div className="cricle"></div>
           
          </div>
      </div>
      <div className="aboutdetail">
        <div className="personalinfo">
          <h1>Personal Info</h1>
          <ul>
            <li>
              <span>Name</span>: Muhammad Anwar ul Haq
            </li>
            <li>
              <span>Contact</span>: 03090870389
            </li>
            <li>
              <span>Email</span>: muhammadanwarulhaq15@gmail.com
            </li>
            <li>
              <span>Location</span>: Saddar Karachi
            </li>
          </ul>
        </div>
      </div>
      <div className="rightabout">

      </div>
      
    </div>
  )
}

export default About
