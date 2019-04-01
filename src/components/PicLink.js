import React, { Component } from 'react';
import './PicLink.css';

export default class PicLink extends Component {
  constructor(props) {
    super(props);
    this.resizeTimer = null;
  }

  state = {
    transitions: true,
  };

  handleResize = () => {
    // Prevent goofy transitions while resizing
    this.setState({ transitions: false });

    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.setState({ transitions: true });
    }, 200);
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div
        className={`pic-link-wrapper ${this.props.className} ${
          this.state.transitions ? '' : 'no-transitions'
        }`}
      >
        <a
          href={this.props.link}
          target={this.props.newTab ? '_blank' : ''}
          rel={this.props.newTab ? 'noopener noreferrer' : ''}
        >
          <div
            style={{
              backgroundImage:
                'url(' + require('../assets/images/' + this.props.pic) + ')',
            }}
            className="pic"
          />
          <div className="label">{this.props.label}</div>
        </a>
      </div>
    );
  }
}
