import { useState } from "react";
import "./Footer.css";

const Footer = ({
  backgroundImage = "/assets/pictures/newsletter.png",
}) => {
  const [email, setEmail] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", newsletterEmail);
    setNewsletterEmail("");
  };

  // inline style to allow dynamic backgroundImage (overrides CSS placeholder)
  const newsletterStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email subscription:", email);
    setEmail("");
  };

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-section" style={newsletterStyle}>
        <div className="newsletter-content">
          <p className="newsletter-label">NEWS LETTER</p>
          <h2 className="newsletter-title">Subscribe Our Newsletter</h2>
          <p className="newsletter-description">
            Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc verus.
            Facilisis eget cras sit semper sit anim. Turpis diguet et ac eu
            donec ut.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Type here"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Left Section - Logo and Social */}
          <div className="footer-left">
            <div className="footer-logo">
              <img
                src="/assets/logo.png"
                alt="Restaurant Logo"
                style={{ width: "120px", height: "120px" }}
              />
            </div>
            <p className="footer-description">
              Lorem ipsum dolor sit amet consectetur. Tristique cursus morbi
              nibh nisl vuipestate. Turpis tortor nisl impediahet quis
              consectetur. Urna netus amet et hendrerit. Venematis magnis nisi
              eteget sagitis leo enim.
            </p>
            <div className="social-icons">
              <a href="#facebook" className="social-link" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="#twitter" className="social-link" aria-label="Twitter">
                <i className="fa-brands fa-x" aria-hidden="true"></i>
              </a>
              <a
                href="#instagram"
                className="social-link"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="#linkedin" className="social-link" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Middle Sections */}
          <div className="footer-middle">
            {/* Opening Restaurant */}
            <div className="footer-column">
              <h4 className="footer-heading">Opening Restaurant</h4>
              <ul className="footer-list">
                <li>Su - We: 09:00am - 10:00pm</li>
                <li>Thu - We: 09:00am - 10:00pm</li>
                <li className="closed">Friday: Closed</li>
              </ul>
            </div>

            {/* User Link */}
            <div className="footer-column">
              <h4 className="footer-heading">User Link</h4>
              <ul className="footer-list">
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <a href="#delivery">Order Delivery</a>
                </li>
                <li>
                  <a href="#payment">Payment & Tax</a>
                </li>
                <li>
                  <a href="#terms">Terms of Services</a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="footer-column">
              <h4 className="footer-heading">Contact Us</h4>
              <ul className="footer-list">
                <li>Morocco</li>
                <li>+212 00000000</li>
              </ul>
            </div>
          </div>

          {/* Right Section - Email Subscribe */}
          <div className="footer-right">
            <form onSubmit={handleEmailSubmit} className="email-form">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="email-input"
              />
              <button type="submit" className="email-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p className="copyright">©2026 ABB. All right reserved</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
