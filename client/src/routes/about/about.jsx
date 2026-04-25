import { Link } from "react-router-dom";
import "./about.scss";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="header">
          <h1>About 71 & Sunny, Inc.</h1>
          <p>
            Downtown Condo Guys is a focused property management service for
            Downtown San Diego, centered on professional condo leasing and
            tenant support in the urban core.
          </p>
        </div>

        <div className="content">
          <section className="mission">
            <h2>Our Mission</h2>
            <p>
              We manage Downtown San Diego condominium rentals with local
              expertise, clear communication, and fast responses for both
              tenants and owners.
            </p>
          </section>

          <section className="features">
            <h2>Key Features</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <h3>Rental Listings</h3>
                <p>
                  Browse Downtown San Diego rental properties with detailed
                  information and images.
                </p>
              </div>
              <div className="feature-card">
                <h3>Real-time Chat</h3>
                <p>
                  Instant communication between tenants and property managers through our
                  integrated chat system.
                </p>
              </div>
              <div className="feature-card">
                <h3>User Profiles</h3>
                <p>
                  Create and manage your profile to showcase your properties and
                  preferences.
                </p>
              </div>
              <div className="feature-card">
                <h3>Search & Filter</h3>
                <p>
                  Advanced search and filtering options to find your perfect
                  property.
                </p>
              </div>
            </div>
          </section>

          <section className="team">
            <h2>Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <h3>71 & Sunny, Inc.</h3>
                <p>Downtown Condo Management</p>
              </div>
              <div className="team-member">
                <h3>Downtown Condo Guys</h3>
                <p>Local San Diego Leasing Experts</p>
              </div>
              <div className="team-member">
                <h3>Downtown Service Area</h3>
                <p>Exclusive Downtown San Diego Properties</p>
              </div>
            </div>
          </section>

          <section className="contact">
            <h2>Get in Touch</h2>
            <p>Have questions or suggestions? We'd love to hear from you!</p>
            <Link to="/contact" className="contact-btn">
              Contact Us
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
