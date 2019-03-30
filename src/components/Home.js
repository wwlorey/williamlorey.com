import React, { Component } from 'react';
import Header from './Header';
import IntroCard from './IntroCard';
import './Home.css';

export default class Home extends Component {
  state = {
    allowFullName: true,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    window.pageYOffset === 0
      ? this.setState({ allowFullName: true })
      : this.setState({ allowFullName: false });
  };

  render() {
    return (
      <div className="home">
        <Header allowFullName={this.state.allowFullName} />
        <IntroCard />
      </div>
    );
  }
}
