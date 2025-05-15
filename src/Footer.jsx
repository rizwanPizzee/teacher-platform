import { NavLink } from "react-router-dom";

function Footer() {
  function windowScroll() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <div>
      <section className="cta">
        <h2>Join Khawaja Tahir's Courses Today</h2>
        <p>
          Start your journey in mastering HCI, OOSE and ISE with personalized
          guidance.
        </p>
        {/* <a href="/courses">
          <button className="get-btn">Get Started Now</button>
        </a> */}
        <NavLink onClick={windowScroll} to="/courses">
          <button className="get-btn">Get Started Now</button>
        </NavLink>
      </section>
      <footer className="footer">
        <p>&copy; 2025 Khawaja Tahir Academy. All rights reserved.</p>
        <nav>
          <NavLink onClick={windowScroll} to="/about">
            About
          </NavLink>
          <NavLink onClick={windowScroll} to="/contact">
            Contact
          </NavLink>
          <NavLink onClick={windowScroll} to="/faq">
            FAQ
          </NavLink>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
