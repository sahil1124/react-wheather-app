import React, { Component } from "react";

class Titles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className="title-container__title">Weather Finder</h1>
        <h6 className="title-container__subtitle">
          Find Out Temprature,Conditions and more ...
        </h6>
      </div>
    );
  }
}

export default Titles;
