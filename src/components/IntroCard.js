import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './IntroCard.css';

export default function IntroCard(props) {
  if (props.animateOut) {
    return (
      <ScrollAnimation animateIn="fade-out" duration={1}>
        <hr />
        <div className="intro-card">
          I'm an incoming software engineer @
          <div className="blue">Microsoft</div>, passionate minimalist, runner,
          and soon to be <div className="green">S&amp;T</div> alum.
          <br /> <br />I love building stuff for the web.
        </div>
      </ScrollAnimation>
    );
  }

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
          I'm an incoming software engineer @
          <div className="blue">Microsoft</div>, passionate minimalist, runner,
          and soon to be <div className="green">S&amp;T</div> alum.
          <br /> <br />I love building stuff for the web.
        </div>
      </ScrollAnimation>
    </div>
  );
}
