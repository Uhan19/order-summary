import React from "react";
import Chair from "../images/walmart-chair.jpeg";

const ExpDetails = props => {
  const title = props.isDetailsClosed ? "See" : "Hide";
  const sign = props.isDetailsClosed ? "[+]" : "[-]";
  return (
    <div>
      <div
        className="expanded-details"
        onClick={props.handleClick}
        aria-controls="details"
        aria-expanded={props.isDetailsClosed}
      >
        {title} item details
        <span> {sign}</span>
      </div>
      <div role="region" id="details" aria-hidden={props.isDetailsClosed}>
        <div className="exp-details-wrapper">
          <span>
            <img id="chair" src={Chair} alt={"not found"} />
          </span>
          <div>
            <span id="exp-details-description">
              Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red
            </span>
            <div className="exp-details-footer">
              <span id="exp-details-footer-num">${props.subtotal}.00</span>
              <span id="exp-details-qty">Qty: 1</span>
            </div>
            <div className="exp-details-color">
              <span id="exp-details-color-text">Actual color: Red</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpDetails;
