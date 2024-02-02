import { useEffect } from "react";
import '../style/style.css'
import Aos from "aos";
import "aos/dist/aos.css";
import {HashLink as Link} from 'react-router-hash-link'
import { useLocation } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
    const navmenu = document.querySelector(".nav-menu");
    const navclose = document.querySelector(".nav-close");
    const navtoggle = document.querySelector(".nav-toggle");
    const navlinks = document.querySelectorAll(".nav-list .nav-item");
    navlinks.forEach((navlink) => {
      navlink.addEventListener("click", () => {
        navmenu.classList.remove("show-menu");
        navlinks.forEach((navlink) => {
          console.log(navlink);
          navlink.classList.remove("active");
          
        });
        navlink.classList.add("active");
      });
    });
    if (navtoggle) {
      navtoggle.addEventListener("click", () => {
        navmenu.classList.add("show-menu");
      });
    }
    if (navclose) {
      navclose.addEventListener("click", () => {
        navmenu.classList.remove("show-menu");
      });
    }
    // ################################################
    let inputCheck = document.querySelector(".input-check");
    inputCheck.onchange = () => {
      window.document.body.classList.toggle("darkTheme");
    }
    
    
   

  }, []);

  return (
  <>
    <div className="header ">
      <div className="main-nav container">
        <Link to="/" className="nav-logo">
          <span className="nav-logo-icon">
            <i className="fa-solid fa-code"></i>
          </span>
          <span className="nav-logo-text">Mahmoud Khames</span>
        </Link>
        <div className="nav-menu">
          <span className="nav-title">menu</span>
          <span className="nav-name">Mahmoud</span>
          <ul className="nav-list">
            <li className="nav-item active ">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/aboutMe"} className="nav-link">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/projects"} className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/concatMe"} className="nav-link">
                Contact Me
              </Link>
            </li>
          </ul>
          <div className="nav-close">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="nav-Button">
          <label className="switch">
            <input className="input-check" type="checkbox" />
            <span className="slider"></span>
          </label>
          <div className="nav-toggle">
            <i className="fa-solid fa-bars-staggered"></i>
          </div>
        </div>
      </div>
    </div>
  </>
);
  }


export default Navbar;