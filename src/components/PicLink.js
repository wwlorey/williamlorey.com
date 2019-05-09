import React, { Component } from 'react';
import './PicLink.css';

function PicLink(props) {
  return (
    <div className={`pic-link-wrapper ${props.className}`}>
      <a
        href={props.link}
        target={props.newTab ? '_blank' : ''}
        rel={props.newTab ? 'noopener noreferrer' : ''}
        className={'pic-link-link'}
      >
        <div
          style={{
            backgroundImage:
              'url(' + require('../assets/images/' + props.pic) + ')'
          }}
          className='pic'
        />
        <div className='label'>{props.label}</div>
      </a>
    </div>
  );
}

export default PicLink;