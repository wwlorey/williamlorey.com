import React, { Component } from 'react';
import VisibilitySensor from "react-visibility-sensor";
import './Footer.css';

export default class Footer extends Component {
  state = {
    becameVisible: false
  };

  onVisSensorChange = isVisible => {
    if (!this.state.becameVisible) this.setState({ becameVisible: true });
  };

  render() {
    return (
      <VisibilitySensor onChange={this.onVisSensorChange}>
        <p
          id='footer'
          className={`${
            this.state.becameVisible ? 'animate-footer-in' : ''
          } ${this.props.animateOut ? 'animate-footer-out' : ''}`}
        >
          📧 Get in touch:{' '}
          <a id='email' href='mailto:will@williamlorey.com'>
            will@williamlorey.com
          </a>
          <br />
          &#169; {new Date().getFullYear()} William Lorey
        </p>
      </VisibilitySensor>
    );
  }
}
