import React, { Component } from "react";
import Subtotal from "./components/Subtotal";
import Pickup from "./components/Pickup";
import TaxAndFees from "./components/TaxesAndFees";
import Total from "./components/Total";
import Details from "./components/Details";
import "./index.css";

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
      <div className="order-summary">
        <Subtotal subtotal={this.state.subtotal} />
        <Pickup discount={this.state.discount} />
        <TaxAndFees fees={this.state.fees} />
        <Total
          subtotal={this.state.subtotal}
          discount={this.state.discount}
          fees={this.state.fees}
        />
        <Details />
      </div>
    );
  }
}
