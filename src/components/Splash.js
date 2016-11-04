import React, { Component } from 'react';

export default class Splash extends Component {
  render() {
    let splashTitle = "{ Circus }";
    return (
      <div>
        <h1 className="text-center splash">{splashTitle}</h1>
        <h1 className="text-center splashTag"> come & join your friends </h1>
      </div>
    )
  }
}
