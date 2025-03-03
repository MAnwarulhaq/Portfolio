import React from "react";
import "./Home.css";
import man from "../../Assets/man.png";
import { Typewriter } from "react-simple-typewriter";

function Home() {
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
