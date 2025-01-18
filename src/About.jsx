import Footer from "./Footer.jsx";
import teacher3 from "./assets/teacher3.jpeg";
import React from "react";
import "./styles/About.css";

function About() {
  return (
    <>
      <div className="about-page-outer">
        <div className="about-page">
          <header className="about-header">
            <img
              src={teacher3}
              alt="Khawaja Tahir Mahmood"
              className="teacher-image"
            />
            <h1>Khawaja Tahir Mahmood</h1>
            <h3>Lecturer, Department of Computer Science</h3>
            <h4>
              Federal Urdu University of Arts, Science & Technology, Islamabad
            </h4>
          </header>
          <div className="education-background sep-sect">
            <h2>Educational Background</h2>
            <p>
              Khawaja Tahir Mahmood completed his MS(CS) degree in 2004 from
              M.A.J.U Islamabad. With a teaching career spanning over 20 years,
              he has consistently demonstrated excellence in education and
              administration.
            </p>
          </div>
          <div className="career-journey sep-sect">
            <h2>Career Journey</h2>
            <p>
              During his illustrious career, he has served in various
              administrative roles, including:
            </p>
            <ul>
              <li>Head of Department (BS)</li>
              <li>In-charge Final Year Project</li>
              <li>Director Student Affairs</li>
              <li>In-charge Sports</li>
              <li>Member University Disciplinary Committee</li>
              <li>Program Coordinator</li>
              <li>Event Organizer</li>
            </ul>
            <p>
              He has worked with reputable organizations such as Punjab Group of
              Colleges (PGC) and the University of Central Punjab (UCP). In
              2009, he joined FUUAST Islamabad as a permanent faculty member.
            </p>
          </div>
          <div className="teaching-contributions sep-sect">
            <h2>Teaching Contributions</h2>
            <p>
              At FUUAST, he has taught undergraduate and graduate courses,
              including:
            </p>
            <ul>
              <li>Human-Computer Interaction (HCI)</li>
              <li>Software Project Management (SPM)</li>
              <li>Software Engineering</li>
              <li>Object-Oriented Software Engineering (OOSE)</li>
              <li>Final Year Project</li>
            </ul>
          </div>
          <div className="online-platform sep-sect">
            <h2>Online Educational Initiatives</h2>
            <p>
              In 2020, during the COVID-19 pandemic, he launched a successful
              YouTube channel, <strong>Khawaja Science Academy</strong>, to
              support students with free, accessible education.
            </p>
          </div>
          <div className="projects-supervised sep-sect">
            <h2>Final Year Projects Supervised</h2>
            <p>
              He has supervised numerous Final Year Research Projects,
              including:
            </p>
            <ul>
              <li>Medical Billing System</li>
              <li>Graduate Research Management System</li>
              <li>Transport Management System</li>
              <li>Diary Management System</li>
              <li>Account Management System</li>
            </ul>
          </div>
          <div className="research-contributions sep-sect">
            <h2>Research Contributions</h2>
            <p>
              Khawaja Tahir Mahmood originated the Final Year Project (FYP)
              course in 2014 and has published research in IEEE. His research
              interests include:
            </p>
            <ul>
              <li>Human-Computer Interaction</li>
              <li>Usability Evaluation</li>
              <li>Mobile Usability</li>
              <li>Software Engineering</li>
              <li>Databases</li>
            </ul>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default About;
