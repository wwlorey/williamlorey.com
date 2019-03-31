import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './PicLink.css';

export default function PicLink(props) {
  if (props.animateOut) {
    console.log('here');
    return (
      <div className="fade-out">
        <ScrollAnimation
          animateIn="animate-pic-link"
          delay={0.5}
          duration={1}
          animatePreScroll={false}
        >
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div
              style={{
                backgroundImage:
                  'url(' + require('../assets/images/' + props.pic) + ')',
              }}
              className="pic"
            />
            <div className="label">{props.label}</div>
          </a>
        </ScrollAnimation>
      </div>
    );
  }

  return (
    <div className="pic-link-wrapper">
      <ScrollAnimation
        animateIn="animate-pic-link"
        delay={0.5}
        duration={1}
        animatePreScroll={false}
      >
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <div
            style={{
              backgroundImage:
                'url(' + require('../assets/images/' + props.pic) + ')',
            }}
            className="pic"
          />
          <div className="label">{props.label}</div>
        </a>
      </ScrollAnimation>
    </div>
  );
}
