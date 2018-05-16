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
      subtotal: 100,
      discount: "free",
      fees: 8,
      promoCode: "musicalchairs",
    };
    this.handleDiscount = this.handleDiscount.bind(this);
  }

  handleDiscount() {
    console.log("triggered");
    this.setState({
      subtotal: this.state.subtotal * 0.5,
    });
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
        <Details
          promoCode={this.state.promoCode}
          subtotal={this.state.subtotal}
          handleDiscount={this.handleDiscount}
        />
      </div>
    );
  }
}
