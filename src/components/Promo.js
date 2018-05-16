import React from "react";
import Input from "./Input";

const Promo = props => {
  const title = props.isPromoClosed ? "Apply" : "Hide";
  const sign = props.isPromoClosed ? "[+]" : "[-]";
  return (
    <div>
      <div
        className="promo"
        onClick={props.handleClick}
        aria-controls="details"
        aria-expanded={props.isPromoClosed}
      >
        {title} promo code
        <span> {sign}</span>
      </div>
      <div role="region" id="details" aria-hidden={props.isPromoClosed}>
        <Input
          handleDiscount={props.handleDiscount}
          promoCode={props.promoCode}
        />
      </div>
    </div>
  );
};

export default Promo;
