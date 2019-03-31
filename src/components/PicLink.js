import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './PicLink.css';

export default function PicLink(props) {
  return (
    <div className="pic-link-wrapper">
      <ScrollAnimation
        animateIn="animate-pic-link"
        delay={1}
        duration={1.2}
        animatePreScroll={false}
      >
        <a href={props.link} target="_blank">
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
