// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import Aboutme from "../aboutme/aboutme";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className=" text-white   font-bold">
      <nav className="navbar p-2  text-1xl font-[poppins] flex  pt-2 gap-6">
        <div>
          <Link to="/" className="p-2 text-glow">
            <span> HOME</span>
          </Link>
        </div>
        <div className=" rightpart flex ml-auto">
          {/* <div>
            <a className="p-2 " href="/Aboutme">
              <span className="text-glow ">
                ABOUT-ME
              </span>
            </a>
          </div> */}
          {/* <div>
            <a className="p-2 text-glow " href="">
              <span> RESUME</span>
            </a>
          </div> */}
          
          {/* <div>
            <a className="p-2  text-glow" href="">
              <span> PROJECTS</span>
            </a>
          </div> */}
          <div>
            <Link to="/contact-me" className="p-2 text-glow">
              <span> CONTACT-ME</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
