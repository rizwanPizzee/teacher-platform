import "./styles/Home.css";
import Footer from "./Footer.jsx";
import fuuast from "./assets/fuuast.png";
import szabist from "./assets/szabist.png";
function Home() {
  const testimonials = [
    {
      stdTestimonials: `"Sir Khawaja Tahir transformed my understanding of HCI!" - Ayesha
              R.`,
    },
    {
      stdTestimonials: `"OOSE classes were practical and insightful. Highly recommended!"
              - Ali M.`,
    },
    {
      stdTestimonials: `"ISE concepts were explained so well, I aced my project!" - Sarah
              K.`,
    },
    {
      stdTestimonials: `"Learning with Sir Khawaja Tahir has been a game-changer for me."
              - Ahmed T.`,
    },
    {
      stdTestimonials: `"The interactive sessions made complex topics easy to understand!"
              - Fatima S.`,
    },
  ];

  return (
    <>
      <section className="about-teacher">
        <h2>About Khawaja Tahir Mahmood</h2>
        <p>
          Khawaja Tahir Mahmood, a Lecturer at FUUAST Islamabad, has over 20
          years of teaching experience, specializing in Human Computer
          Interaction, Software Engineering, and Mobile Usability. He has
          supervised numerous Final Year Research Projects and published
          research in IEEE. His research interests include Usability Evaluation
          and Software Engineering.
        </p>
      </section>

      <section className="courses">
        <h2>Explore Courses</h2>
        <div className="course-list">
          <div className="course-card">
            <h3>Human-Computer Interaction (HCI)</h3>
            <p>
              Learn to design user-friendly systems by mastering principles of
              HCI.
            </p>
          </div>
          <div className="course-card">
            <h3>Object-Oriented Software Engineering (OOSE)</h3>
            <p>
              Understand scalable system design through object-oriented
              practices.
            </p>
          </div>
          <div className="course-card">
            <h3>Introduction to Software Engineering (ISE)</h3>
            <p>Laying the foundation for a successful career in technology.</p>
          </div>
        </div>
        <div className="lrn-mre">
          <a href="/courses">
            <button className="learn-more-btn">Learn More</button>
          </a>
        </div>
      </section>
      <section className="trusted-by">
        <h2>Trusted By</h2>
        <div>
          <div>
            <a href="https://fuuastisb.edu.pk/" target="_blank">
              <img src={fuuast} alt="fuuast.png" />
            </a>
            <a href="https://szabist-isb.edu.pk/" target="_blank">
              <img src={szabist} alt="szabist.png" />
            </a>
          </div>
          <div></div>
        </div>
      </section>
      <section className="awards">
        <h2>Awards & Recognition</h2>
        <p>Awarded Best Educator in Computer Science 2025 (FUUAST)</p>
      </section>
      <div className="lrn-mre instructor">
        <a href="/about">
          <button className="learn-more-btn">More About Instructor</button>
        </a>
      </div>
      <section className="testimonials-home">
        <h2>What Students Say</h2>
        <div className="testimonial-slider">
          {testimonials.map((feedback, index) => {
            return (
              <div key={index} className="testimonial-home">
                <p>{feedback.stdTestimonials}</p>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
export default Home;
