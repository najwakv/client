import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <>
      {/* breadcrumb-section */}
      <div className="gallery-section"></div>
      {/* end breadcrumb section */}
      <div className="mt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  <span className="orange-text">Gallery</span>
                </h3>
                <p>
                  Explore moments of discipline, strength, and the joy of
                  achievement as captured in our gallery.
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-team-item">
                <div
                  style={{
                    height: "400px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "5px",
                    backgroundColor: "#ddd",
                    overflow: "hidden",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    //   src={}
                    alt="Gallery image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
