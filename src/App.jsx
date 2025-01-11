import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home.jsx";
import Courses from "./Courses.jsx";
import Videos from "./Videos.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import FAQ from "./FAQ.jsx";

import "./App.css";

function App() {
  function windowTop() {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }
  return (
    <>
      <header>
        <h1>KHAWAJA SCIENCE ACADEMY</h1>
      </header>

      <div className="h-nav-bar-header">
        <div onClick={windowTop}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "route-links active" : "route-links"
            }
            to="/"
          >
            Home
          </NavLink>
        </div>
        <div onClick={windowTop} className="courses-link-container">
          <NavLink
            className={({ isActive }) =>
              isActive ? "route-links active" : "route-links"
            }
            to="/courses"
          >
            Courses
          </NavLink>
          <div className="courses-list-header-outer">
            <div className="courses-list-header">
              <div className="courses-list-header-inner">HCI</div>
              <div className="courses-list-header-inner">OOSE</div>
              <div className="courses-list-header-inner">ISE</div>
            </div>
          </div>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "route-links active" : "route-links"
            }
            to="/videos"
          >
            Videos
          </NavLink>
        </div>
        <div onClick={windowTop}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "route-links active" : "route-links"
            }
            to="/about"
          >
            About
          </NavLink>
        </div>
        <div onClick={windowTop}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "route-links active" : "route-links"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
        <div onClick={windowTop}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "route-links active" : "route-links"
            }
            to="/faq"
          >
            FAQ
          </NavLink>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  );
}

export default App;
