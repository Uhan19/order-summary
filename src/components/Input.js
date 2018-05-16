import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      touched: false,
      promoCode: this.props.promoCode,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit(e) {
    if (this.state.promoCode === this.state.inputValue && !this.state.touched) {
      this.props.handleDiscount();
      this.setState({
        inputValue: "",
        touched: true,
      });
    } else {
      alert("Invalid Code");
      this.setState({ inputValue: "" });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span id="promo-code-text">Promo code</span>
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleChange}
            />
          </label>
          <input className="btn" type="submit" value="Apply" />
        </form>
      </div>
    );
  }
}
