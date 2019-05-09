import React from 'react';
import './Tile.css';

function Tile(props) {
  if (props.link === '') {
    return (
      <h1
        style={{
          backgroundImage:
            'url(' + require('../assets/images/story/' + props.pic) + ')'
        }}
        className='tile'
      >
        {props.title}
      </h1>
    );
  } else {
    return (
      <a href={props.link} className='tile-link'>
        <h1
          style={{
            backgroundImage:
              'url(' + require('../assets/images/story/' + props.pic) + ')',
               cursor: 'pointer'
          }}
          className='tile'
        >
          {props.title}
        </h1>
      </a>
    );
  }
}

export default Tile;
