import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      promoCode: this.props.promoCode,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit(e) {
    if (this.state.promoCode === this.state.inputValue) {
      alert("50% OFF!");
    }
    if (this.state.promoCode !== this.state.inputValue) {
      alert("Invalid Code");
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>Promo code</span>
            <input type="text" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Apply" />
        </form>
      </div>
    );
  }
}
