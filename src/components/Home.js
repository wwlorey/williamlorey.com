import React, { Component } from 'react';
import Header from './Header';
import Intro from './Intro';
import Links from './Links';
import './Home.css';

let scrollOcurred = false;

export default class Home extends Component {
  state = {
    initialLoad: true,
    atTopOfPage: true,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    this.setState({ initialLoad: false });

    if (window.pageYOffset === 0) {
      scrollOcurred = false;
      this.setState({ atTopOfPage: true });
    } else {
      // Avoid tons of calls to setState
      if (!scrollOcurred) {
        scrollOcurred = true;
        this.setState({ atTopOfPage: false });
      }
    }
  };

  render() {
    if (this.state.initialLoad) {
      // Only load the header
      return (
        <div>
          <Header allowFullName={this.state.atTopOfPage} />

          {/* Ensure scrolling is possible after animation ends */}
          <div style={{ marginBottom: '100vh' }} />
        </div>
      );
    }

    return (
      <div>
        <Header allowFullName={this.state.atTopOfPage} />
        <Intro animateOut={this.state.atTopOfPage} />
        <Links animateOut={this.state.atTopOfPage} />
      </div>
    );
  }
}
