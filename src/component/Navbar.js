import { useEffect } from "react";
import '../style/style.css'
import Aos from "aos";
import "aos/dist/aos.css";
import {HashLink as Link} from 'react-router-hash-link'
import { useLocation } from "react-router-dom";

function Navbar() {
   let location =useLocation()
  
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });

    const sections = document.querySelectorAll("section");

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  sections.forEach((section) => {
    const sectionId = section.getAttribute("id");
    const navlink = document.querySelector(
      `.nav-list .nav-item a[href="#${sectionId}"]`
    );
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (navlink) {
      if (
        scrollPosition + 220 >= sectionTop &&
        scrollPosition + 220 < sectionTop + sectionHeight
      ) {
        navlink.parentElement.classList.add("active");
      } else {
        navlink.parentElement.classList.remove("active");
      }
    }
  });
};

    window.addEventListener("scroll", handleScroll);
    // ########################################################3
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
    
    // #######################################
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[])
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
                  <a href="#home" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#about-me" className="nav-link">
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#projects" className="nav-link">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#concat-me" className="nav-link">
                    Contact Me
                  </a>
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