import React from "react";

const TaxesAndFees = ({ fees }) => {
  return (
    <div className="fees-wrapper">
      <div className="fees-container">
        <span id="fees-title">Est. taxes & fees</span>
        <span id="fees-num">${parseFloat(fees).toFixed(2)}</span>
      </div>
      <div>
        <span>(Based on 94133)</span>
      </div>
    </div>
  );
};

export default TaxesAndFees;
