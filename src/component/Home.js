
import '../style/style.css'
import profile from '../component/images/IMG_20230806_114822.jpg'
import fig1lang2 from '../component/images/image_processing20220510-29585-hiltd0.png';
import fig1 from '../component/images/4274640.png';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  },[])
    return (
      <>
        <div className="home " id="home">
          <h2 className="home-title">Mahmoud Khames</h2>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-12 " data-aos="fade-right">
                <div className="home-content">
                  <h2 className="home-text">Mahmoud Khames</h2>
                  <p className="home-p">
                    <span>Frontend Developer React && Backend Developer Node JS </span>, with knowledge In web
                    development and design, I offer the best projects resulting
                    in quality work.
                  </p>
                  <div className="scroll-down">
                    <i className="fa-solid fa-arrow-down down"></i>
                  </div>
                  <div className="line">
                    <img src={fig1lang2} alt="" />
                  </div>
                </div>
              </div>
              <div className=" col-lg-5 col-12" data-aos="fade-left">
                <div className="homeProfile">
                  <div className="social">
                    <div className="social-icon">
                      <a
                        target="__blank"
                        href="https://instagram.com/mahmoud_khames_saber?igshid=ZWIzMWE5ZmU3Zg=="
                      >
                        <i className="fa-brands fa-instagram social-icon"></i>
                      </a>
                    </div>
                    <div className="social-icon">
                      <a target="__blank" href="https://github.com/Mahmoud-khames">
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
                  <div className="home-imag">
                    <img className="img-line img-fluid " src={fig1} alt="" />
                    <img
                      className="img-profile img-fluid "
                      src={profile}
                      alt=""
                    />
                    <div className="shadow"></div>
                    <div className="gromectric-box"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;