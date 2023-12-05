import React from 'react';
import "./Hero.css";
import "./Responsive.css";

const Hero = () => {
  return (
    // hero area
    <div className="hero-area hero-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 offset-lg-2 text-center">
            <div className="hero-text">
              <div className="hero-text-tablecell">
                <p className="subtitle">Empower Your Spirit</p>
                <h1>Champions Martial Arts</h1>
                <div className="hero-btns">
                  <a href="#programs" className="boxed-btn">Training Programs</a>
                  <a href="contact.html" className="bordered-btn">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // end hero area
  );
}

export default Hero;
