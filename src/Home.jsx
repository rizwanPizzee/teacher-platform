import "./Home.css";
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
        <h2>About Khawaja Tahir</h2>
        <p>
          Khawaja Tahir is an experienced educator specializing in Software
          Engineering with a passion for teaching HCI, OOSE and ISE. With 20
          years of experience, he has empowered countless students to excel in
          their fields.
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
            <button>Learn More</button>
          </div>
          <div className="course-card">
            <h3>Object-Oriented Software Engineering (OOSE)</h3>
            <p>
              Understand scalable system design through object-oriented
              practices.
            </p>
            <button>Learn More</button>
          </div>
          <div className="course-card">
            <h3>Introduction to Software Engineering (ISE)</h3>
            <p>Laying the foundation for a successful career in technology.</p>
            <button>Learn More</button>
          </div>
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
      <section className="testimonials">
        <h2>What Students Say</h2>
        <div className="testimonial-slider">
          {testimonials.map((feedback, index) => {
            return (
              <div key={index} className="testimonial">
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
