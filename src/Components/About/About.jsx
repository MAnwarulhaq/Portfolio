import React from 'react'
import "./About.css"
import Card from '../Cards/Card'
import mernlogo from "../../Assets/mern.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function About() {
  // useGSAP(()=>{
  //   gsap.from(".cricle",{
  //     x:-100,
  //     duration:1,
  //     opacity:0,
  //     scrollTrigger:{
  //       trigger:".cricle",
  //       scroll:"body",
  //       scrub:2,
  //       markers:true,
  //       start:"top 80%",
  //       end:"20%"
  //     }
  //   })
  //   gsap.from(".line",{
  //     x:-100,
  //     duration:1,
  //     opacity:0,
  //     scrollTrigger:{
  //       trigger:".line",
  //       scroll:"body",
  //       scrub:2,
  //       markers:true,
  //       start:"top 90%",
  //       end:"20%"
  //     }
  //   })
    
    
    
  // })
  useGSAP(() => {
    gsap.from(".cricle", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger:0.5,
      scrollTrigger: {
        trigger: ".cricle",
        start: "top 90%", 
        end: "top 30%",   
        scrub: 2,
        
      },
    });
  
    gsap.from(".line", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger:0.5,
      scrollTrigger: {
        trigger: ".line",
        start: "top 95%", 
        end: "top 40%",
        scrub: 2,
        
      }
    });
    gsap.from(".aboutdetail h1", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".aboutdetail", 
        start: "top 80%", 
        end: "top 40%",
        scrub: 2,
      },
    });
    
    
      gsap.from(".aboutdetail ul", {
        y: 100,  
        opacity: 0, 
        duration: 1,  
        stagger: 0.2, 
        scrollTrigger: {
          trigger: ".aboutdetail", 
          start: "top 85%", 
          end: "top 40%",
          scrub: 2, 
        },
      });
      gsap.from(".rightabout .card", {
        x:100,  
        opacity: 0, 
        duration: 1,  
        stagger: 0.2, 
        scrollTrigger: {
          trigger: ".rightabout .card", 
          start: "top 85%", 
          end: "top 40%",
          scrub: 2, 
        },
      });
     
      

     
    

  });
  
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
                <span>Location</span>: Noor E Bahar Restaurant ,Saddar Karachi
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>Forntend Developer</h1>
            <ul>
              <li><span>As a web developer</span>:
               I am passionate about creating visually appealing and user-friendly websites. With expertise in HTML, CSS, JavaScript, Bootstrap, and React Js, I strive to deliver high-quality and responsive designs that meet the needs of my clients. I look forward to collaborating with you and bringing your web development projects to life. Feel free to explore my portfolio and get in touch with me to discuss your project requirements. </li>

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
        <Card title="MERN STACK DEVELOPER" image={mernlogo} />
        <Card title="JAVASCRIPT" image={mernlogo} />
        <Card title="HTML CSS" image={mernlogo} />
      </div>

    </div>
  )
}

export default About
