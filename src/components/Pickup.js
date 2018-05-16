import React, { Component } from "react";

export default class Pickup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
    };
  }

  render() {
    const tipStyle = { display: this.state.isHover ? "block" : "none" };
    return (
      <div className="pickup-container">
        <span
          id="pickup-title"
          onMouseEnter={() => {
            this.setState({ isHover: true });
          }}
          onMouseLeave={() => {
            this.setState({ isHover: false });
          }}
        >
          Pickup
        </span>
        <div style={tipStyle}>
          Picking up your order in the store helps cut costs, and we pass the
          savings on to you
        </div>
        <span id="pickup-num">{this.props.discount}</span>
      </div>
    );
  }
}
