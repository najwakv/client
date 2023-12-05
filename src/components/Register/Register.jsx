import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <>
      {/* breadcrumb-section */}
      <div className="gallery-section"></div>
      {/* end breadcrumb section */}
      <div className="mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="single-article-section">
                <div className="comment-template">
                  <h4>Get a Call Back</h4>
                  <p>
                    If you're interested in the program and would like us to
                    call you with more details, please fill out the form below.
                  </p>
                  <form action="/register" method="post">
                    <p>
                      <input type="text" placeholder="Name" name="name" />
                      <input type="email" placeholder="Email" name="email" />
                      <input type="text" placeholder="Contact" name="contact" />
                      <select name="course">
                        <option value="" disabled selected>
                          Select a Course
                        </option>
                        <option value="karate">Karate</option>
                        <option value="kungfu">Kung-Fu</option>
                        <option value="boxing">Boxing</option>
                        <option value="kickboxing">Kick-Boxing</option>
                        <option value="yoga">Yoga</option>
                        <option value="fitness">Fitness</option>
                        <option value="weightloss">Weight Loss</option>
                        <option value="personaltraining">
                          Personal Training
                        </option>
                      </select>
                      <input
                        type="text"
                        placeholder="Location"
                        name="location"
                      />
                    </p>
                    <p>
                      <input type="submit" value="Submit" />
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
