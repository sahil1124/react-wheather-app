import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="city ..." />
          <input type="text" name="country" placeholder="country ..." />
          <button className="btn btn-danger">Get Weather</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
