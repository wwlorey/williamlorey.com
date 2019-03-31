// TODO: Something is broken w/ animating/showing the intro card & links

import React, { Component } from 'react';
import Header from './Header';
import IntroCard from './IntroCard';
import Links from './Links';
import './Home.css';

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
    window.pageYOffset === 0
      ? this.setState({
          allowFullName: true,
          animateNonHeaderContent: true,
        })
      : this.setState({
          allowFullName: false,
          animateNonHeaderContent: false,
        });
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
