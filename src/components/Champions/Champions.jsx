import React from 'react';
import "./Champions.css";
import "./Responsive.css";

const Champions = () => {
  return (
    <div className="abt-section mb-150 mt-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="abt-bg"></div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="abt-text">
              <p className="top-sub">Since Year 2022</p>
              <h2>
                We are <span className="orange-text">Champions Martial-arts</span>
              </h2>
              <p>
                Welcome to Champions Martial Arts, a premier martial arts
                destination founded in 2022 in the vibrant city of Bawshar, Muscat,
                Oman. At our center, we believe in nurturing both the body and mind,
                offering a diverse range of programs to cater to every individual's
                fitness and wellness goals.
              </p>
              <p>
                Established in 2022, Champions Martial Arts has quickly become a hub
                for martial arts enthusiasts and fitness seekers in Bawshar and
                beyond. Our founders envisioned a space where traditional martial
                arts, modern fitness, and holistic well-being converge, creating a
                community dedicated to personal growth and empowerment.
              </p>
              <a href="/about" className="boxed-btn mt-4">know more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Champions;