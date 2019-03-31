import React from 'react';
import './PicLink.css';

export default function PicLink(props) {
  return (
    <div className="pic-link-wrapper">
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
    </div>
  );
}
