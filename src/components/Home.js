// TODO: Something is broken w/ animating/showing the intro card & links

import React, { Component } from 'react';
import Header from './Header';
import IntroCard from './IntroCard';
import Links from './Links';
import './Home.css';

let scrollOcurred = false;

export default class Home extends Component {
  state = {
    allowFullName: true,
    animateNonHeaderContent: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    if (window.pageYOffset === 0) {
      scrollOcurred = false;
      this.setState({
        allowFullName: true,
        animateNonHeaderContent: true,
      });
    } else {
      // Avoid many calls to setState
      if (!scrollOcurred) {
        scrollOcurred = true;
        this.setState({
          allowFullName: false,
          animateNonHeaderContent: false,
        });
      }
    }
  };

  render() {
    return (
      <div>
        <Header allowFullName={this.state.allowFullName} />
        <IntroCard animateOut={this.state.animateNonHeaderContent} />
        <Links animateOut={this.state.animateNonHeaderContent} />
      </div>
    );
  }
}
