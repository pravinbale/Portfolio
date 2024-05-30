import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to My Profile",
        "My Name is Pravin M Bale",
        "I'm Full Stack Developer",
        "Software Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home " id="home">
        <div className="left col-lg-6" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}>Welcome to My Profile</h1>


          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-success my-3 text-white"

          >
            Download Resume
          </a>
        </div>
        <div className="right col-lg-6 " >
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000" style={{marginLeft:"20%"}}>
          <video src={`/assets/${hero.videoSrc}`} alt="hero" style={{borderRadius: "70%",
    position: "relative",height: "70%", width: "70%",objectFit: "cover"}} controls autoPlay muted onEnded={(event) => event.target.play()}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;