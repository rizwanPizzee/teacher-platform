import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import HCILectures from "./HCILectures";
import "./styles/Courses.css";

function Courses() {
  const courses = [
    {
      name: "Human-Computer Interaction (HCI)",
      videosPath: "/videos",
      description:
        "Explore the principles of designing intuitive and user-friendly interfaces that enhance human interaction with technology.",
    },
    {
      name: "Object-Oriented Software Engineering (OOSE)",
      videosPath: "/videos",
      description:
        "Learn to apply object-oriented principles to design, develop, and maintain complex software systems effectively.",
    },
    {
      name: "Introduction to Software Engineering (ISE)",
      videosPath: "/videos",
      description:
        "Understand the fundamental concepts, processes, and methodologies involved in building reliable and scalable software systems.",
    },
  ];

  function crossWindow() {
    document.querySelector(".warning-preview").style.display = "none";
  }

  return (
    <>
      <div className="courses-container-outer">
        <div className="courses-container">
          <h1 className="courses-title">Courses</h1>
          <div className="courses-list">
            {courses.map((course, index) => (
              <div key={index} className="course-item">
                <h2 className="course-name">{course.name}</h2>
                <p>{course.description}</p>
                <div className="course-buttons">
                  {/* <a href={course.videosPath} className="course-btn">
                  Videos
                </a> */}
                  {course.name ===
                    "Introduction to Software Engineering (ISE)" ||
                  course.name ===
                    "Object-Oriented Software Engineering (OOSE)" ? (
                    <button
                      style={{ height: "33px" }}
                      className="course-btn"
                      onClick={() => {
                        document.querySelector(
                          ".warning-preview"
                        ).style.display = "flex";
                      }}
                    >
                      Lectures
                    </button>
                  ) : (
                    <Link to="/courses/hci/lectures">
                      <button
                        style={{ height: "33px" }}
                        className="course-btn "
                      >
                        Lectures
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="warning-preview"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              crossWindow();
            }
          }}
          tabIndex={-1}
        >
          <div className="warning-inner">
            <div>
              There is no ISE/OOSE lectures right now. You can check its videos
              or explore the HCI course.
            </div>
            <div className="cross-warning" onClick={crossWindow}>
              X
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Courses;
