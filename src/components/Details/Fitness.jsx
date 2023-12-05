import React from "react";
import six from "../../images/single-page/fitness.jpg";
import "./Details.css";
import "./Responsive.css";

const Fitness = () => {
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
                      src={six}
                      alt="Fitness Image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h2>
                    Elevate your well-being with tailored programs for holistic
                    health.
                  </h2>
                  <p>
                    Transform your body and embrace a healthier lifestyle with
                    our Fitness program. Tailored for individuals of all fitness
                    levels, our program combines cardiovascular exercises,
                    strength training, and flexibility workouts. Our certified
                    trainers will guide you toward your fitness goals, helping
                    you build endurance, tone muscles, and achieve overall
                    well-rounded health.
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

export default Fitness;
