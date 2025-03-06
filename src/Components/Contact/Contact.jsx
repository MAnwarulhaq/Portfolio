import React from 'react'
import "./Contact.css"
import contact from "../../Assets/contact.png"

function Contact() {
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