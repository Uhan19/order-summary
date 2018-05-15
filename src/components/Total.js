import React from "react";

const Total = ({ subtotal, discount, fees }) => {
  const deduction = typeof discount === "string" ? 0 : discount;
  return (
    <div>
      <span>Est. total</span>
      <span>${subtotal + deduction + fees}</span>
    </div>
  );
};

export default Total;
