import React from "react";
import one from "../../images/single-page/karate.jpg";
import "./Details.css"
import "./Responsive.css"

const Karate = () => {
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
                      src={one}
                      alt="Karate Image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h2>
                    Discover strength and discipline through traditional
                    Japanese martial arts.
                  </h2>
                  <p>
                    Welcome to our Karate program, where discipline meets
                    strength! Learn the ancient art of Karate and empower
                    yourself physically and mentally. Our experienced
                    instructors will guide you through a curriculum that
                    combines traditional forms, practical self-defense
                    techniques, and valuable life skills. Join our Karate
                    classes to enhance your focus, build confidence, and achieve
                    a harmonious balance between body and mind.
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

export default Karate;
