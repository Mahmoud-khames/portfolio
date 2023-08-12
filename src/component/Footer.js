import '../style/style.css'


function Footer() {
    return (
      <>
        <div className="bg-black footer">
          <div className="container">
            <div className="footer-all">
              <div className="footer-text">
                <p>© All Rights Reserved By Mahmoud Khames</p>
              </div>
              <div>
                <ul className="footer-nav-list">
                  <li className="footer-nav-item  ">
                    <a href="#home" className="footer-nav-link">
                      Home
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#about-me" className="footer-nav-link">
                      About Me
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#projects" className="footer-nav-link">
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Footer;