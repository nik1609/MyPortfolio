import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
        Hello! I'm Nikhil, a passionate full-stack developer specializing in web development. I have expertise in C++, Python, HTML, CSS, JavaScript, React.js, Express.js, MongoDB, and Django. With a focus on creating seamless user experiences and scalable applications, I bring ideas to life through intuitive interfaces and robust functionality.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/nik1609" target="black">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/n_i_k_h_i_l_l_l/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/nikhil-kumar-7616a4203/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
