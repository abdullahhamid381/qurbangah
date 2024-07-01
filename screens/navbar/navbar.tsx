"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import "../scsss/navbar.scss";
import { navbardata } from "@/data/data";
import { FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="nav-bar-parent">
      <nav className="navbar">
        <div className="nav-container">


          {/* RESPONSIVE BUTTON */}
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon" style={{ color: "black" }}>
                <AiOutlineClose />
              </span>
            ) : (
              <span className="icon">
                <GiHamburgerMenu />
              </span>
            )}
          </div>

          {/* LOGO DIV */}

          <div className="logo-div">
            <div className="nav-logo">
              <img src="./images/logo.png" alt="Logo" />
            </div>
          </div>

          {/* PAGE BUTTON*/}

          <div className="button-link">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <div className="nav-icon" onClick={handleClick}>
                {click ? (
                  <span
                    className="icon"
                    style={{
                      color: "#3B81D8",
                      fontWeight: "800",
                      borderRadius: "80px",
                    }}
                  >
                    <AiOutlineClose />
                  </span>
                ) : (
                  <span className="icon">
                    <GiHamburgerMenu />
                  </span>
                )}
              </div>
              <div className="nav-logo hide-logo">
                <img src="./images/logo.png" alt="Logo" />
              </div>
              <div className="browse-flex">
                {navbardata.map((item) => {
                  return (
                   
                  );
                })}
              </div>
            </ul>
          </div>


          {/* BUTTON DIV */}
          <div className="button-link">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <div className="nav-icon" onClick={handleClick}>
                {click ? (
                  <span
                    className="icon"
                    style={{
                      color: "#3B81D8",
                      fontWeight: "800",
                      borderRadius: "80px",
                    }}
                  >
                    <AiOutlineClose />
                  </span>
                ) : (
                  <span className="icon">
                    <GiHamburgerMenu />
                  </span>
                )}
              </div>
              <div className="nav-logo hide-logo">
                <img src="./images/logo.png" alt="Logo" />
              </div>
              <div className="browse-flex">
               <span><FaUser /></span>
                <span><FaCartPlus /></span>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
