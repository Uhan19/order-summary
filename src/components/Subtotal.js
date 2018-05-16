import React from "react";

const Subtotal = ({ subtotal }) => {
  return (
    <div className="subtotal-container">
      <span id="subtotal-title">Subtotal</span>
      <span id="subtotal-num">${subtotal}.00</span>
    </div>
  );
};

export default Subtotal;
