import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './IntroCard.css';

export default function IntroCard(props) {
  if (props.show) {
    return (
      <div>
        <ScrollAnimation
          animateIn="animate-hr"
          delay={1}
          duration={1.2}
          animatePreScroll={false}
        >
          <hr />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate-card-in"
          delay={2}
          duration={1.2}
          animatePreScroll={false}
        >
          <div className="intro-card">
            I'm a senior at Missouri S&T and an incoming software engineer at
            Microsoft. I make stuff for the web.
          </div>
        </ScrollAnimation>
      </div>
    );
  } else if (props.animateOut) {
    return (
      <ScrollAnimation animateIn="fade-out" duration={1}>
        <hr />
        <div className="intro-card">
          I'm a senior at Missouri S&T and an incoming software engineer at
          Microsoft. I make stuff for the web.
        </div>
      </ScrollAnimation>
    );
  }

  return <div style={{ height: '50vh' }} />;
}
