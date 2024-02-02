import '../style/style.css'
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import fig1 from "../component/images/4274640.png";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ConcatMe() {
useEffect(() => {
  Aos.init({
    duration: 2000,
  });
}, []);
 const check = document.querySelector(".form-success");
 const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_16nn1ob",
        "template_ks2po6m",
        form.current,
        "tKIX655LZlWo8spuw"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
};

  


 
    return (
      <>
        <div className="concat-me mt-5" id="concat-me">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-12 mb-5" data-aos="fade-right">
                <div className="concat-me-content">
                  <h2 className="concat-me-text">Concat Me.</h2>
                  <p className="concat-me-p">
                    I will read all emails. Send me any message you want and I
                    will gat back to you
                  </p>
                  <p className="concat-me-p2">
                    need you <span>Name</span> and <span>Email Acdress.</span>
                    but you won't receive anythings othar than reply
                  </p>
                  <div className="contact-me-shadow"></div>
                  <div className="contact-me-gromectric-box"></div>
                </div>
                <div className="concat-me-social-page">
                  <img
                    className="concat-me-line img-fluid "
                    src={fig1}
                    alt=""
                  />
                  <div className="icon-text me-auto">
                    <span className="concat-me-icon-span span1">
                      Dosen't you want to send emails
                    </span>
                    <span className="concat-me-icon-span span2">
                      Write me on my social networks
                    </span>
                  </div>
                  <div className="social-icon">
                    <a
                      target="__blank"
                      href="https://instagram.com/mahmoud_khames_saber?igshid=ZWIzMWE5ZmU3Zg=="
                    >
                      <i className="fa-brands fa-instagram social-icon"></i>
                    </a>
                  </div>
                  <div className="social-icon">
                    <a target="__blank" href="https://github.com/H2d0">
                      <i className="fa-brands fa-github social-icon"></i>
                    </a>
                  </div>
                  <div className="social-icon">
                    <a
                      target="__blank"
                      href="https://www.linkedin.com/in/mahmoud-khames-4bb987285/"
                    >
                      <i className="fa-brands fa-linkedin social-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-5 col-12 bg-black form"
                data-aos="fade-left"
              >
                <h3 className="mb-4 text-white">Send Me A Message</h3>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="input mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Frist Name"
                      name="user_name"
                      required
                    />
                    <label for="exampleFormControlInput1">Frist Name</label>
                  </div>
                  <div className="input mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput2"
                      placeholder="Email Address"
                      name="user_email"
                      required
                    />
                    <label for="exampleFormControlInput2">Email Address</label>
                  </div>
                  <div className="input mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput3"
                      placeholder="Subject"
                      name="user_subject"
                      required
                    />
                    <label for="exampleFormControlInput3">Subject</label>
                  </div>
                  <div className="input mb-3">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      cols="30"
                      placeholder="Message"
                      name="user_message"
                      required
                    ></textarea>
                    <label for="exampleFormControlTextarea1">Message</label>
                  </div>
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="submit btn btn-outline-dark form-control"
                    >
                      <i className="fa-solid fa-location-arrow me-2"></i>
                      Send Massage
                    </button>
                <p className="form-success">
                      Messages Sent Successfully{" "}
                      <input
                        className="form-check d-inline-block "
                        type="checkbox"
                        checked
                      ></input>
                    </p>
                  </div>
                </form>
              </div>
              <div className="col-lg-5 col-12 " data-aos="fade-right">
                <div className="concat-me-social-mobile">
                  <img
                    className="concat-me-line img-fluid "
                    src={fig1}
                    alt=""
                  />
                  <div className="icon-text me-auto">
                    <span className="concat-me-icon-span span1">
                      Dosen't you want to send emails
                    </span>
                    <span className="concat-me-icon-span span2">
                      Write me on my social networks
                    </span>
                  </div>
                  <div className="social-icon">
                    <a
                      target="__blank"
                      href="https://instagram.com/mahmoud_khames_saber?igshid=ZWIzMWE5ZmU3Zg=="
                    >
                      <i className="fa-brands fa-instagram social-icon"></i>
                    </a>
                  </div>
                  <div className="social-icon">
                    <a target="__blank" href="https://github.com/H2d0">
                      <i className="fa-brands fa-github social-icon"></i>
                    </a>
                  </div>
                  <div className="social-icon">
                    <a
                      target="__blank"
                      href="https://www.linkedin.com/in/mahmoud-khames-4bb987285/"
                    >
                      <i className="fa-brands fa-linkedin social-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ConcatMe;