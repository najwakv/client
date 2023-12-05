import React from 'react';
import "./About.css";
import "./Responsive.css";

const About = () => {
  return (
    <div>
      {/* breadcrumb-section */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Experience martial arts mastery</p>
                <h1>About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end breadcrumb section */}

      {/* featured section */}
      <div className="feature-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="featured-text">
                <h2 className="pb-3">
                  Why <span className="orange-text">Champions Martial-arts</span>
                </h2>
                <div className="row">
                  <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
                    <div className="list-box d-flex">
                      <div className="list-icon">
                        <i className="fas fa-trophy"></i>
                      </div>
                      <div className="content">
                        <h3>Holistic Approach</h3>
                        <p>
                          Champions Martial Arts: Where true champions excel in both
                          martial arts and life. Programs emphasize fitness,
                          resilience, and character.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                    <div className="list-box d-flex">
                      <div className="list-icon">
                        <i className="fas fa-trophy"></i>
                      </div>
                      <div className="content">
                        <h3>Expert Instruction</h3>
                        <p>
                          Our experienced instructors are dedicated to delivering
                          top-notch training across various martial arts disciplines,
                          guiding you to mastery.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                    <div className="list-box d-flex">
                      <div className="list-icon">
                        <i className="fas fa-trophy"></i>
                      </div>
                      <div className="content">
                        <h3>Diverse Programs</h3>
                        <p>
                          Discover self-defense in Karate, fluidity in Kung-Fu,
                          high-energy Kickboxing, or balance through Yoga. Programs
                          fit all interests and fitness levels.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="list-box d-flex">
                      <div className="list-icon">
                        <i className="fas fa-trophy"></i>
                      </div>
                      <div className="content">
                        <h3>Community Spirit</h3>
                        <p>
                          Join our supportive martial arts family at Champions.
                          Connect with like-minded individuals passionate about both
                          martial arts and personal growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end featured section */}
    </div>
  );
};

export default About;
