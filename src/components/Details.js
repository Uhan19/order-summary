import React, { Component } from "react";
import ExpDetails from "./ExpDetails";
import Promo from "./Promo";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetailsClosed: "true",
      isPromoClosed: "true",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.className === "expanded-details") {
      this.state.isDetailsClosed === "true"
        ? this.setState({ isDetailsClosed: "false" })
        : this.setState({ isDetailsClosed: "true" });
    }
    if (e.target.className === "promo") {
      this.state.isPromoClosed === "true"
        ? this.setState({ isPromoClosed: "false" })
        : this.setState({ isPromoClosed: "true" });
    }
  }

  render() {
    return (
      <div>
        <ExpDetails
          isDetailsClosed={this.state.isDetailsClosed}
          handleClick={e => {
            this.handleClick(e);
          }}
        />
        <Promo
          isPromoClosed={this.state.isPromoClosed}
          handleClick={e => {
            this.handleClick(e);
          }}
        />
      </div>
    );
  }
}
