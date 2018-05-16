import React from "react";

const Total = ({ subtotal, discount, fees }) => {
  const deduction = typeof discount === "string" ? 0 : discount;
  return (
    <div className="total-container">
      <span id="total-title">Est. total</span>
      <span id="total-num">${subtotal + deduction + fees}.00</span>
    </div>
  );
};

export default Total;
