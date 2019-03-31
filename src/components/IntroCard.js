import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import './IntroCard.css';

export default class IntroCard extends Component {
  state = {
    becameVisible: false,
  };

  onVisSensorChange = isVisible => {
    if (!this.state.becameVisible) this.setState({ becameVisible: true });
  };

  render() {
    return (
      <div>
        <VisibilitySensor onChange={this.onVisSensorChange}>
          <hr
            className={`${this.state.becameVisible ? 'animate-hr-in' : ''} ${
              this.props.animateOut ? 'animate-hr-out' : ''
            }`}
          />
        </VisibilitySensor>
        <VisibilitySensor>
          <div
            className={`intro-card ${
              this.state.becameVisible ? 'animate-card-in' : ''
            } ${this.props.animateOut ? 'animate-card-out' : ''}`}
          >
            I'm an incoming software engineer @
            <div className="blue">Microsoft</div>, passionate minimalist,
            runner, and soon to be <div className="green">S&amp;T</div> alum.
            <br /> <br />I love building stuff for the web.
          </div>
        </VisibilitySensor>
      </div>
    );
  }
}
