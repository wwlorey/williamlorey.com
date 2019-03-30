import React, { Component } from 'react';
import Header from './Header';
import IntroCard from './IntroCard';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <IntroCard />
      </div>
    );
  }
}
