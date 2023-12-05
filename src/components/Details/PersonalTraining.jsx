import React from "react";
import eight from "../../images/single-page/personal-training.jpg";
import "./Details.css";
import "./Responsive.css";

const personalTraining = () => {
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
                      src={eight}
                      alt="Karate Image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h2>
                    Reach fitness goals with dedicated, expert support from
                    certified trainers.
                  </h2>
                  <p>
                    For personalized attention and tailored fitness plans,
                    explore our Personal Training services. Our certified
                    trainers will work closely with you to create a customized
                    workout regimen, address specific fitness goals, and provide
                    the motivation needed to reach new heights. Experience the
                    benefits of one-on-one coaching and accelerate your progress
                    with our dedicated personal training sessions.
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

export default personalTraining;
