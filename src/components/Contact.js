import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/mr_pravin_bale/" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://m.facebook.com/profile.php?id=100022188727201" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/pravin-bale-8b2a10243/?originalSubdomain=in" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://www.twitter.com" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/pravinbale" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:mr.xpravin2k17@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;