import React from "react";

const ExpDetails = props => {
  return (
    <div>
      <div
        className="expanded-details"
        onClick={props.handleClick}
        aria-controls="details"
        aria-expanded={props.isDetailsClosed}
      >
        See item details
      </div>
      <div role="region" id="details" aria-hidden={props.isDetailsClosed}>
        <span>
          Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red
        </span>
      </div>
    </div>
  );
};

export default ExpDetails;
