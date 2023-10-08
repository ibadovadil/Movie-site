import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { ModeContext } from '../context/ModeContext';

const NavbarTwo = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mode , setMode] = useContext(ModeContext);

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
    <nav
    className={`navbar navbar-expand-lg navtwo  ${
      scrolled ? "navbar-light bg-dark" : "navbar-light bg-transparent"
    } fixed-top`}
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
            <NavLink to="/" className=" nav-link nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/comingsoon" className="nav-link" style={{color:"white"}} >
              Coming soon
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/movies" className="nav-link" style={{color:"white"}}>
              Movies
            </NavLink>
          </li>
       
          <li className="nav-item">
            <NavLink to="/login" className="nav-link"  style={{color:"white"}}>
              Login
            </NavLink>
          </li>
          <li className="nav-item nav-itemm">
                        <label className="switch" >
                        <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r={5} cy={12} cx={12} /><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z" /></g></svg></span>
                        <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" /></svg></span>   
                        <input type="checkbox" className="input"   onClick={()=>{
                        mode ==='light' ? setMode('dark'):setMode('light')
                           }}/>
                        <   span className="slider" />
                        </label>
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
  )
}

export default NavbarTwo