import React, { Component } from "react";
import Subtotal from "./components/Subtotal";
import Pickup from "./components/Pickup";
import TaxAndFees from "./components/TaxesAndFees";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtotal: 10,
      discount: "free",
      fees: 3,
    };
  }
  render() {
    return (
      <div>
        <h1>Purchase Summary</h1>
        <Subtotal subtotal={this.state.subtotal} />
        <Pickup discount={this.state.discount} />
        <TaxAndFees fees={this.state.fees} />
      </div>
    );
  }
}
