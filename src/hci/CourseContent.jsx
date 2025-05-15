import { NavLink } from "react-router-dom";
import backIcon from "../assets/back.png";
import "./styles/CourseContent.css";

function CourseContent() {
  const courseTopics = [
    "Introduction to the Course. Key HCI Concepts and Usability Issues",
    "Human Capabilities and Limitations. Human Information Processing Model",
    "Computer based Devices used for Interactive Systems, Basics of Interaction",
    "Psychology of Interaction & Different Interaction Models",
    "Physical Ergonomics, Media Types for Interaction",
    "Different Interface Styles with Examples",
    "Mid Term & Solved Paper Discussion, Design",
    "Different Interface Styles with Examples",
    "Interface Design When you don’t know how, Usability Evaluation: Heuristics and Guidelines for Better User Interfaces",
    "Different Design Approaches: Participatory Design, Task and User Centered Design",
    "Prototyping in Design of Interactive Systems.",
    "Basic Design Issues of Web Based Systems",
    "Lab Practical Session on Websites & Usability Evaluation (Websites).",
    "Design, Implementation, and Evaluation of Web Based Systems",
    "Final Project Demos & Report",
  ];

  return (
    <div className="course-content-container-outer">
      <div className="course-content-container">
        <div className="header-hci-lec">
          {/* <a href="/courses/hci/lectures" className="back-icon-link">
            <img src={backIcon} alt="Go Back" className="back-icon" />
          </a> */}
          <NavLink to="/courses/hci/lectures" className="back-icon-link">
            <img src={backIcon} alt="Go Back" className="back-icon" />
          </NavLink>
          <h1 className="lectures-title">Course Outlines</h1>
          <div></div>
        </div>
        <div className="content-list">
          {courseTopics.map((topic, index) => (
            <div key={index} className="content-item">
              <span className="content-number">{index + 1}.</span>
              <span className="content-text">{topic}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseContent;
