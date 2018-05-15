import React from "react";
import Input from "./Input";

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
        <Input subtotal={props.subtotal} promoCode={props.promoCode} />
      </div>
    </div>
  );
};

export default Promo;
