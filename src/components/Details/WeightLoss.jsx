import React from "react";
import seven from "../../images/single-page/weight-loss.jpg";
import "./Details.css";
import "./Responsive.css";

const WeightLoss = () => {
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
                      src={seven}
                      alt="Weight loss Image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h2>
                    Healthy weight loss through personalized workouts and
                    nutrition guidance.
                  </h2>
                  <p>
                    Embark on a personalized journey to a healthier weight with
                    our Weight Loss program. Our comprehensive approach combines
                    fitness training, nutrition guidance, and lifestyle
                    adjustments to support your weight loss goals. Join our
                    program to experience sustainable results and develop habits
                    that contribute to a healthier, more active lifestyle.
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

export default WeightLoss;
