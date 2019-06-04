import React from 'react';
import Header from '../components/typed-out-header';
import Intro from '../components/intro';
import Navigation from '../components/navigation-dash';
import Footer from '../components/footer';
import favicon from '../images/favicon.png';

export default class Home extends React.Component {
  state = {
    scrollOcurred: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    // "Force scroll" after a few seconds
    setInterval(this.handleScroll, 2000);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    if (!this.state.scrollOcurred) {
      this.setState({ scrollOcurred: true });
    }
  };

  render() {
    return (
      <div>
        <title>William Lorey</title>

        <Header />
        <Intro scrollOcurred={this.state.scrollOcurred} />
        <Navigation scrollOcurred={this.state.scrollOcurred} />
        <Footer scrollOcurred={this.state.scrollOcurred} />
      </div>
    );
  }
}
