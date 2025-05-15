import "./styles/CourseContent.css";
import { NavLink } from "react-router-dom";
import backIcon from "../assets/back.png";

function HIP() {
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
          <h1 className="lectures-title">Lecture 2</h1>
          <div></div>
        </div>
        <div className="content-list">
          <p
            style={{
              "text-align": "center",
              "background-color": "white",
              padding: "20px 0px",
              "border-radius": "10px",
            }}
          >
            No Lecture Found!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HIP;
