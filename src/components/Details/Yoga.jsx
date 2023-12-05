import React from "react";
import five from "../../images/single-page/yoga.jpg";
import "./Details.css";
import "./Responsive.css";

const Yoga = () => {
  return (
    <>
      {/* breadcrumb-section */}
      <div className="gallery-section"></div>
      {/* end breadcrumb section */}
      <div className="mt-100 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="single-article-section">
                <div className="single-article-text">
                  <div className="custom-div">
                    <img
                      src={five}
                      alt="Yoga Image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h2>
                    Attain balance of mind and body through the ancient practice
                    of Yoga.
                  </h2>
                  <p>
                    Find tranquility and balance in our Yoga program. Immerse
                    yourself in the ancient practice of yoga, where mindfulness
                    and movement converge. Our classes cater to all levels,
                    offering a space for relaxation, flexibility, and stress
                    reduction. Join us on a journey of self-discovery as you
                    enhance your physical and mental well-being through the art
                    of yoga.
                  </p>
                </div>

                <div className="comment-template mt-4">
                  <p>
                    <a href="/register">
                      <input type="button" value="Register" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Yoga;
