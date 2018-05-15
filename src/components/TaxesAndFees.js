import React from "react";

const TaxesAndFees = ({ fees }) => {
  return (
    <div>
      <div>
        <span>Est. taxes & fees</span>
        <span>${fees}</span>
      </div>
      <div>
        <span>(Based on 94133)</span>
      </div>
    </div>
  );
};

export default TaxesAndFees;
