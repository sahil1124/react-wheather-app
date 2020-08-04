import React, { Component } from "react";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="weather-info">
        {this.props.city && this.props.country && (
          <p className="weather__key">
            Location:
            <span className="weather__value">
              {this.props.city} , {this.props.country}
            </span>
          </p>
        )}
        {this.props.temperature && (
          <p className="weather__key">
            Temperature:
            <span className="weather__value">{this.props.temperature}</span>
          </p>
        )}

        {this.props.humidity && (
          <p className="weather__key">
            Humidity:
            <span className="weather__value">{this.props.humidity}</span>
          </p>
        )}

        {this.props.description && (
          <p className="weather__key">
            Conditions:
            <span className="weather__value">{this.props.description}</span>
          </p>
        )}

        {this.props.error && (
          <h3 className="weather__key">
            <span className="weather__error">{this.props.error}</span>
          </h3>
        )}
      </div>
    );
  }
}

export default Weather;
