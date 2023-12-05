import React from "react";
import two from "../../images/single-page/kung-fu.jpg";
import "./Details.css";
import "./Responsive.css";

const KungFu = () => {
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
                      src={two}
                      alt="Kun fu Image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h2>
                    Master self-discovery and physical prowess with dynamic
                    Kung-Fu techniques.
                  </h2>
                  <p>
                    Immerse yourself in the rich tradition of Kung-Fu, a martial
                    art that encompasses fluid movements and powerful
                    techniques. Our Kung-Fu program is designed for all skill
                    levels, offering a holistic approach to physical fitness and
                    self-discovery. Develop agility, coordination, and inner
                    strength while mastering the intricate techniques of this
                    ancient martial art form.
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

export default KungFu;
