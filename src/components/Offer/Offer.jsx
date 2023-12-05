import React from "react";
import "./Offer.css";

const Offer = () => {
  return (
    <div className="moving-text-offer">
      <p className="moving-text">
        <span className="offer-title">Title</span>
        <span className="offer-discount">30% off</span>
        <span className="offer-programs">
          Here comes a small description about offer
        </span>
      </p>
    </div>
  );
};

export default Offer;
