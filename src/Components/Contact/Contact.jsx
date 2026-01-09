import React from 'react'
import "./Contact.css"
import contact from "../../assets/contact.png"
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger)

function Contact() {

  useGSAP(()=>{
    gsap.from(".leftcontact img", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger:0.5,
      scrollTrigger: {
        trigger: ".leftcontact img",
        start: "top 90%", 
        end: "top 30%",   
        scrub: 2,
        
      },
    });

    gsap.from(" form", {
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger: {
        trigger: "form",
        start: "top 90%", 
        end: "top 30%",   
        scrub: 2,
        
      },
    });
  })

  return (
    <div id="contact">
        <div className="leftcontact">
            <img src={contact} alt="" />
        </div>
        <div className="rightcontact">
        <form action="https://formspree.io/f/mblgrolq" method='POST'>
            <input type="text" name="username" id="" placeholder='Enter Your Name!' />
            <input type="email" name="email" id="" placeholder='Enter Your Email!' />
            <textarea name="message" id="textarea" placeholder='Message Me!'></textarea>
            <input type="submit" name="" id="btn" value="Submit" />
        </form>
        </div>
    </div>
  )
}

export default Contact