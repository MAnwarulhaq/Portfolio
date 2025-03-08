import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div id="footer">
      <div className="footerdetail">
        <div className="footerline1">
          <h1>Quick Links</h1>
          <ul className=''>
            <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>
            <Link to="about" activeClass='active' spy={true} smooth={true} duration={500}><li>About</li></Link>
            <Link to="projects" activeClass='active' spy={true} smooth={true} duration={500}><li>Projects</li></Link>
            <Link to="contact" activeClass='active' spy={true} smooth={true} duration={500}><li>Contact</li></Link>
          </ul>
        </div>
        <div className="footerline2">
          <h1>Follow Me</h1>
          <ul>
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://www.twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://www.linkedin.com">Linkedin</a>
            </li>
            <li>
              <a href="https://www.github.com">Github</a>
            </li>
          </ul>
        </div>
        <div className="footerline3">
          <h1>Contact Me</h1>
          <ul>
            <li>
              <a href="mailto:muhammadanwarulhaq15@gmail.com">Email</a>
            </li>
            <li>
              <a href="tel:+923090870389">Phone</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
