import React from "react";
import "./Contact.css";
import "./Responsive.css";

const Contact = () => {
  return (
    <>
    {/* breadcrumb-section */}
    <div className="gallery-section"></div>
      {/* end breadcrumb section */}
      {/* Contact form section */}
      <div className="contact-from-section mt-100 mb-150">
        <div className="container center-content">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="contact-form-wrap">
                <div className="contact-form-box">
                  <h4>
                    <i className="fas fa-map"></i> Address
                  </h4>
                  <p>
                    Building No 658, 5507, <br />
                    Bawsher, 133. <br />
                    Oman
                  </p>
                </div>
                <div className="contact-form-box">
                  <h4>
                    <i className="far fa-clock"></i> Working Hours
                  </h4>
                  <p>Mon: 7:00 AM - 8:00 PM</p>
                  <p>Tue: 7:00 AM - 8:00 PM</p>
                  <p>Wed: 7:00 AM - 8:00 PM</p>
                  <p>Thu: 7:00 AM - 8:00 PM</p>
                  <p>Fri: 7:00 AM - 8:00 PM</p>
                  <p>Sat: 7:00 AM - 8:00 PM</p>
                  <p>Sun: 7:00 AM - 8:00 PM</p>
                </div>
                <div className="contact-form-box">
                  <h4>
                    <i className="fas fa-address-book"></i> Contact
                  </h4>
                  <p>
                    Phone: <a href="tel:+96877250772">77250772</a>
                  </p>
                  <p>
                    WhatsApp: <a href="https://wa.me/+96877275772">77275772</a>
                  </p>
                  <p>
                    Email:
                    <a href="mailto:cmacmuscat@gmail.com">
                      cmacmuscat@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact form section */}

      {/* Find our location section */}
      <div className="find-location blue-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p>
                <i className="fas fa-map-marker-alt"></i> Find Our Location
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End Find our location section */}

      {/* Google map section */}
      <div className="embed-responsive embed-responsive-21by9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14152.757641778944!2d58.409159914066876!3d23.576174886497718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e932c6d6e4933e1%3A0x1d0b3c75c7e69a3c!2sYour%20Location%20Here!5e0!3m2!1sen!2sbd!4v1576846473265!5m2!1sen!2sbd"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          className="embed-responsive-item"
        ></iframe>
      </div>
      {/* End Google map section */}
    </>
  );
};

export default Contact;
