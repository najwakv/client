import React from "react";
import one from "../../images/programs/program-1.jpg";
import two from "../../images/programs/program-2.jpg";
import three from "../../images/programs/program-3.jpg";
import four from "../../images/programs/program-4.jpg";
import five from "../../images/programs/program-5.png";
import six from "../../images/programs/program-6.jpg";
import seven from "../../images/programs/program-7.jpg";
import eight from "../../images/programs/program-8.jpg";

import "./Programs.css";

const Programs = () => {
  return (
    <div className="product-section mt-150 mb-150" id="programs">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="section-title">
              <h3>
                <span className="orange-text">Our</span> Programs
              </h3>
              <p>
                Welcome to a world where strength meets serenity, discipline
                aligns with fitness, and every move brings you closer to your
                goals.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Repeat the following block for each program */}
          <div className="col-lg-4 col-md-6 text-center">
            <div className="single-product-item">
              <div className="product-image">
                <a href="single-product.html">
                  <img src={one} alt="" />
                </a>
              </div>
              <h3>Karate</h3>
              <p className="product-price">
                <span>
                  Discover strength and discipline through traditional Japanese
                  martial arts.
                </span>
              </p>
              <a href="/karate" className="cart-btn">
                Details
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="single-product-item">
              <div className="product-image">
                <a href="single-product.html">
                  <img src={two} alt="" />
                </a>
              </div>
              <h3>Kung-Fu</h3>
              <p className="product-price">
                <span>
                  Master self-discovery and physical prowess with dynamic
                  Kung-Fu techniques.
                </span>
              </p>
              <a href="/karate" className="cart-btn">
                Details
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="single-product-item">
              <div className="product-image">
                <a href="single-product.html">
                  <img src={three} alt="" />
                </a>
              </div>
              <h3>Boxing</h3>
              <p className="product-price">
                <span>
                  Unleash strength and agility in a high-energy boxing workout.
                </span>
              </p>
              <a href="/karate" className="cart-btn">
                Details
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="single-product-item">
              <div className="product-image">
                <a href="single-product.html">
                  <img src={four} alt="" />
                </a>
              </div>
              <h3>Kick boxing</h3>
              <p className="product-price">
                <span>
                  Fuse boxing punches for a dynamic fitness and self-defense
                  regimen.
                </span>
              </p>
              <a href="/karate" className="cart-btn">
                Details
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="single-product-item">
              <div className="product-image">
                <a href="single-product.html">
                  <img src={five} alt="" />
                </a>
              </div>
              <h3>Yoga</h3>
              <p className="product-price">
                <span>
                  Attain balance of mind and body through the ancient practice
                  of Yoga.
                </span>
              </p>
              <a href="/karate" className="cart-btn">
                Details
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="single-product-item">
              <div className="product-image">
                <a href="single-product.html">
                  <img src={six} alt="" />
                </a>
              </div>
              <h3>Fitness</h3>
              <p className="product-price">
                <span>
                  Elevate your well-being with tailored programs for holistic
                  health.
                </span>
              </p>
              <a href="/karate" className="cart-btn">
                Details
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="single-product-item">
              <div className="product-image">
                <a href="single-product.html">
                  <img src={seven} alt="" />
                </a>
              </div>
              <h3>Weight loss</h3>
              <p className="product-price">
                <span>
                  Healthy weight loss through personalized workouts and
                  nutrition guidance.
                </span>
              </p>
              <a href="/karate" className="cart-btn">
                Details
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="single-product-item">
              <div className="product-image">
                <a href="single-product.html">
                  <img src={eight} alt="" />
                </a>
              </div>
              <h3>Personal Training</h3>
              <p className="product-price">
                <span>
                  Reach fitness goals with dedicated, expert support from
                  certified trainers.
                </span>
              </p>
              <a href="/karate" className="cart-btn">
                Details
              </a>
            </div>
          </div>
          {/* End of block */}

          {/* Repeat the above block for each program */}
        </div>
      </div>
    </div>
  );
};

export default Programs;
