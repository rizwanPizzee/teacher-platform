import "./styles/HCILectures.css";
import backIcon from "./assets/back.png";
function HCILectures() {
  const cards = [
    { title: "Course Outlines", path: "/courses/hci/lectures/course-content" },
    { title: "HCI Intro", path: "/courses/hci/lectures/hci-intro" },
    {
      title: "Human Information Processing",
      path: "/courses/hci/lectures/human-information-processing",
    },
    { title: "Computer" },
    { title: "Interaction" },
    { title: "Ergonomics" },
    {
      title: "Media & Interface Styles",
    },
    {
      title: "Design & TCUID & UCD",
    },
    {
      title: "Heuristics & Design Guidelines for Interface",
    },
    {
      title: "Information Presentation User Interface",
    },
    {
      title: "Colors & Evaluate Design",
    },
  ];

  return (
    <div className="lectures-container-outer">
      <div className="lectures-container">
        <div className="header-hci-lec">
          <div>
            <a
              href="/courses
            "
            >
              <img src={backIcon} alt="backIcon.png" />
            </a>
          </div>
          <div>
            <h1 className="lectures-title">HCI Lectures</h1>
          </div>
          <div></div>
        </div>
        <div className="lectures-grid">
          {cards.map((card, index) => (
            <a key={index} href={card.path} className="lecture-card">
              <div className="lecture-card-content">{card.title}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HCILectures;
