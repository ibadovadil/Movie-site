import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink} from "react-router-dom";
import { ModeContext } from "../context/ModeContext";
import { LangContext } from "../context/LangContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mode , setMode] = useContext(ModeContext);
  const [lang , setLang] =  useContext(LangContext);
  // const { username } = useParams();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <div className={`headermain ${scrolled ? "scrolled" : ""}`}>
        <nav
          className={`navbar navbar-expand-lg  ${
            scrolled ? "navbar-light bg-dark" : "navbar-light bg-transparent"
          } fixed-top`} style={{height:'150px'}}
        >
          <div className="container">
            <NavLink to={"/"} className="navbar-brand">
              <img
                src="https://newstar.bold-themes.com/movies/wp-content/uploads/sites/19/2018/01/logo-white.png"
                alt=""
              />
            </NavLink>{" "}
            <button
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-bs-target="#navbarSupportedContent"
              data-bs-toggle="collapse"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" style={{color:"white"}}>
                    {lang === "az" ? "Əsas Səhifə":"Home"}
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to="/comingsoon" className="nav-link">
                    
                    {lang === "az" ? "Tezliklə":"Coming soon"}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/movies" className="nav-link">
                  
                    {lang === "az" ? "Filmlər":"  Movies"}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                
                    {lang === "az" ? "Qeydiyyat":"    Login"}
                  </NavLink>
                  
                </li>
                <li className="nav-item">
                    
                </li>
                <li className="nav-item nav-itemm">
                        <label className="switch" >
                        <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r={5} cy={12} cx={12} /><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z" /></g></svg></span>
                        <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" /></svg></span>   
                        <input type="checkbox" className="input"   onClick={()=>{
                        mode ==='light' ? setMode('dark'):setMode('light')
                        mode === 'light' ? localStorage.setItem('mode', 'dark'): localStorage.setItem('mode', 'light')
                           }}/>
                        <   span className="slider" />
                        </label>
                        <button onClick={()=>{lang==="az"?setLang("en"):setLang("az")}} className=" ms-2 btn btn-outline-success">
                           {lang==="az"?"EN":"AZ"}
                  </button>
                </li>
                <li>
              
                </li>
                <li>
                </li>
                {/* <li className="nav-item">
                           <button className="btn btn-outline-warning" onClick={()=>{
                        mode ==='light' ? setMode('dark'):setMode('light')
                        mode === 'light' ? localStorage.setItem('mode', 'dark'): localStorage.setItem('mode', 'light')
                           }}>{mode}</button>
                </li> */}
              </ul>
            </div>
          </div>
          <hr />
        </nav>
        <div
          className="carousel slide"
          data-bs-ride="carousel"
          id="carouselExampleCaptions"
        >
          <div className="carousel-inner">
            <div className="carousel-item active bg-1">
              <div className="carousel-caption">
                <h5>Baby Jockey</h5>
                <p>
                  Movie is a romantic musical disguised as a car-chase thriller.
                </p>
                <Link to={"/movies"} type="button" class="btn btn-outline-dark">
                  Read Review
                </Link>
              </div>
            </div>
            <div className="carousel-item bg-2">
              <div className="carousel-caption">
                <h5>Mist Blonde</h5>
                <p>
                  Sensual and savage, Lorraine Broughton is the most elite spy
                  in MI6.
                </p>
                <Link to={"/movies"} type="button" class="btn btn-outline-dark">
                  Read Review
                </Link>
              </div>
            </div>
            <div className="carousel-item bg-3">
              <div className="carousel-caption">
                <h5>Justice Fear</h5>
                <p>
                  After a four-film building-up began four years ago with Man of
                  Steel..
                </p>
                <Link to={"/movies"} type="button" class="btn btn-outline-dark">
                  Read Review
                </Link>
              </div>
            </div>{" "}
            <div className="carousel-item bg-4">
              <div className="carousel-caption">
                <h5>Ragnarok</h5>
                <p>
                  The story is an uninteresting thicket of brawls and
                  machinations.
                </p>
                <Link to={"/movies"} type="button" class="btn btn-outline-dark">
                  Read Review
                </Link>
              </div>
            </div>
            <div className="carousel-item bg-5">
              <div className="carousel-caption">
                <h5>Star Warriors</h5>
                <p>
                  The galaxy faces a new threat from the evil Kylo Ren - Adam
                  Driver.
                </p>
                <Link to={"/movies"} type="button" class="btn btn-outline-dark">
                  Read Review
                </Link>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            data-bs-slide="prev"
            data-bs-target="#carouselExampleCaptions"
            type="button"
          >
            {/* <span aria-hidden="true" className="carousel-control-prev-icon" />{" "} */}
            <span className="visually-hidden">Previous</span>
          </button>{" "}
          <button
            className="carousel-control-next"
            data-bs-slide="next"
            data-bs-target="#carouselExampleCaptions"
            type="button"
          >
            {/* <span aria-hidden="true" className="carousel-control-next-icon" />{" "} */}
            <span className="visually-hidden">Next</span>
          </button>{" "}
          <div className="carousel-indicators">
            <button
              aria-label="Slide 1"
              className="active sliderbtn"
              data-bs-slide-to={0}
              data-bs-target="#carouselExampleCaptions"
              type="button"
            ></button>{" "}
            <button
              aria-label="Slide 2"
              className="sliderbtn"
              data-bs-slide-to={1}
              data-bs-target="#carouselExampleCaptions"
              type="button"
            ></button>{" "}
            <button
              className="sliderbtn"
              aria-label="Slide 3"
              data-bs-slide-to={2}
              data-bs-target="#carouselExampleCaptions"
              type="button"
            ></button>{" "}
            <button
              aria-label="Slide 4"
              className="sliderbtn"
              data-bs-slide-to={3}
              data-bs-target="#carouselExampleCaptions"
              type="button"
            ></button>
            <button
              className="sliderbtn"
              aria-label="Slide 5"
              data-bs-slide-to={4}
              data-bs-target="#carouselExampleCaptions"
              type="button"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
