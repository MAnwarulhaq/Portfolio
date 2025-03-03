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
        <div className="education">
          <h1>Education</h1>
          <ul>
            <li>
              <span>Degree</span>: BS Computer Science From FUUAST
            </li>
            <li>
              <span>Intermediate</span>: Kabirian College From Kabirwala, district khanewal division multan
            </li>
            <li>
              <span>Matriculation</span>: Matriculation from Govt High School Kukkar Hatta tehsil kabirwala district khanewal division multan
            </li>
            
          </ul>
        </div>
        <div className="skills">
          <h1>Skill</h1>
          <ul>
            <li>
           <span>Programming Languages:</span>  HTML, CSS, JavaScript,
            </li>
            <li>
              <span>Frameworks & Libraries:</span>React.js, Material UI, Tailwind CSS, Bootstrap
            </li>
            <li>
              <span>State Management:</span>: Redux, Redux Toolkit
            </li>
            <li>
              <span>Database Management:</span>: Mongodb,Firebase
            </li>
            <li>
              <span>Tools & Technologies:</span>: : Git, Git Hub, VS Code, Firebase Authentication
            </li>
          </ul>
        </div>
      </div>
      </div>
      
      <div className="rightabout">

      </div>
      
    </div>
  )
}

export default About
