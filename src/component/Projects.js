
import "../style/style.css"
import topic from '../component/images/screencapture-topic-app-surge-sh-2023-08-08-21_01_11.png'
import dashboard from '../component/images/screencapture-h2d0-github-io-Dashboard-2023-08-08-17_42_34.png'
import collection from "../component/images/screencapture-la-collection-surge-sh-2023-08-08-17_45_43.png";
import Github from "../component/images/screencapture-h2d0-github-io-Github-Profile-2023-08-09-20_30_36.png";
import todo from '../component/images/screencapture-h2d0-github-io-Todo-List-2023-08-08-21_04_33.png'
import Listen from "../component/images/screencapture-h2d0-github-io-Listen-2023-08-08-17_41_31.png";
import Game from "../component/images/screencapture-h2d0-github-io-Game-2023-08-08-21_05_11.png";
import Movies from "../component/images/screencapture-h2d0-github-io-movieslove-2023-09-03-18_17_11.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Projects() {
    useEffect(() => {
      Aos.init({
        duration: 2000,
      });
    }, []);
    return (
      <>
        <div className="projects mt-5" id="projects">
          <div className="container">
            <div className="row justify-content-center">
              <div className="cont-text">
                <h2 className="projects-title col-12">Projects.</h2>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 mb-4 mb-4 mb-lg-0"
                data-aos="fade-right"
              >
                <div className="custom-block  ">
                  <div className="img-project">
                    <img
                      src={Movies}
                      className="custom-block-image img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="p-text">
                    <p className="custom-block-p">Website</p>
                  </div>
                  <div className="d-flex">
                    <div>
                      <h5 className="custom-block-title text-black mb-2">
                        Movie Love Website
                      </h5>
                      <p className="custom-p mb-0">
                        "Movie Love" is a website that allows users to browse
                        movies and TV shows, view their details, watch trailers,
                        and see photos and posters. •Movies and TV Shows
                        Details, Trailers, Photos, Posters, Recommendations,
                        Trending Movies and TV Shows, and more. •Search for a
                        Movie or TV Show by its name •Click on any movie or tv
                        show to open its full details •Trailers, Photos,
                        Posters, Recommendations
                      </p>
                      <a
                        target="__blank"
                        href="https://github.com/Mahmoud-khames/Movieslove"
                        className="icon text-decoration-none"
                      >
                        <i className="fa-brands fa-github github-icon"></i>
                        <span>view</span>
                      </a>
                    </div>
                    <a
                      target="__blank"
                      href=" https://mahmoud-khames.github.io/Movieslove/"
                      className="custom-block-icon bg-design  ms-auto"
                    >
                      <i className="fa-solid fa-location-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 mb-4 mb-4 mb-lg-0"
                data-aos="fade-right"
              >
                <div className="custom-block  ">
                  <div className="img-project">
                    <img
                      src={topic}
                      className="custom-block-image img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="p-text">
                    <p className="custom-block-p">Website</p>
                  </div>
                  <div className="d-flex">
                    <div>
                      <h5 className="custom-block-title text-black mb-2">
                        Topic Website
                      </h5>
                      <p className="custom-p mb-0">
                        project that you carry out in the desian and structure
                        of the layout, showing tha design at the client's
                        request
                      </p>
                      <a
                        target="__blank"
                        href="https://github.com/Mahmoud-khames/Topic"
                        className="icon text-decoration-none"
                      >
                        <i className="fa-brands fa-github github-icon"></i>
                        <span>view</span>
                      </a>
                    </div>
                    <a
                      target="__blank"
                      href="https://mahmoud-khames.github.io/Topic/"
                      className="custom-block-icon bg-design  ms-auto"
                    >
                      <i className="fa-solid fa-location-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div
                className="col-lg-4 col-md-6 col-12 mb-4 mb-4 mb-lg-0"
                data-aos="fade-left"
              >
                <div className="custom-block  ">
                  <div className="img-project">
                    <img
                      src={collection}
                      className="custom-block-image img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="p-text">
                    <p className="custom-block-p">Website</p>
                  </div>
                  <div className="d-flex">
                    <div>
                      <h5 className="custom-block-title text-black mb-2">
                        Collection Website
                      </h5>
                      <p className="custom-p mb-0">
                        project that you carry out in the desian and structure
                        of the layout, showing tha design at the client's
                        request
                      </p>
                      <a
                        target="__blank"
                        href="https://github.com/H2d0/collection"
                        className="icon text-decoration-none"
                      >
                        <i className="fa-brands fa-github github-icon"></i>
                        <span>view</span>
                      </a>
                    </div>
                    <a
                      target="__blank"
                      href="http://la-collection.surge.sh/"
                      className="custom-block-icon bg-design  ms-auto"
                    >
                      <i className="fa-solid fa-location-arrow"></i>
                    </a>
                  </div>
                </div>
              </div> */}
              <div
                className="col-lg-4 col-md-6 col-12 mb-4 mb-4 mb-lg-0"
                data-aos="fade-right"
              >
                <div className="custom-block  ">
                  <div className="img-project">
                    <img
                      src={dashboard}
                      className="custom-block-image img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="p-text">
                    <p className="custom-block-p">Website</p>
                  </div>
                  <div className="d-flex">
                    <div>
                      <h5 className="custom-block-title text-black mb-2">
                        Dashboard Website
                      </h5>
                      <p className="custom-p mb-0">
                        project that you carry out in the desian and structure
                        of the layout, showing tha design at the client's
                        request
                      </p>
                      <a
                        target="__blank"
                        href="https://github.com/Mahmoud-khames/Dashboard"
                        className="icon text-decoration-none"
                      >
                        <i className="fa-brands fa-github github-icon"></i>
                        <span>view</span>
                      </a>
                    </div>
                    <a
                      target="__blank"
                      href="https://mahmoud-khames.github.io/Dashboard/"
                      className="custom-block-icon bg-design  ms-auto"
                    >
                      <i className="fa-solid fa-location-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 mb-4 mb-4 mb-lg-0"
                data-aos="fade-left"
              >
                <div className="custom-block  ">
                  <div className="img-project">
                    <img
                      src={Listen}
                      className="custom-block-image img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="p-text">
                    <p className="custom-block-p">Website</p>
                  </div>
                  <div className="d-flex">
                    <div>
                      <h5 className="custom-block-title text-black mb-2">
                        Listen Website
                      </h5>
                      <p className="custom-p mb-0">
                        project that you carry out in the desian and structure
                        of the layout, showing tha design at the client's
                        request
                      </p>
                      <a
                        target="__blank"
                        href="https://github.com/Mahmoud-khames/Listen"
                        className="icon text-decoration-none"
                      >
                        <i className="fa-brands fa-github github-icon"></i>
                        <span>view</span>
                      </a>
                    </div>
                    <a
                      target="__blank"
                      href="https://mahmoud-khames.github.io/Listen/"
                      className="custom-block-icon bg-design  ms-auto"
                    >
                      <i className="fa-solid fa-location-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 mb-4 mb-4 mb-lg-0"
                data-aos="fade-right"
              >
                <div className="custom-block  ">
                  <div className="img-project">
                    <img
                      src={Game}
                      className="custom-block-image img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="p-text">
                    <p className="custom-block-p">Website</p>
                  </div>
                  <div className="d-flex">
                    <div>
                      <h5 className="custom-block-title text-black mb-2">
                        Game Playing
                      </h5>
                      <p className="custom-p mb-0">
                        project that you carry out in the desian and structure
                        of the layout, showing tha design at the client's
                        request
                      </p>
                      <a
                        target="__blank"
                        href="https://github.com/Mahmoud-khames/Game"
                        className="icon text-decoration-none"
                      >
                        <i className="fa-brands fa-github github-icon"></i>
                        <span>view</span>
                      </a>
                    </div>
                    <a
                      target="__blank"
                      href="https://mahmoud-khames.github.io/Game/"
                      className="custom-block-icon bg-design  ms-auto"
                    >
                      <i className="fa-solid fa-location-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 mb-4 mb-4 mb-lg-0"
                data-aos="fade-left"
              >
                <div className="custom-block  ">
                  <div className="img-project">
                    <img
                      src={Github}
                      className="custom-block-image img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="p-text">
                    <p className="custom-block-p">Website</p>
                  </div>
                  <div className="d-flex">
                    <div>
                      <h5 className="custom-block-title text-black mb-2">
                        Github Website
                      </h5>
                      <p className="custom-p mb-0">
                        project that you carry out in the desian and structure
                        of the layout, showing tha design at the client's
                        request
                      </p>
                      <a
                        target="__blank"
                        href="https://github.com/Mahmoud-khames/Github-Profile"
                        className="icon text-decoration-none"
                      >
                        <i className="fa-brands fa-github github-icon"></i>
                        <span>view</span>
                      </a>
                    </div>
                    <a
                      target="__blank"
                      href="https://mahmoud-khames.github.io/Github-Profile/"
                      className="custom-block-icon bg-design  ms-auto"
                    >
                      <i className="fa-solid fa-location-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 mb-4 mb-4 mb-lg-0"
                data-aos="fade-right"
              >
                <div className="custom-block  ">
                  <div className="img-project">
                    <img
                      src={todo}
                      className="custom-block-image img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="p-text">
                    <p className="custom-block-p">Website</p>
                  </div>
                  <div className="d-flex">
                    <div>
                      <h5 className="custom-block-title text-black mb-2">
                        Todo Website
                      </h5>
                      <p className="custom-p mb-0">
                        project that you carry out in the desian and structure
                        of the layout, showing tha design at the client's
                        request
                      </p>
                      <a
                        target="__blank"
                        href="https://github.com/Mahmoud-khames/ToDo-List"
                        className="icon text-decoration-none"
                      >
                        <i className="fa-brands fa-github github-icon"></i>
                        <span>view</span>
                      </a>
                    </div>
                    <a
                      target="__blank"
                      href="https://mahmoud-khames.github.io/ToDo-List/"
                      className="custom-block-icon bg-design  ms-auto"
                    >
                      <i className="fa-solid fa-location-arrow"></i>
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

export default Projects;