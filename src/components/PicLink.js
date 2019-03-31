import React from 'react';
import './PicLink.css';

export default function PicLink(props) {
  return (
    <div className={`pic-link-wrapper ${props.className}`}>
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
    </div>
  );
}
