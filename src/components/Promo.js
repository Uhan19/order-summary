import React from "react";

const Promo = props => {
  return (
    <div>
      <div
        className="promo"
        onClick={props.handleClick}
        aria-controls="details"
        aria-expanded={props.isPromoClosed}
      >
        Apply promo code
      </div>
      <div role="region" id="details" aria-hidden={props.isPromoClosed}>
        <span>Promo</span>
      </div>
    </div>
  );
};

export default Promo;
