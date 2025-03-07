import React from 'react'
import Card from "../Cards/Card"
import mern from "../../Assets/mern.png"
import "./Project.css"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)
function Project() {

  useGSAP(()=>{
    gsap.from("#para", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger:0.5,
      scrollTrigger: {
        trigger: "#para",
        start: "top 90%", 
        end: "top 30%",   
        scrub: 2,
        
      },
    });
    gsap.from(".slider", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger:0.5,
      scrollTrigger: {
        trigger: ".slider",
        start: "top 90%", 
        end: "top 30%",   
        scrub: 2,
        
      },
    });
  })
  return (
    <div id="projects">
        <h1 id='para'>References available upon request.</h1>
        <div className="slider">
          <Card title="Stopwatch" image={mern}/>
          <Card title="Stopwatch" image={mern}/>
          <Card title="Stopwatch" image={mern}/>
          <Card title="Stopwatch" image={mern}/>
          <Card title="Stopwatch" image={mern}/>
        </div>
    </div>
  )
}

export default Project