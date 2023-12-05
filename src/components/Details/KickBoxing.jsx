import React from "react";
import four from "../../images/single-page/kick-boxing.jpg";
import "./Details.css";
import "./Responsive.css";

const KickBoxing = () => {
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
                      src={four}
                      alt="Kick boxing Image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h2>
                    Fuse boxing punches for a dynamic fitness and self-defense
                    regimen.
                  </h2>
                  <p>
                    Unleash the power of your limbs in our Kickboxing program.
                    Combining elements of traditional martial arts and modern
                    fitness, kickboxing is an exhilarating full-body workout.
                    Develop strength, speed, and flexibility as you kick and
                    punch your way to improved fitness. Join our classes to
                    discover the perfect blend of cardio, strength training, and
                    stress relief.
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

export default KickBoxing;
