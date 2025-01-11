import "./Contact.css";
import Footer from "./Footer.jsx";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import linkedin from "./assets/linkedin-logo.png";
function Contact() {
  return (
    <>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              We'd love to hear from you! Whether you have questions about
              courses, need guidance, or simply want to connect, feel free to
              reach out.
            </p>
            <div className="info-item">
              <h3>Office Address</h3>
              <p>
                First Floor, CS Department, Federal Urdu University of Arts
                Science and Technology, Islamabad
              </p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>
                <a href="tel:">+92 3123456789</a>
              </p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>
                <a href="mailto:rizwanpizzee@gmail.com">
                  rizwanpizzee@gmail.com
                </a>
              </p>
            </div>
            
            <div className="info-item social-links">
              <h3>Follow Us</h3>
              <a href="" target="_blank">
                <img src={facebook} />
              </a>
              <a href="" target="_blank">
                <img src={twitter} />
              </a>
              <a href="" target="_blank">
                <img src={linkedin} />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form
            className="contact-form"
            action="mailto:mrk44561@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Message Subject"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>

        <div className="map-container">
          <h3>Find Us Here</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15891.775023461547!2d73.1913194!3d33.6790967!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfec16c10e65%3A0xfef10fa74d46d99b!2sFederal%20Urdu%20University%20of%20Arts%2C%20Sciences%20%26%20Technology%2C%20Islamabad!5e1!3m2!1sen!2s!4v1736602267296!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: "0", borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
