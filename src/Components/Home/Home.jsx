import React from "react";
import "./Home.css";
import man from "../../Assets/man.png";
import { Typewriter } from "react-simple-typewriter";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Home() {

  useGSAP(()=>{
    let tl1=gsap.timeline()
    tl1.from(".line1",{
      y:70,
      duration:1,
      opacity:0
      
  })
  tl1.from(".line2",{
    y:70,
    duration:1,
    opacity:0
    
})
tl1.from(".line3",{
  y:70,
  duration:1,
  opacity:0
  
})

  gsap.from(".righthome img",{
    x:200,
    duration:1,
    opacity:0
  })

  })

  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetail">
          <div className="line1">I'M</div>
          <div className="line2">Muhammad Anwar ul Haq</div>
          <div className="line3">
            <Typewriter
              words={[
                "FRONTEND WEB DEVELOPER",
                "SOFTWARE DEVELOPER",
                "MERN STACK DEVELOPER",
              ]}
              loop={true}
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <button>HIRE ME</button>
          
        </div>
        
      </div>
      <div className="righthome">
        <img src={man} alt="Developer" />
      </div>
    </div>
  );
}

export default Home;
