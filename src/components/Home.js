import React, { Component } from 'react';
import Header from './Header';
import IntroCard from './IntroCard';
import Links from './Links';
import './Home.css';

export default class Home extends Component {
  state = {
    allowFullName: true,
    showInfoCard: false,
    animateInfoCardOut: false,
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
          showIntroCard: false,
          animateInfoCardOut: true,
        })
      : this.setState({
          allowFullName: false,
          showIntroCard: true,
          animateInfoCardOut: false,
        });
  };

  render() {
    return (
      <div>
        <Header allowFullName={this.state.allowFullName} />
        <IntroCard
          show={this.state.showIntroCard}
          animateOut={this.state.animateInfoCardOut}
        />
        <Links />
      </div>
    );
  }
}
