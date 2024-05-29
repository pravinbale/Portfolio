import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="1000" 
      >
        <div className="left nav_items"><img id="logo-img" src="https://img.icons8.com/?size=100&id=LeZHIXUGxkvI&format=png&color=000000"/><b id="logo-name">PRAVIN BALE</b></div>
        <div className="right">
          <a href="#home" className="nav_items">
            Home
          </a>
          <a href="#experience" className="nav_items">
            Education
          </a>
          <a href="#skills" className="nav_items">
            Skills
          </a>
          <a href="#projects" className="nav_items">
            Projects
          </a>
          <a href="#contact" className="nav_items">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;