import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home.jsx";
import Courses from "./Courses.jsx";
import Videos from "./Videos.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>KHAWAJA SCIENCE ACADEMY</h1>
      </header>

      <div className="h-nav-bar-header">
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "route-links active" : "route-links"
            }
            to="/"
          >
            Home
          </NavLink>
        </div>
        <div className="courses-link-container">
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
              <div className="courses-list-header-inner">
                HCI
              </div>
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
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "route-links active" : "route-links"
            }
            to="/about"
          >
            About
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "route-links active" : "route-links"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
