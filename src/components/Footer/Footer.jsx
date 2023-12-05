import React from 'react';
import "./Footer.css";
import "./Responsive.css";


const Footer = () => {
  return (
    <>
      {/* Footer */}
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="footer-box about-widget">
                <h2 className="widget-title">About us</h2>
                <p>
                  We are a premier martial arts destination founded in 2022 in the
                  vibrant city of Bawshar, Muscat, Oman. At our center, we believe
                  in nurturing both the body and mind, offering a diverse range of
                  programs to cater to every individual's fitness and wellness
                  goals.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="footer-box get-in-touch">
                <h2 className="widget-title">Get in Touch</h2>
                <ul>
                  <li>Building No 658, 5507, Bowsher, 133, Oman</li>
                  <li>cmacmuscat@gmail.com</li>
                  <li>
                    <a href="tel:+96877250772">
                      <i className="fas fa-phone"></i> 77250772
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/+96877275772">
                      <i className="fab fa-whatsapp"></i> 77275772
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="footer-box pages">
                <h2 className="widget-title">Quick links</h2>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/gallery">Gallery</a></li>
                  <li><a href="#programs">Programs</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Footer */}

      {/* Copyright */}
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p>
                Copyrights &copy; 2022 -
                <a href="/">Champions Martial-arts</a>, All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 text-right col-md-12">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/champions_martialartsclub?igshid=YTQwZjQ0NmI0OA=="
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
