import "./Home.css";
import React, { useState, useEffect } from "react";
function Home() {
  return (
    <>
      <section class="about-teacher">
        <h2>About Khawaja Tahir</h2>
        <p>
          Khawaja Tahir is an experienced educator specializing in Software
          Engineering with a passion for teaching HCI, OOSE and ISE. With 20
          years of experience, he has empowered countless students to excel in
          their fields.
        </p>
      </section>

      <section class="courses">
        <h2>Explore Courses</h2>
        <div class="course-list">
          <div class="course-card">
            <h3>Human-Computer Interaction (HCI)</h3>
            <p>
              Learn to design user-friendly systems by mastering principles of
              HCI.
            </p>
            <button>Learn More</button>
          </div>
          <div class="course-card">
            <h3>Object-Oriented Software Engineering (OOSE)</h3>
            <p>
              Understand scalable system design through object-oriented
              practices.
            </p>
            <button>Learn More</button>
          </div>
          <div class="course-card">
            <h3>Information Systems Engineering (ISE)</h3>
            <p>
              Delve into data-driven solutions and information systems design.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </section>

      <section class="testimonials">
        <h2>What Students Say</h2>
        <div class="testimonial-slider">
          <div class="testimonial">
            <p>
              "Sir Khawaja Tahir transformed my understanding of HCI!" - Ayesha
              R.
            </p>
          </div>
          <div class="testimonial">
            <p>
              "OOSE classes were practical and insightful. Highly recommended!"
              - Ali M.
            </p>
          </div>
          <div class="testimonial">
            <p>
              "ISE concepts were explained so well, I aced my project!" - Sarah
              K.
            </p>
          </div>
          <div class="testimonial">
            <p>
              "Learning with Sir Khawaja Tahir has been a game-changer for me."
              - Ahmed T.
            </p>
          </div>
          <div class="testimonial">
            <p>
              "The interactive sessions made complex topics easy to understand!"
              - Fatima S.
            </p>
          </div>
        </div>
      </section>

      <section class="cta">
        <h2>Join Khawaja Tahir's Courses Today</h2>
        <p>
          Start your journey in mastering HCI, OOSE and ISE with personalized
          guidance.
        </p>
        <button>
          <a href="/courses">Get Started Now</a>
        </button>
      </section>

      <footer class="footer">
        <p>&copy; 2025 Khawaja Tahir Academy. All rights reserved.</p>
        <nav>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </footer>
    </>
  );
}

export default Home;
