import React from "react";
import "./Home.css";
import man from "../../assets/man.png";
import { Typewriter } from "react-simple-typewriter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CV from "../../assets/MyResume.pdf";

function Home() {
  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1", { y: 70, duration: 1, opacity: 0 });
    tl1.from(".line2", { y: 70, duration: 1, opacity: 0 });
    tl1.from(".line3", { y: 70, duration: 1, opacity: 0 });

    gsap.from(".righthome img", { x: 200, duration: 1, opacity: 0 });
  });

  // Function to handle CV download
  const handleDownload = () => {
    const cvUrl = CV;
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Muhammad_Anwar_ul_Haq_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="home-container">
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
          <button className="cv-btn" onClick={handleDownload}>
            Download My CV
          </button>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="Developer" />
      </div>
    </div>
  );
}

export default Home;
