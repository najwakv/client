import React from "react";
import three from "../../images/single-page/boxing.jpg";
import "./Details.css";
import "./Responsive.css";

const Boxing = () => {
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
                      src={three}
                      alt="Boxing Image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h2>
                    Unleash strength and agility in a high-energy boxing
                    workout.
                  </h2>
                  <p>
                    Step into the ring and experience the adrenaline-pumping
                    world of boxing. Our Boxing program is tailored for those
                    seeking a high-intensity workout that also hones
                    self-defense skills. Whether you're a beginner or an
                    experienced pugilist, our expert trainers will help you
                    refine your technique, improve cardiovascular health, and
                    unleash your inner fighter.
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

export default Boxing 