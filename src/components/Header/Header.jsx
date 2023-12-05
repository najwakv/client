
import React from "react";
import "./Header.css";
import "./Responsive.css";
import Logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="top-header-area" id="sticker">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="main-menu-wrap">
              {/* Logo */}
              <div className="site-logo">
                <a href="/">
                  <img src={Logo} alt="Champions logo" />
                </a>
              </div>
              {/* Logo End */}

              {/* Menu Start */}
              <nav className="main-menu">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/gallery">Gallery</a>
                  </li>
                  <li>
                    <a >Programs</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/karate">Karate</a>
                      </li>
                      <li>
                        <a href="/kungfu">Kung-Fu</a>
                      </li>
                      <li>
                        <a href="/boxing">Boxing</a>
                      </li>
                      <li>
                        <a href="/kickboxing">Kick boxing</a>
                      </li>
                      <li>
                        <a href="/yoga">Yoga</a>
                      </li>
                      <li>
                        <a href="/fitness">Fitness</a>
                      </li>
                      <li>
                        <a href="/weightloss">Weight loss</a>
                      </li>
                      <li>
                        <a href="/personaltraining">Personal Training</a>
                      </li>{" "}
                    </ul>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                  <li>
                    <div className="header-icons">
                      <a
                        className="mobile-hide search-bar-icon"
                        href="https://wa.me/+96877275772"
                      >
                        <i className="fa fa-phone"></i>
                      </a>
                      <a
                        className="shopping-cart"
                        target="_blank"
                        href="https://www.google.com/maps/place/23%C2%B034'28.3%22N+58%C2%B024'35.1%22E/@23.57454,58.4071683,17z/data=!3m1!4b1!4m4!3m3!8m2!3d23.57454!4d58.4097432?hl=en-IN&entry=ttu"
                      >
                        <i className="fas fa-map-marker"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              <a
                className="mobile-show search-bar-icon"
                href="tel:+96877250772"
              >
                <i className="fas fa-phone"></i>
              </a>
              <div className="mobile-menu">Menu</div>
              {/* Menu End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
