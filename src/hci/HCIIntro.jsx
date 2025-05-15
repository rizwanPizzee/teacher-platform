import "./styles/HCIIntro.css";
import { NavLink } from "react-router-dom";
import backIcon from "../assets/back.png";
function HCIIntro() {
  return (
    <div className="course-content-container-outer">
      <div className="course-content-container">
        <div>
          <div className="header-hci-lec">
            {/* <a href="/courses/hci/lectures" className="back-icon-link">
            <img src={backIcon} alt="Go Back" className="back-icon" />
            </a> */}
            <div>
              <NavLink to="/courses/hci/lectures" className="back-icon-link">
                <img src={backIcon} alt="Go Back" className="back-icon" />
              </NavLink>
            </div>
            <div>
              <h1 className="lectures-title">Lecture 1</h1>
            </div>
            <div></div>
          </div>
          <div className="container">
            <div className="side-menu">
              <nav>
                <h3>Table of Content</h3>
                <ul>
                  <li>
                    <a href="#hci">Human-Computer Interaction (HCI)</a>
                  </li>
                  <li>
                    <a href="#ui">User Interface</a>
                  </li>
                  <li>
                    <a href="#why-computers">Why People Use Computers</a>
                  </li>
                  <li>
                    <a href="#interaction-design">Interaction Design</a>
                  </li>
                  <li>
                    <a href="#usability">Usability</a>
                  </li>
                  <li>
                    <a href="#designing">Designing for Users</a>
                  </li>
                  <li>
                    <a href="#design-challenges">The Challenge of Design</a>
                  </li>
                  <li>
                    <a href="#personality">Human Personality Differences</a>
                  </li>
                  <li>
                    <a href="#bridging">Bridging Humans and Technology</a>
                  </li>
                  <li>
                    <a href="#conclusion">Conclusion</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="content">
              <section id="hci">
                <h1>Human-Computer Interaction (HCI)</h1>
                <h2>Human</h2>
                <p>
                  The end user of the program interacts with the computer to
                  achieve specific tasks.
                </p>
                <h2>Computer</h2>
                <p>
                  The machine on which the program runs, enabling functionality
                  for the user.
                </p>
                <h2>Interaction</h2>
                <p>
                  Users express their desires or commands to the computer. The
                  computer processes these inputs and communicates the results
                  back to the user.
                </p>
                <p>
                  "A discipline concerned with the design, evaluation, and
                  implementation of interactive computing systems for human use
                  and with the study of major phenomena surrounding them."
                </p>
              </section>
              <section id="ui">
                <h1>User Interface</h1>
                <p>
                  The User Interface (UI) is the part of a software program that
                  enables users to interact with the computer and accomplish
                  their tasks.
                </p>
                <h2>Key Aspects of User Interface</h2>
                <ul>
                  <li>Input language for the user.</li>
                  <li>Output language for the machine.</li>
                  <li>Protocol for the interaction.</li>
                </ul>
                <p>
                  "The user interface of a system is often the yardstick by
                  which that system is judged."
                </p>
              </section>
              <section id="why-computers">
                <h1>Why People Use Computers</h1>
                <p>People use computers to:</p>
                <ul>
                  <li>Write papers.</li>
                  <li>Communicate with others.</li>
                  <li>Design structures like bridges.</li>
                  <li>Manage finances.</li>
                </ul>
              </section>
              <section id="interaction-design">
                <h1>Interaction Design</h1>
                <p>
                  "Designing interactive products to support people in their
                  everyday and working lives."
                </p>
                <h2>Focus Areas</h2>
                <ul>
                  <li>Usefulness - Can the system achieve the desired goal?</li>
                  <li>
                    Utility - Does the system have the required functionality?
                  </li>
                  <li>
                    Usability - How well can users access and use the system's
                    functionality?
                  </li>
                </ul>
              </section>
              <section id="usability">
                <h1>Usability</h1>
                <p>
                  Usability is the degree to which a product helps users achieve
                  their goals efficiently and satisfactorily.
                </p>
                <h2>ISO Definition (9241)</h2>
                <p>
                  "The extent to which a product can be used by specified users
                  to achieve specified goals with effectiveness, efficiency, and
                  satisfaction in a specified context of use."
                </p>
                <h2>Nielsen’s Usability Principles (1993)</h2>
                <ul>
                  <li>Efficiency - Easy to use.</li>
                  <li>Learnability - Easy to learn.</li>
                  <li>Memorability - Easy to remember.</li>
                  <li>Low Errors - Fewer mistakes.</li>
                  <li>Satisfaction - Pleasant to use.</li>
                </ul>
              </section>
              <section id="designing">
                <h1>Designing for Users</h1>
                <h2>Focus Areas</h2>
                <ul>
                  <li>Ergonomics.</li>
                  <li>Organizational factors.</li>
                  <li>Social aspects.</li>
                  <li>Psychological considerations.</li>
                </ul>
                <h2>Key Questions</h2>
                <ul>
                  <li>What can the technology do?</li>
                  <li>What are the possibilities?</li>
                  <li>How can it be built?</li>
                  <li>
                    What are users doing, and how would the design fit their
                    tasks?
                  </li>
                </ul>
              </section>
              <section id="design-challenges">
                <h1>The Challenge of Design</h1>
                <h2>Design Complexity</h2>
                <p>
                  It's easy to make things hard; it's hard to make things easy.
                  Computer science emphasizes logic and function, whereas
                  graphic design prioritizes aesthetics.
                </p>
                <h2>Programmers and UI Design</h2>
                <ul>
                  <li>They don’t think like typical users.</li>
                  <li>They focus on software internals.</li>
                  <li>They may undervalue user experience.</li>
                </ul>
              </section>
              <section id="personality">
                <h1>Human Personality Differences</h1>
                <h2>User Diversity</h2>
                <p>
                  Design must account for users’ physical and psychological
                  differences, including:
                </p>
                <ul>
                  <li>Gender.</li>
                  <li>Cognitive styles.</li>
                  <li>Disabilities.</li>
                  <li>Age differences.</li>
                </ul>
                <h2>Personality Traits</h2>
                <ul>
                  <li>Extraversion vs. Introversion.</li>
                  <li>Sensing vs. Intuition.</li>
                  <li>Perceptive vs. Judging.</li>
                  <li>Feeling vs. Thinking.</li>
                </ul>
              </section>
              <section id="bridging">
                <h1>Bridging Humans and Technology</h1>
                <p>
                  HCI is not about studying humans or technology in isolation
                  but about bridging the two. Successful design requires
                  understanding both what technology can do and how people
                  interact with it.
                </p>
              </section>
              <section id="conclusion">
                <h1>Conclusion</h1>
                <p>
                  Effective interaction design ensures that technology aligns
                  with user needs, making systems intuitive, efficient, and
                  enjoyable to use.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HCIIntro;
